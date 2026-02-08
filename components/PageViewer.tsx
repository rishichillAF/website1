import React, { useState } from 'react';
import { PageType } from '../types';
import { X, Minus, Maximize2, Heart, Github, Mail, Globe, ExternalLink, Copy, Check, Shield, FileText } from 'lucide-react';

interface PageViewerProps {
    page: PageType;
    onClose: () => void;
}

export const PageViewer: React.FC<PageViewerProps> = ({ page, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [copied, setCopied] = useState(false);

    const getTitle = () => {
        switch (page) {
            case PageType.ABOUT: return 'About JeffreyOS';
            case PageType.TOS: return 'Terms of Service';
            case PageType.PRIVACY: return 'Privacy Policy';
            case PageType.DONATE: return 'Donate Bitcoin';
            default: return '';
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText('36QW21MQQxUK7ohBQnvP5itipe4bFx91Bo');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const renderContent = () => {
        switch (page) {
            case PageType.ABOUT:
                return (
                    <div className="flex flex-col items-center justify-center min-h-full p-8 text-center bg-gradient-to-b from-white to-gray-50 dark:from-[#1c1c1e] dark:to-[#000000]">

                        {/* Aesthetic Logo */}
                        <div className="relative mb-8 group cursor-default">
                            <div className="w-28 h-28 bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] dark:from-[#3b82f6] dark:to-[#2563eb] rounded-[24px] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:rotate-1 border border-white/10 ring-1 ring-black/5">
                                {/* Gloss Effects */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

                                {/* Icon Text */}
                                <span className="text-white text-6xl font-medium tracking-tighter drop-shadow-md font-sans select-none z-10">J</span>
                            </div>
                        </div>

                        {/* App Info */}
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                            JeffreyOS
                        </h1>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 tracking-wide">
                            Version 1.0.0
                        </p>

                        <div className="max-w-md text-gray-600 dark:text-gray-300 mb-10 leading-relaxed space-y-4">
                            <p>
                                Welcome to <strong>JeffreyOS</strong>, a meticulously crafted digital experience simulating the personal operating system of Jeffrey.
                            </p>
                            <p>
                                Have ideas to enhance this digital realm? Drop me a line, or follow the development journey on GitHub.
                            </p>
                        </div>



                        {/* Action Buttons */}

                        {/* Reduced Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-3 w-full max-w-sm">
                            {/* No specific actions needed for white-label version currently */}
                        </div>

                    </div>
                );
            case PageType.TOS:
                return (
                    <div className="p-8 space-y-8 max-w-2xl mx-auto font-sans">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 mb-4">
                                <FileText size={20} className="text-gray-900 dark:text-white" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Engagement</h2>
                            <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest">Protocol v1.0</p>
                        </div>

                        <div className="space-y-6">
                            <div className="group p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    Simulation Integrity
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Accessing JeffreyOS constitutes entry into a historical reconstruction.
                                    By initiating the boot sequence, you acknowledge that this environment is a simulation.
                                    No actual emails are transmitted. No real messages are sent. The boundaries of this digital archive are absolute.
                                </p>
                            </div>

                            <div className="group p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    Liability Protocol
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The architect assumes no responsibility for the interpretation of data within this system.
                                    This is a portfolio piece designed for evaluation purposes only.
                                    You agree to use this software solely for personal exploration.
                                </p>
                            </div>

                            <div className="group p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Termination
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Access is a privilege. System integrity must be maintained.
                                    Any attempt to breach the sandbox environment is futile and strictly prohibited.
                                </p>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-gray-100 dark:border-white/5">
                            <p className="text-xs text-gray-400 font-mono">AGREEMENT HASH: 0x7F9...3A1</p>
                        </div>
                    </div>
                );
            case PageType.PRIVACY:
                return (
                    <div className="p-8 space-y-8 max-w-2xl mx-auto font-sans">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 mb-4">
                                <Shield size={20} className="text-gray-900 dark:text-white" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Data Sovereignty</h2>
                            <div className="flex justify-center gap-2 mt-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-600 uppercase tracking-wider border border-green-500/20">Surveillance: Null</span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-600 uppercase tracking-wider border border-blue-500/20">Encryption: Local</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-white/10">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Zero-Knowledge Architecture</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We do not collect, store, or transmit your interaction data to external servers.
                                    The system is designed with a vacuum-sealed architecture. Your digital footprint within JeffreyOS dissolves upon exit.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-white/10">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Local Persistence</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    To ensure continuity of the simulation, state data resides exclusively within your device's
                                    <code className="bg-gray-100 dark:bg-white/10 px-1 py-0.5 rounded text-xs mx-1 font-mono">LocalStorage</code>.
                                    You retain full custody of this data. Clearing your browser cache performs a full system wipe.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-white/10">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Silent Observer</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    No analytics. No tracking pixels. No cookies (except the ones you eat).
                                    The only eyes on this screen are yours.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const windowClasses = isMaximized
        ? "fixed inset-0 w-full h-full rounded-none"
        : "w-full max-w-[600px] h-[70vh] md:h-[500px] rounded-xl";

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
            <div
                className={`${windowClasses} bg-white dark:bg-[#1E1E1E] shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300 border border-gray-200 dark:border-gray-800 transition-all duration-300`}
                style={!isMaximized ? { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' } : {}}
            >
                {/* Modern Window Header */}
                <div className="h-10 bg-[#f3f3f3] dark:bg-[#2a2a2a] flex items-center px-4 justify-between shrink-0 border-b border-gray-200 dark:border-black/20 select-none drag-region">
                    <div className="flex gap-2 group">
                        <button
                            onClick={onClose}
                            className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] border border-[#E0443E]/50 flex items-center justify-center hover:brightness-90 active:scale-95 transition-all shadow-sm group-hover:shadow-none"
                        >
                            <X size={8} className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                        </button>
                        <button
                            onClick={onClose}
                            className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] border border-[#D89E24]/50 flex items-center justify-center hover:brightness-90 active:scale-95 transition-all shadow-sm group-hover:shadow-none"
                        >
                            <Minus size={8} className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                        </button>
                        <button
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="w-3.5 h-3.5 rounded-full bg-[#28C840] border border-[#1AAB29]/50 flex items-center justify-center hover:brightness-90 active:scale-95 transition-all shadow-sm group-hover:shadow-none"
                        >
                            <Maximize2 size={8} className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                        </button>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 opacity-80">{getTitle()}</span>
                    <div className="w-14"></div> {/* Spacer to center title perfectly */}
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto scrollbar-hide bg-white dark:bg-[#1E1E1E]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};
