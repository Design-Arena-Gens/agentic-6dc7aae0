'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2, CheckCircle } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    industry: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        businessName: formData.businessName,
        email: formData.email
      }));
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Créer un Compte</h1>
          <p className="text-gray-400 mb-8">Commencez votre transformation digitale</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Nom de l'entreprise *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="Votre entreprise"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email professionnel *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="email@entreprise.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Mot de passe *
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                minLength={8}
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Confirmer le mot de passe *
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                minLength={8}
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="(514) 555-0123"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Industrie *
              </label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Sélectionnez votre industrie</option>
                <option value="retail">Commerce de détail</option>
                <option value="services">Services professionnels</option>
                <option value="tech">Technologie</option>
                <option value="health">Santé et bien-être</option>
                <option value="food">Restauration</option>
                <option value="realestate">Immobilier</option>
                <option value="education">Éducation</option>
                <option value="finance">Finance</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Création du compte...</span>
                </>
              ) : (
                <span>Créer Mon Compte</span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Déjà un compte?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
                Se connecter
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
