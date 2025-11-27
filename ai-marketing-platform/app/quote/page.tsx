'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

interface QuoteFormData {
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [formData, setFormData] = useState<QuoteFormData>({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    services: [],
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    { id: 'social', name: 'Publicité Réseaux Sociaux', basePrice: 499 },
    { id: 'seo', name: 'SEO & Marketing de Contenu', basePrice: 799 },
    { id: 'email', name: 'Marketing par Courriel', basePrice: 399 },
    { id: 'analytics', name: 'Analytique & Reporting', basePrice: 299 },
    { id: 'brand', name: 'Gestion de Marque', basePrice: 599 },
    { id: 'complete', name: 'Pack Complet IA', basePrice: 1999 }
  ];

  const industries = [
    'Commerce de détail',
    'Services professionnels',
    'Technologie',
    'Santé et bien-être',
    'Restauration',
    'Immobilier',
    'Éducation',
    'Finance',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 1000$/mois',
    '1000$ - 2500$/mois',
    '2500$ - 5000$/mois',
    '5000$ - 10000$/mois',
    'Plus de 10000$/mois'
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const calculateQuote = () => {
    setLoading(true);

    setTimeout(() => {
      let baseTotal = 0;
      const selectedServices = services.filter(s => formData.services.includes(s.id));

      selectedServices.forEach(service => {
        baseTotal += service.basePrice;
      });

      // Bundle discount
      let discount = 0;
      if (formData.services.length >= 3) {
        discount = 0.20; // 20% discount
      } else if (formData.services.length === 2) {
        discount = 0.10; // 10% discount
      }

      const discountAmount = baseTotal * discount;
      const finalPrice = baseTotal - discountAmount;

      setQuote({
        services: selectedServices,
        baseTotal,
        discount: discount * 100,
        discountAmount,
        finalPrice,
        savings: discountAmount
      });

      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      calculateQuote();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Obtenez Votre Devis
          </h1>
          <p className="text-gray-400 mb-8">
            Réponses en temps réel grâce à notre moteur de calcul IA
          </p>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'}`}>
                1
              </div>
              <span className="ml-3 text-white">Informations</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-slate-700">
              <div className={`h-full bg-blue-600 transition-all duration-500`} style={{ width: step >= 2 ? '100%' : '0%' }} />
            </div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'}`}>
                2
              </div>
              <span className="ml-3 text-white">Services</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-slate-700">
              <div className={`h-full bg-blue-600 transition-all duration-500`} style={{ width: step >= 3 ? '100%' : '0%' }} />
            </div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'}`}>
                3
              </div>
              <span className="ml-3 text-white">Devis</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="email@exemple.com"
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
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Budget mensuel estimé *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition"
                >
                  Continuer
                </button>
              </motion.div>
            )}

            {/* Step 2: Services Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-4">
                    Sélectionnez vos services *
                  </label>
                  <div className="space-y-4">
                    {services.map(service => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                          formData.services.includes(service.id)
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-blue-500/20 bg-slate-700/50 hover:border-blue-500/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              formData.services.includes(service.id)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-400'
                            }`}>
                              {formData.services.includes(service.id) && (
                                <CheckCircle className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <span className="text-white font-semibold">{service.name}</span>
                          </div>
                          <span className="text-blue-400 font-bold">${service.basePrice}/mois</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Description de vos besoins
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Décrivez vos objectifs marketing..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 rounded-lg transition"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={formData.services.length === 0}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Calculer le Devis
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Quote Result */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader2 className="w-16 h-16 text-blue-400 animate-spin mb-4" />
                    <p className="text-white text-xl">Calcul de votre devis personnalisé...</p>
                    <p className="text-gray-400 mt-2">Analyse des prix du marché en cours</p>
                  </div>
                ) : quote && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl">
                      <h2 className="text-3xl font-bold text-white mb-2">Votre Devis Personnalisé</h2>
                      <p className="text-blue-100">Prix optimisé par notre moteur IA</p>
                    </div>

                    <div className="bg-slate-700/50 p-6 rounded-xl space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Services sélectionnés:</h3>
                      {quote.services.map((service: any) => (
                        <div key={service.id} className="flex justify-between items-center text-white">
                          <span>{service.name}</span>
                          <span className="font-semibold">${service.basePrice}/mois</span>
                        </div>
                      ))}

                      <div className="border-t border-blue-500/20 pt-4 mt-4">
                        <div className="flex justify-between items-center text-white">
                          <span>Sous-total</span>
                          <span className="font-semibold">${quote.baseTotal}/mois</span>
                        </div>
                        {quote.discount > 0 && (
                          <div className="flex justify-between items-center text-green-400 mt-2">
                            <span>Réduction ({quote.discount}%)</span>
                            <span className="font-semibold">-${quote.discountAmount}/mois</span>
                          </div>
                        )}
                      </div>

                      <div className="border-t-2 border-blue-500/20 pt-4 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-white">Total</span>
                          <span className="text-3xl font-bold text-blue-400">${quote.finalPrice}/mois</span>
                        </div>
                      </div>
                    </div>

                    {quote.discount > 0 && (
                      <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-xl">
                        <p className="text-green-400 font-semibold text-center">
                          🎉 Vous économisez ${quote.savings}/mois grâce à notre offre groupée!
                        </p>
                      </div>
                    )}

                    <div className="bg-slate-700/50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-white mb-4">Prochaines étapes:</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Créez votre compte pour accéder à votre espace client</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Consultez et validez votre cahier des charges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Signez électroniquement votre contrat</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Configurez votre méthode de paiement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Lancez vos campagnes IA automatisées</span>
                        </li>
                      </ul>
                    </div>

                    <Link
                      href="/signup"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition flex items-center justify-center"
                    >
                      Créer Mon Compte
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
