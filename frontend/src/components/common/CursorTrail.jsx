import { useEffect, useRef, useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function NextLevelCursorTrail() {
    const canvasRef = useRef(null);
    const { theme } = useContext(MyContext);

    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, lastX: 0, lastY: 0, speed: 0 });
    // Increased nodes for a longer, hyper-fluid ribbon effect (40 nodes)
    const nodes = useRef(Array.from({ length: 40 }, () => ({ x: 0, y: 0, vx: 0, vy: 0 })));
    const particles = useRef([]);
    const hue = useRef(260); // Starting with a premium purple/neon hue

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        nodes.current.forEach(node => {
            node.x = mouse.current.x;
            node.y = mouse.current.y;
        });

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e) => {
            // Calculate real-time velocity/speed of mouse
            const dx = e.clientX - mouse.current.x;
            const dy = e.clientY - mouse.current.y;
            mouse.current.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 100);

            mouse.current.lastX = mouse.current.x;
            mouse.current.lastY = mouse.current.y;
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Generate high-end multi-directional sparks based on speed
            if (mouse.current.speed > 5) {
                const particleCount = Math.floor(mouse.current.speed / 10) + 1;
                for (let i = 0; i < Math.min(particleCount, 4); i++) {
                    particles.current.push({
                        x: e.clientX,
                        y: e.clientY,
                        // Velocity matches the swipe direction slightly for natural physics
                        vx: dx * 0.15 + (Math.random() - 0.5) * 4,
                        vy: dy * 0.15 + (Math.random() - 0.5) * 4,
                        alpha: 1,
                        size: Math.random() * 2.5 + 1,
                        length: Math.random() * 15 + 5, // For stretch star-burst lines
                        hue: (hue.current + Math.random() * 40 - 20) % 360
                    });
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // --- PREMIUM RENDER LOOP ---
        const renderLoop = () => {
            // Subtly clearing canvas with a trail effect can create a motion-blur look,
            // but for transparency over HTML, clearRect is cleanest.
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // 1. Slow, Premium Color Cycle (Shifting between Cyan, Purple, Magenta)
            hue.current = (hue.current + 0.5) % 360;

            // 2. Advanced Physics Pass: Head with higher responsiveness, Tail with organic rubber lagging
            let head = nodes.current[0];
            head.x += (mouse.current.x - head.x) * 0.45; // Super crisp response
            head.y += (mouse.current.y - head.y) * 0.45;

            for (let i = 1; i < nodes.current.length; i++) {
                const prev = nodes.current[i - 1];
                const curr = nodes.current[i];

                // Dynamic spring constants based on node position (creates tapering latency)
                const spring = 0.22 - (i / nodes.current.length) * 0.12;
                const friction = 0.52 + (i / nodes.current.length) * 0.12;

                curr.vx += (prev.x - curr.x) * spring;
                curr.vy += (prev.y - curr.y) * spring;
                curr.vx *= friction;
                curr.vy *= friction;

                curr.x += curr.vx;
                curr.y += curr.vy;
            }

            // 3. Drawing Pass: Multi-layered Neon Ribbon
            if (nodes.current.length > 1) {
                ctx.save();
                
                // Outer Deep Glow Layer (Dark mode exclusive premium ambiance)
                if (theme === "dark") {
                    ctx.shadowBlur = 35;
                    ctx.shadowColor = `hsla(${hue.current}, 100%, 60%, 0.6)`;
                }

                // LAYER 1: Core thick fluid trail
                ctx.beginPath();
                ctx.moveTo(nodes.current[0].x, nodes.current[0].y);
                
                for (let i = 1; i < nodes.current.length - 1; i++) {
                    const p1 = nodes.current[i];
                    const p2 = nodes.current[i + 1];
                    const xc = (p1.x + p2.x) / 2;
                    const yc = (p1.y + p2.y) / 2;
                    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
                }

                // Speed-adaptive stroke width (thinner when moving ultra-fast)
                const targetLineWidth = Math.max(18 - mouse.current.speed * 0.1, 8);
                
                // Create a beautiful linear gradient along the canvas or rely on dynamic stroke
                const gradient = ctx.createLinearGradient(
                    nodes.current[0].x, nodes.current[0].y, 
                    nodes.current[nodes.current.length - 1].x, nodes.current[nodes.current.length - 1].y
                );
                
                if (theme === "dark") {
                    gradient.addColorStop(0, `hsla(${hue.current}, 100%, 70%, 0.9)`);
                    gradient.addColorStop(0.3, `hsla(${(hue.current + 40) % 360}, 95%, 60%, 0.6)`);
                    gradient.addColorStop(1, `hsla(${(hue.current + 90) % 360}, 90%, 50%, 0)`);
                } else {
                    gradient.addColorStop(0, `hsla(${hue.current}, 90%, 50%, 0.7)`);
                    gradient.addColorStop(0.5, `hsla(${(hue.current + 30) % 360}, 85%, 45%, 0.4)`);
                    gradient.addColorStop(1, `hsla(${(hue.current + 60) % 360}, 80%, 40%, 0)`);
                }

                ctx.strokeStyle = gradient;
                ctx.lineWidth = targetLineWidth;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke();

                // LAYER 2: Inner Ultra-Bright Plasma Core Line (Gives the premium "glass/neon" look)
                if (theme === "dark") {
                    ctx.shadowBlur = 0; // Turn off shadow blur for sharp inner core
                    ctx.beginPath();
                    ctx.moveTo(nodes.current[0].x, nodes.current[0].y);
                    for (let i = 1; i < nodes.current.length - 1; i++) {
                        const p1 = nodes.current[i];
                        const p2 = nodes.current[i + 1];
                        const xc = (p1.x + p2.x) / 2;
                        const yc = (p1.y + p2.y) / 2;
                        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
                    }
                    ctx.strokeStyle = `rgba(255, 255, 255, 0.85)`;
                    ctx.lineWidth = targetLineWidth * 0.25; // 25% of outer width
                    ctx.stroke();
                }

                ctx.restore();
            }

            // 4. Advanced Star-Burst Particles Rendering (Motion Stretched Sparks)
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.04; // Micro-gravity effect pulls sparks slightly down
                p.alpha -= 0.025;

                if (p.alpha <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                
                // Directing sparks as sharp light streaks instead of simple dots
                const speedMagnitude = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const stretchX = (p.vx / speedMagnitude) * p.length * p.alpha;
                const stretchY = (p.vy / speedMagnitude) * p.length * p.alpha;

                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - stretchX, p.y - stretchY);
                
                ctx.lineWidth = p.size;
                ctx.lineCap = "round";
                ctx.strokeStyle = `hsla(${p.hue}, 100%, 75%, ${p.alpha})`;
                ctx.stroke();
                ctx.restore();
            }

            // Slow down mouse speed state gradually
            mouse.current.speed *= 0.95;

            animationFrameId = requestAnimationFrame(renderLoop);
        };
        renderLoop();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    const blendMode = theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply";

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-[9999] ${blendMode}`}
            style={{ 
                backfaceVisibility: "hidden", 
                transform: "translate3d(0,0,0)",
                willChange: "transform" 
            }}
        />
    );
}