'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  DollarSign,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  Mail
} from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Publicité sur Réseaux Sociaux",
      description: "Campagnes Facebook, Instagram, LinkedIn optimisées par IA",
      price: "À partir de 499$/mois",
      features: ["Ciblage intelligent", "A/B testing automatique", "ROI maximisé"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Marketing de Contenu",
      description: "Optimisation SEO et création de contenu par IA",
      price: "À partir de 799$/mois",
      features: ["Recherche de mots-clés", "Rédaction automatisée", "Analyse concurrentielle"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Marketing par Courriel",
      description: "Campagnes email personnalisées et automatisées",
      price: "À partir de 399$/mois",
      features: ["Segmentation IA", "Personnalisation avancée", "Automatisation complète"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytique & Reporting",
      description: "Tableaux de bord en temps réel avec insights IA",
      price: "À partir de 299$/mois",
      features: ["Analyses prédictives", "Rapports automatisés", "Recommandations IA"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestion de Marque",
      description: "Surveillance et gestion de réputation en ligne",
      price: "À partir de 599$/mois",
      features: ["Surveillance 24/7", "Réponses automatisées", "Analyse de sentiment"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pack Complet IA",
      description: "Tous les services avec support prioritaire",
      price: "À partir de 1999$/mois",
      features: ["Tous les services inclus", "Support dédié", "Stratégie personnalisée"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">IA Marketing Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Tarifs</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">À propos</a>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">
                Connexion
              </Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Marketing Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Propulsé par l'IA
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Les prix les plus compétitifs en Amérique du Nord.
              Automatisation complète, résultats garantis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quote" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center space-x-2">
                <span>Obtenir un Devis Gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Voir une Démo
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">-40%</div>
              <div className="text-gray-300">Prix inférieur à la moyenne</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Automatisation des tâches</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support et monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nos Services IA
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Les services les plus demandés au Québec et en Amérique du Nord
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/quote" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2">
                  <span>Obtenir un Devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Pourquoi Nous Choisir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 p-8 rounded-xl border border-blue-500/20">
              <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Prix Compétitifs</h3>
              <p className="text-gray-400">
                Notre moteur de calcul automatisé analyse les prix du marché nord-américain
                en temps réel pour vous offrir les tarifs les plus compétitifs.
              </p>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-xl border border-blue-500/20">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Automatisation Totale</h3>
              <p className="text-gray-400">
                Toutes les tâches sont automatisées grâce à l'IA, garantissant efficacité,
                cohérence et disponibilité 24/7.
              </p>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-xl border border-blue-500/20">
              <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Gestion Simplifiée</h3>
              <p className="text-gray-400">
                Accédez à votre compte personnel, consultez vos projets, signez électroniquement
                vos contrats et gérez vos paiements en un seul endroit.
              </p>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-xl border border-blue-500/20">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Expertise Québécoise</h3>
              <p className="text-gray-400">
                Spécialisés dans le marché québécois et nord-américain, nous comprenons
                les besoins spécifiques de votre audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez un devis personnalisé en moins de 2 minutes
          </p>
          <Link href="/quote" className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition">
            <span>Commencer Maintenant</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">IA Marketing Pro</span>
              </div>
              <p className="text-gray-400">
                La plateforme de marketing digital par IA la plus compétitive d'Amérique du Nord
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Réseaux Sociaux</a></li>
                <li><a href="#" className="hover:text-white transition">SEO & Contenu</a></li>
                <li><a href="#" className="hover:text-white transition">Email Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">Analytique</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">À propos</a></li>
                <li><a href="#" className="hover:text-white transition">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Sécurité</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IA Marketing Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
