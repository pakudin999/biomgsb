
import React, { useState, useMemo } from 'react';
import { TeamMember, Tab } from './types';
import { TEAM_MEMBERS, COLORS, SOCIAL_LINKS } from './constants';

// --- Icon Components ---
const VerifiedIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7 text-blue-500" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm3.123 5.467a.75.75 0 00-1.06 1.06l1.25 1.25a.75.75 0 001.06 0l2.5-2.5a.75.75 0 00-1.06-1.06L9.39 9.22l-.722-.722z" clipRule="evenodd" />
    </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const WhatsappIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
);
const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>);
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>);
const BlogIcon: React.FC<{ className?: string }> = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H21.976C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9v16.05h3V3.975zm5.976 0h-3v16.05h3V3.975z"/></svg>);


// --- Helper function ---
function getAvatarColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % COLORS.length);
    return COLORS[index];
}

// --- UI Components defined outside main App to prevent re-declaration on re-renders ---

const Background: React.FC = () => (
    <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-3xl"></div>
    </div>
);

const Header: React.FC = () => (
    <header className="text-center mb-8 bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
        <div className="w-full aspect-video bg-white/30 backdrop-blur-sm rounded-xl mb-6 overflow-hidden shadow-lg border border-white/20">
            <img 
                src="https://i.imgur.com/3tq8TU6.jpeg" 
                alt="Channel Banner"
                className="w-full h-full object-cover"
            />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
            <span>@kemchannelpg</span>
            <VerifiedIcon />
        </h1>
        <p className="text-gray-600">Your direct line to our expert team.</p>
    </header>
);

interface TabsProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}
const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => (
    <div className="mb-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl">
        <div className="flex space-x-2">
            <button
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${activeTab === 'contact' ? 'bg-amber-400 text-amber-900 shadow-lg' : 'bg-white/30 text-gray-700 hover:bg-white/40'}`}
                onClick={() => onTabChange('contact')}
            >
                CONTACT
            </button>
            <button
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${activeTab === 'group' ? 'bg-amber-400 text-amber-900 shadow-lg' : 'bg-white/30 text-gray-700 hover:bg-white/40'}`}
                onClick={() => onTabChange('group')}
            >
                GROUP OFFICIAL
            </button>
        </div>
    </div>
);

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
    <div className="relative mb-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl">
        <input
            type="text"
            placeholder="Find a specialist..."
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-4 py-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none search-focus placeholder-gray-600"
        />
        <SearchIcon className="absolute left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>
);

interface MemberCardProps {
    member: TeamMember;
    onContact: (member: TeamMember) => void;
}
const MemberCard: React.FC<MemberCardProps> = ({ member, onContact }) => {
    const initial = member.name.charAt(0).toUpperCase();
    const colorClasses = getAvatarColor(member.name);

    return (
        <div className="bg-white/25 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30 hover-scale fade-in">
            <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses}`}>
                    <span className="font-semibold text-lg">{initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
                        <VerifiedIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-500">Team Specialist</p>
                </div>
            </div>
            <button
                className="w-full contact-button text-gray-800 font-medium py-3 px-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40 hover:border-green-400 hover:bg-green-100/50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                onClick={() => onContact(member)}
            >
                <WhatsappIcon className="w-4 h-4" />
                <span>Contact</span>
            </button>
        </div>
    );
};

interface ConfirmationModalProps {
    member: TeamMember;
    onClose: () => void;
    onConfirm: (phone: string, name: string) => void;
}
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ member, onClose, onConfirm }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in" onClick={onClose}>
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 mx-4 max-w-sm w-full shadow-2xl border border-white/50" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <WhatsappIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact {member.name}?</h3>
                <p className="text-gray-600 text-sm">You will be redirected to WhatsApp to start a conversation.</p>
            </div>
            <div className="flex space-x-3">
                <button onClick={onClose} className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button onClick={() => onConfirm(member.phone, member.name)} className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Yes, Contact
                </button>
            </div>
        </div>
    </div>
);

const GroupSection: React.FC = () => {
    const openLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');
    
    return (
        <main className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl fade-in">
            <div className="text-center py-12">
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 mb-8 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
                        <div className="relative z-10 flex items-center space-x-5 mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <TelegramIcon className="w-10 h-10 text-white" />
                                </div>
                                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                            </div>
                            <div className="flex-1 text-left">
                                <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">KEMIRAGOLD</h4>
                                <p className="text-blue-700 font-medium mb-1">@KEMIRAGOLD</p>
                                <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span className="text-xs text-green-700">Active</span></div>
                            </div>
                        </div>
                    </div>
                     <button onClick={() => openLink(SOCIAL_LINKS.telegramChannel)} className="group w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"><TelegramIcon className="w-5 h-5"/></div>
                        <div className="text-center"><div className="text-lg font-bold">Join KEMIRAGOLD Channel</div><div className="text-sm text-blue-100">Get instant access</div></div>
                    </button>
                </div>
                <div className="max-w-2xl mx-auto mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us On Social Media</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <button onClick={() => openLink(SOCIAL_LINKS.facebook)} className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><FacebookIcon className="w-8 h-8"/><span className="font-semibold text-sm">Facebook</span></div></button>
                        <button onClick={() => openLink(SOCIAL_LINKS.telegramGroup)} className="group bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><TelegramIcon className="w-8 h-8"/><span className="font-semibold text-sm">Telegram</span></div></button>
                        <button onClick={() => openLink(SOCIAL_LINKS.instagram)} className="group bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><InstagramIcon className="w-8 h-8"/><span className="font-semibold text-sm">Instagram</span></div></button>
                        <button onClick={() => openLink(SOCIAL_LINKS.tiktok)} className="group bg-gradient-to-br from-gray-800 to-black hover:from-black hover:to-gray-900 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><TikTokIcon className="w-8 h-8"/><span className="font-semibold text-sm">TikTok</span></div></button>
                        <button onClick={() => openLink(SOCIAL_LINKS.twitter)} className="group bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><TwitterIcon className="w-8 h-8"/><span className="font-semibold text-sm">Twitter</span></div></button>
                        <button onClick={() => openLink(SOCIAL_LINKS.blog)} className="group bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"><div className="flex flex-col items-center space-y-3"><BlogIcon className="w-8 h-8"/><span className="font-semibold text-sm">Blog</span></div></button>
                    </div>
                </div>
            </div>
        </main>
    );
};

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('contact');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const filteredMembers = useMemo(() => {
        if (!searchTerm.trim()) {
            return TEAM_MEMBERS;
        }
        return TEAM_MEMBERS.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleContactConfirm = (phone: string, name: string) => {
        const message = encodeURIComponent(`Hi ${name}, I would like to get in touch with you.`);
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setSelectedMember(null);
    };

    return (
        <>
            <Background />
            <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
                <Header />
                <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'contact' && (
                    <>
                        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <main className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
                            {filteredMembers.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredMembers.map(member => (
                                        <MemberCard key={member.name} member={member} onContact={setSelectedMember} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-gray-400 mb-4">
                                        <SearchIcon className="w-16 h-16 mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No specialists found</h3>
                                    <p className="text-gray-500">Try adjusting your search terms</p>
                                </div>
                            )}
                        </main>
                    </>
                )}

                {activeTab === 'group' && <GroupSection />}
            </div>

            {selectedMember && (
                <ConfirmationModal
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                    onConfirm={handleContactConfirm}
                />
            )}
        </>
    );
};

export default App;
