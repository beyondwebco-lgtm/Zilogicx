'use client';

import React, { useState } from 'react';
import { Truck, Plus, Search, UserCheck, ShieldAlert, Star, RefreshCw } from 'lucide-react';

type Rider = {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
  status: 'Active' | 'Inactive' | 'On Delivery';
  rating: number;
  totalDeliveries: number;
  city: string;
};

const initialRiders: Rider[] = [
  { id: 'R-101', name: 'Arjun Kumar', phone: '+91 98765 11223', vehicle: 'Electric Bike', status: 'On Delivery', rating: 4.8, totalDeliveries: 342, city: 'Bangalore' },
  { id: 'R-102', name: 'Mohammad Ali', phone: '+91 98765 44332', vehicle: 'Scooter', status: 'Active', rating: 4.9, totalDeliveries: 512, city: 'Mumbai' },
  { id: 'R-103', name: 'Sanjay Dutt', phone: '+91 98765 77665', vehicle: 'Electric Bike', status: 'Inactive', rating: 4.2, totalDeliveries: 128, city: 'Delhi' },
  { id: 'R-104', name: 'Vikram Singh', phone: '+91 98765 99887', vehicle: 'Van', status: 'Active', rating: 4.7, totalDeliveries: 890, city: 'Bangalore' },
];

export default function AdminDeliveryPage() {
  const [riders, setRiders] = useState<Rider[]>(initialRiders);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // New Rider Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('Electric Bike');
  const [city, setCity] = useState('');

  const handleAddRider = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city) return;

    const newRider: Rider = {
      id: `R-${Math.floor(100 + Math.random() * 900)}`,
      name,
      phone,
      vehicle,
      status: 'Active',
      rating: 5.0,
      totalDeliveries: 0,
      city
    };

    setRiders([newRider, ...riders]);
    setName('');
    setPhone('');
    setCity('');
    setShowAddModal(false);
  };

  const toggleStatus = (id: string) => {
    setRiders(riders.map(r => {
      if (r.id === id) {
        const nextStatus: Rider['status'] = 
          r.status === 'Active' ? 'On Delivery' : 
          r.status === 'On Delivery' ? 'Inactive' : 'Active';
        return { ...r, status: nextStatus };
      }
      return r;
    }));
  };

  const filteredRiders = riders.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = riders.filter(r => r.status === 'Active').length;
  const onDeliveryCount = riders.filter(r => r.status === 'On Delivery').length;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-500" /> Delivery Partner Management
          </h1>
          <p className="text-slate-400 font-medium">Onboard delivery partners, manage statuses, and view performance metrics.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm"
        >
          <Plus className="w-5 h-5" /> Onboard Rider
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-xl">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Total Riders</span>
            <span className="text-4xl font-black text-white">{riders.length}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
            <Truck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-xl">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Active Riders</span>
            <span className="text-4xl font-black text-green-400">{activeCount}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
            <UserCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-xl">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">On Delivery</span>
            <span className="text-4xl font-black text-[#FFC700]">{onDeliveryCount}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FFC700]/10 flex items-center justify-center text-[#FFC700] border border-[#FFC700]/20">
            <RefreshCw className="w-6 h-6 animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          placeholder="Search riders by ID, name, or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2.5 border border-slate-700 rounded-xl bg-[#050A15]/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-[#0B152A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all"
        />
      </div>

      {/* Riders Table */}
      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Rider ID</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Rider Info</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Performance</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-black text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredRiders.map((rider) => (
                <tr key={rider.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-400 font-mono">
                    {rider.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{rider.name}</span>
                      <span className="text-xs text-slate-400">{rider.phone} • {rider.city}</span>
                      <span className="text-[10px] text-slate-500 font-semibold mt-1 uppercase tracking-wider bg-slate-800/40 px-2 py-0.5 rounded-md inline-block w-fit">
                        {rider.vehicle}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {rider.status === 'Active' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                        Available
                      </span>
                    )}
                    {rider.status === 'On Delivery' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        On Job
                      </span>
                    )}
                    {rider.status === 'Inactive' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                        Offline
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-sm font-bold text-white">
                        <Star className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                        {rider.rating}
                      </div>
                      <span className="text-xs text-slate-500 font-medium">{rider.totalDeliveries} deliveries</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => toggleStatus(rider.id)}
                      className="text-blue-500 hover:text-blue-400 transition-colors font-extrabold text-xs uppercase tracking-wider border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 rounded-xl hover:bg-blue-500/20"
                    >
                      Cycle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-[#0B152A] border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <h2 className="text-2xl font-black text-white mb-6">Onboard Delivery Partner</h2>
            
            <form onSubmit={handleAddRider} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Rider Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amit Sharma"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 99988 77766"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Vehicle Type</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                  >
                    <option value="Electric Bike">Electric Bike</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Van">Van</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Operating City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bangalore"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-3 border border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white rounded-xl transition-all font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold text-sm shadow-lg shadow-blue-600/20"
                >
                  Save Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
