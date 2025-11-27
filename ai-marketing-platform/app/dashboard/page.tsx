'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Settings,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  LogOut,
  Sparkles,
  CheckCircle,
  Clock,
  FileSignature,
  Play,
  Pause
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) return null;

  const projects = [
    {
      id: 1,
      name: 'Campagne Facebook Q4',
      service: 'Publicité Réseaux Sociaux',
      status: 'active',
      budget: 499,
      startDate: '2024-01-15',
      metrics: {
        reach: '45,234',
        engagement: '12.4%',
        conversions: 234
      }
    },
    {
      id: 2,
      name: 'Optimisation SEO',
      service: 'SEO & Marketing de Contenu',
      status: 'active',
      budget: 799,
      startDate: '2024-01-10',
      metrics: {
        keywords: 156,
        ranking: '+24',
        traffic: '+38%'
      }
    }
  ];

  const contracts = [
    {
      id: 1,
      name: 'Contrat Services Marketing Q1-Q2 2024',
      status: 'signed',
      date: '2024-01-05',
      amount: 1298
    },
    {
      id: 2,
      name: 'Avenants Services Additionnels',
      status: 'pending',
      date: '2024-02-01',
      amount: 599
    }
  ];

  const payments = [
    {
      id: 1,
      description: 'Services Marketing - Janvier 2024',
      amount: 1298,
      status: 'paid',
      date: '2024-01-05'
    },
    {
      id: 2,
      description: 'Services Marketing - Février 2024',
      amount: 1298,
      status: 'upcoming',
      date: '2024-02-05'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-sm border-r border-blue-500/20 p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Sparkles className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold text-white">IA Marketing Pro</span>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Vue d'ensemble</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Mes Projets</span>
          </button>

          <button
            onClick={() => setActiveTab('contracts')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeTab === 'contracts'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileSignature className="w-5 h-5" />
            <span>Contrats</span>
          </button>

          <button
            onClick={() => setActiveTab('payments')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeTab === 'payments'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CreditCard className="w-5 h-5" />
            <span>Paiements</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Paramètres</span>
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-slate-800 p-4 rounded-lg mb-4">
            <p className="text-white font-semibold">{user.businessName}</p>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">
              Bonjour, {user.businessName} 👋
            </h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                  <span className="text-green-400 text-sm font-semibold">+24%</span>
                </div>
                <p className="text-gray-400 text-sm">ROI Moyen</p>
                <p className="text-3xl font-bold text-white">342%</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-green-400 text-sm font-semibold">+18%</span>
                </div>
                <p className="text-gray-400 text-sm">Portée Totale</p>
                <p className="text-3xl font-bold text-white">127K</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-8 h-8 text-blue-400" />
                  <span className="text-green-400 text-sm font-semibold">+32%</span>
                </div>
                <p className="text-gray-400 text-sm">Engagement</p>
                <p className="text-3xl font-bold text-white">14.2%</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8 text-blue-400" />
                  <span className="text-gray-400 text-sm font-semibold">Ce mois</span>
                </div>
                <p className="text-gray-400 text-sm">Budget Utilisé</p>
                <p className="text-3xl font-bold text-white">$1,298</p>
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Campagnes Actives</h2>
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="bg-slate-700/50 p-4 rounded-lg border border-blue-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-white font-semibold">{project.name}</h3>
                        <p className="text-gray-400 text-sm">{project.service}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold flex items-center">
                          <Activity className="w-3 h-3 mr-1" />
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-gray-400 text-xs uppercase">{key}</p>
                          <p className="text-white font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/quote" className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition">
                <h3 className="text-white font-semibold mb-2">Nouveau Service</h3>
                <p className="text-blue-100 text-sm">Ajouter un service à votre forfait</p>
              </Link>

              <button className="bg-slate-800/80 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition text-left">
                <h3 className="text-white font-semibold mb-2">Télécharger Rapport</h3>
                <p className="text-gray-400 text-sm">Rapport mensuel de performance</p>
              </button>

              <button className="bg-slate-800/80 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition text-left">
                <h3 className="text-white font-semibold mb-2">Support Client</h3>
                <p className="text-gray-400 text-sm">Contactez notre équipe</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-white">Mes Projets</h1>
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Nouveau Projet
              </Link>
            </div>

            <div className="space-y-6">
              {projects.map(project => (
                <div key={project.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
                      <p className="text-gray-400">{project.service}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-semibold">
                        Active
                      </span>
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Budget mensuel</p>
                      <p className="text-white text-xl font-bold">${project.budget}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Date de début</p>
                      <p className="text-white font-semibold">{project.startDate}</p>
                    </div>
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-gray-400 text-sm mb-1 capitalize">{key}</p>
                        <p className="text-white text-xl font-bold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-blue-500/20 pt-4">
                    <h3 className="text-white font-semibold mb-3">Cahier des charges</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Configuration initiale complétée
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Campagnes publicitaires actives
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Reporting automatisé configuré
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                      Voir les Détails
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition">
                      Télécharger Rapport
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contracts Tab */}
        {activeTab === 'contracts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">Mes Contrats</h1>

            <div className="space-y-6">
              {contracts.map(contract => (
                <div key={contract.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <FileSignature className="w-8 h-8 text-blue-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{contract.name}</h3>
                        <p className="text-gray-400 mb-4">Montant: ${contract.amount}/mois</p>
                        <p className="text-gray-400 text-sm">Date: {contract.date}</p>
                      </div>
                    </div>
                    <div>
                      {contract.status === 'signed' ? (
                        <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-semibold flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Signé
                        </span>
                      ) : (
                        <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-semibold flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          En attente
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                      Télécharger PDF
                    </button>
                    {contract.status === 'pending' && (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                        Signer Électroniquement
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-white">Paiements</h1>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Gérer Méthodes de Paiement
              </button>
            </div>

            {/* Payment Methods */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Méthodes de Paiement</h2>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl">
                <p className="text-blue-100 text-sm mb-2">CARTE PRINCIPALE</p>
                <p className="text-white text-2xl font-bold mb-4">•••• •••• •••• 4242</p>
                <p className="text-blue-100">Expire 12/25</p>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
              <h2 className="text-xl font-bold text-white mb-6">Historique des Paiements</h2>
              <div className="space-y-4">
                {payments.map(payment => (
                  <div key={payment.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-blue-500/10">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="w-6 h-6 text-blue-400" />
                      <div>
                        <p className="text-white font-semibold">{payment.description}</p>
                        <p className="text-gray-400 text-sm">{payment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-white font-bold text-xl">${payment.amount}</p>
                      {payment.status === 'paid' ? (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                          Payé
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                          À venir
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">Paramètres</h1>

            <div className="space-y-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Informations du Compte</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Nom de l'entreprise</label>
                    <input
                      type="text"
                      value={user.businessName}
                      className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Enregistrer les Modifications
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <span className="text-white">Rapports hebdomadaires par email</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-white">Alertes de campagnes</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-white">Rappels de paiement</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </label>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-red-500/20 p-6">
                <h2 className="text-xl font-bold text-red-400 mb-4">Zone Dangereuse</h2>
                <p className="text-gray-400 mb-4">
                  La suppression de votre compte est permanente et irréversible.
                </p>
                <button className="bg-red-600/20 hover:bg-red-600/30 text-red-400 px-6 py-3 rounded-lg font-semibold transition">
                  Supprimer le Compte
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
