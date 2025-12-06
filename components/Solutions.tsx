"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SOLUTIONS } from "@/data/solutions";

export default function Solutions() {
    return (
        <section id="solutions" className="py-16 md:py-32 px-4 md:px-6 bg-muted/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-primary"
                    >
                        Solusi untuk Memperkuat Integrasi Nasional
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-20 bg-secondary mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {SOLUTIONS.map((sol, index) => (
                        <Link href={`/solutions/${sol.slug}`} key={index} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-2xl border ${sol.border} bg-gradient-to-br ${sol.gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`p-3 rounded-xl bg-white shadow-sm ${sol.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <sol.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {sol.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {sol.shortDescription}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <span>Klik untuk selengkapnya</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
