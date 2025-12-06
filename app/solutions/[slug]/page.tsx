"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { SOLUTIONS } from "@/data/solutions";

export default function SolutionDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const solution = SOLUTIONS.find((s) => s.slug === slug);

    if (!solution) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Solusi tidak ditemukan</h1>
                    <Link href="/" className="text-primary hover:underline">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar alwaysSolid={true} />

            <div className="pt-24 pb-16 px-4 md:px-6 container mx-auto max-w-5xl">
                {/* Navigation Card - Other Solutions */}
                <div className="mb-12 overflow-x-auto pb-4">
                    <div className="flex gap-4 min-w-max">
                        {SOLUTIONS.filter((s) => s.slug !== slug).map((s, index) => (
                            <Link key={index} href={`/solutions/${s.slug}`}>
                                <div className={`p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors w-64 md:w-72 flex items-center gap-3 group cursor-pointer shadow-sm hover:shadow-md`}>
                                    <div className={`p-2 rounded-lg bg-white/10 ${s.iconColor}`}>
                                        <s.icon size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                                            {s.title}
                                        </p>
                                    </div>
                                    <ChevronRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Back Button */}
                <Link href="/#solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Kembali ke Beranda</span>
                </Link>

                {/* Content Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${solution.gradient} border ${solution.border} mb-6`}>
                        <solution.icon size={20} className={solution.iconColor} />
                        <span className={`font-semibold ${solution.iconColor}`}>Solusi Strategis</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-6">
                        {solution.title}
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                >
                    <div className="lg:col-span-2 space-y-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                                {solution.content.intro}
                            </p>

                            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm my-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                                        <ChevronRight size={18} />
                                    </span>
                                    Langkah-langkah Utama
                                </h3>
                                <ul className="space-y-4">
                                    {solution.content.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-lg font-medium italic text-primary/80 border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                                "{solution.content.conclusion}"
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Context */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 rounded-2xl bg-muted/30 border">
                                <h4 className="font-bold mb-4 text-lg">Mengapa ini penting?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    Setiap solusi dirancang untuk menjawab akar permasalahan spesifik yang telah diidentifikasi, guna menciptakan perdamaian yang berkelanjutan di Papua.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
