import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Config from user request
        const PARTICLE_COLOR = "#6EC1E4"; // config.particles.color.value
        const LINE_COLOR_HEX = "#6EC1E4"; // config.particles.line_linked.color
        const LINE_OPACITY = 0.25; // config.particles.line_linked.opacity
        const GRAB_LINE_OPACITY = 0.6; // config.interactivity.modes.grab.line_linked.opacity
        const PARTICLE_OPACITY = 0.5; // config.particles.opacity.value
        const LINK_DISTANCE = 140; // config.particles.line_linked.distance
        const GRAB_DISTANCE = 180; // config.interactivity.modes.grab.distance
        const MOVE_SPEED = 1.2; // config.particles.move.speed

        let w, h;
        const mouse = { x: null, y: null }; // null = not hovering
        let animationFrameId;

        // Helper to convert hex to rgb for rgba strings
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
        const rgbParticle = hexToRgb(PARTICLE_COLOR);
        const rgbLine = hexToRgb(LINE_COLOR_HEX);

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            // Density logic approximation: value_area = 900. 
            // particles.number.value = 55 (at 800x600 approx?). 
            // Let's just create a fixed number scaled slightly by area or just fixed as requested. 
            // User put 55 with density enable=true. 
            // Let's calculate count based on area to match "density: enable".
            // area = w * h. ratio = area / 800000 approx? 
            // Simple approach: re-init particles on resize not strictly needed if we just wrap, 
            // but let's just spawn initial count and handle bounds.
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        // Initialize particles
        // Density calc: 55 particles per 900^2 px area roughly? 
        // actually standard density logic in particles.js is: particles * (canvas.width * canvas.height / value_area^2) ?? 
        // usually it's canvas.width * canvas.height / density_value_area * particles_value
        // Let's just stick to ~80-100 for a standard desktop screen to look good, or calculate.
        // 55 particles is a bit sparse for full screen, but matches the config.
        let particles = [];
        const initParticles = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;

            const area = w * h;
            // specific particles.js density formula: 
            // num_particles = particles.number.value * (canvas.width * canvas.height / 800^2) ? 
            // Actually config says value_area: 900.
            // Let's approximate: 55 particles on a generous screen.
            // Cap particles at 100 for performance
            const count = Math.min(Math.floor((area / (800 * 800)) * 60 + 40), 100);

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * MOVE_SPEED,
                vy: (Math.random() - 0.5) * MOVE_SPEED,
                size: (Math.random() * 3) + 1 // size value 3, random true (0-3) + min
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Optimization: Batch particle drawing (1 draw call)
            ctx.beginPath();
            ctx.fillStyle = `rgba(${rgbParticle.r}, ${rgbParticle.g}, ${rgbParticle.b}, ${PARTICLE_OPACITY})`;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce / Out Mode "out" (wrap)
                if (p.x < 0) p.x = w;
                else if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                else if (p.y > h) p.y = 0;

                // Add to path
                ctx.moveTo(p.x + p.size, p.y);
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            }
            ctx.fill();

            // Optimization: Squared distances & Reduced individual stroke calls
            const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;
            const GRAB_DISTANCE_SQ = GRAB_DISTANCE * GRAB_DISTANCE;

            // Draw Lines
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Interactivity: Grab
                if (mouse.x != null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < GRAB_DISTANCE_SQ) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${rgbLine.r}, ${rgbLine.g}, ${rgbLine.b}, ${GRAB_LINE_OPACITY})`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < LINK_DISTANCE_SQ) {
                        const dist = Math.sqrt(distSq);
                        const opacity = LINE_OPACITY - (dist / LINK_DISTANCE) * LINE_OPACITY;
                        if (opacity > 0.05) { // Skip very faint lines
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(${rgbLine.r}, ${rgbLine.g}, ${rgbLine.b}, ${opacity})`;
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Setup
        initParticles(); // Initial calc
        window.addEventListener("resize", initParticles);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", initParticles);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="hero-particles" className="header-canvas" />;
};

export default HeroAnimation;
