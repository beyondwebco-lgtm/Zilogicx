'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Navigation2, Search, Plus, Layers, Map, Compass } from 'lucide-react';

type Tracker = {
  id: string;
  orderId: string;
  destination: string;
  rider: string;
  status: 'In Hub' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  progress: number; // 0 to 100
};

const initialTrackers: Tracker[] = [
  { id: 'TRK-501', orderId: 'ZIL-9011', destination: 'Indiranagar, Bangalore', rider: 'Arjun Kumar', status: 'Out for Delivery', progress: 85 },
  { id: 'TRK-502', orderId: 'ZIL-9012', destination: 'Whitefield, Bangalore', rider: 'Vikram Singh', status: 'In Transit', progress: 45 },
  { id: 'TRK-503', orderId: 'ZIL-9013', destination: 'Saket, Delhi', rider: 'Sanjay Dutt', status: 'In Hub', progress: 10 },
  { id: 'TRK-504', orderId: 'ZIL-9014', destination: 'Bandra, Mumbai', rider: 'Mohammad Ali', status: 'Delivered', progress: 100 },
];

export default function AdminTrackingPage() {
  const [trackers, setTrackers] = useState<Tracker[]>(initialTrackers);
  const [selectedTracker, setSelectedTracker] = useState<Tracker | null>(initialTrackers[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Tracker Form State
  const [orderId, setOrderId] = useState('');
  const [destination, setDestination] = useState('');
  const [rider, setRider] = useState('');
  const [status, setStatus] = useState<'In Hub' | 'In Transit' | 'Out for Delivery' | 'Delivered'>('In Hub');

  const handleAddTracker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId || !destination || !rider) return;

    const newTracker: Tracker = {
      id: `TRK-${Math.floor(500 + Math.random() * 500)}`,
      orderId,
      destination,
      rider,
      status,
      progress: status === 'In Hub' ? 10 : status === 'In Transit' ? 45 : status === 'Out for Delivery' ? 85 : 100
    };

    setTrackers([newTracker, ...trackers]);
    setSelectedTracker(newTracker);
    setOrderId('');
    setDestination('');
    setRider('');
    setShowAddModal(false);
  };

  const filteredTrackers = trackers.filter(t => 
    t.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.rider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-500" /> Live Delivery Tracking
          </h1>
          <p className="text-slate-400 font-medium">Real-time simulated tracking for active customer orders and rider routes.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm"
        >
          <Plus className="w-5 h-5" /> Initialize Tracker
        </button>
      </div>

      {/* Main Tracking Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: Trackers (Col 4) */}
        <div className="lg:col-span-4 bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl h-[580px] flex flex-col">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search active orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-850 rounded-xl bg-[#0B152A] text-slate-350 placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs font-medium"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
            {filteredTrackers.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTracker(t)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedTracker?.id === t.id 
                    ? 'bg-blue-600/10 border-blue-500/30' 
                    : 'bg-slate-900/50 border-slate-850 hover:bg-slate-800/25'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-500 font-mono">{t.id}</span>
                  <span className={`text-[10px] font-black uppercase ${
                    t.status === 'Delivered' ? 'text-green-450' : 
                    t.status === 'Out for Delivery' ? 'text-[#FFC700]' : 'text-blue-450'
                  }`}>
                    {t.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Order {t.orderId}</h4>
                <p className="text-xs text-slate-400 truncate mb-3">📍 {t.destination}</p>
                
                {/* Micro Progress Bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      t.status === 'Delivered' ? 'bg-green-500' : 'bg-blue-500'
                    }`} 
                    style={{ width: `${t.progress}%` }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Map & Route Details (Col 8) */}
        <div className="lg:col-span-8 bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl h-[580px] flex flex-col">
          {selectedTracker ? (
            <div className="flex flex-col h-full">
              {/* Map/Interactive Visual */}
              <div className="flex-1 bg-slate-950/70 border border-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center p-8 min-h-[300px]">
                {/* Simulated GPS Grid */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-t border-l border-white"></div>
                  ))}
                </div>

                {/* Map Graphic Node */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer circle */}
                  <div className="absolute w-48 h-48 rounded-full border border-blue-500/20 animate-ping-slow"></div>
                  <div className="absolute w-72 h-72 rounded-full border border-blue-500/10"></div>
                  
                  {/* Origin point */}
                  <div className="absolute -translate-x-32 -translate-y-16 flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-500 ring-4 ring-slate-500/20"></div>
                    <span className="text-[10px] text-slate-500 font-bold mt-1 uppercase font-mono">Hub</span>
                  </div>

                  {/* Destination point */}
                  <div className="absolute translate-x-32 translate-y-16 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-500/20 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] text-green-400 font-bold mt-1 uppercase font-mono">Delivery</span>
                  </div>

                  {/* Travel Line */}
                  <svg className="absolute w-full h-full pointer-events-none" style={{ minWidth: '400px' }}>
                    <line 
                      x1="20%" 
                      y1="35%" 
                      x2="80%" 
                      y2="65%" 
                      stroke="#1e293b" 
                      strokeWidth="2" 
                      strokeDasharray="4"
                    />
                    <line 
                      x1="20%" 
                      y1="35%" 
                      x2={`${20 + (selectedTracker.progress * 0.6)}%`} 
                      y2={`${35 + (selectedTracker.progress * 0.3)}%`} 
                      stroke="#3b82f6" 
                      strokeWidth="2.5" 
                      className="transition-all duration-1000"
                    />
                  </svg>

                  {/* Rider Marker */}
                  <div 
                    className="absolute w-10 h-10 rounded-full bg-blue-600/90 flex items-center justify-center text-white border-2 border-[#0B152A] shadow-xl transition-all duration-1000"
                    style={{
                      left: `${20 + (selectedTracker.progress * 0.6)}%`,
                      top: `${35 + (selectedTracker.progress * 0.3)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Navigation2 className="w-4 h-4 rotate-90 text-[#FFC700]" />
                  </div>
                </div>

                {/* Dashboard Compass Overlays */}
                <div className="absolute top-4 left-4 bg-slate-900/80 px-3 py-1.5 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-500" /> GPS Tracking Enabled
                </div>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3.5 py-1.5 border border-slate-850 rounded-lg text-xs font-bold text-white">
                  Rider Progress: <span className="text-[#FFC700]">{selectedTracker.progress}%</span>
                </div>
              </div>

              {/* Delivery Details Footer */}
              <div className="mt-4 p-5 bg-slate-900/50 border border-slate-850 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 font-bold uppercase tracking-wider block mb-1">Rider Assigned</span>
                  <span className="text-sm font-bold text-white">{selectedTracker.rider}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold uppercase tracking-wider block mb-1">Destination</span>
                  <span className="text-sm font-bold text-slate-350 truncate block">{selectedTracker.destination}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold uppercase tracking-wider block mb-1">Current Status</span>
                  <span className="text-sm font-bold text-slate-350">{selectedTracker.status}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold uppercase tracking-wider block mb-1">Tracker ID</span>
                  <span className="text-sm font-bold text-slate-500 font-mono">{selectedTracker.id}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Map className="w-16 h-16 text-slate-700 mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-white mb-1">No Active Tracker Selected</h3>
              <p className="text-slate-500 text-xs">Select any live order tracking code from the sidebar to inspect GPS paths.</p>
            </div>
          )}
        </div>

      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-[#0B152A] border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <h2 className="text-2xl font-black text-white mb-6">Initialize GPS Tracker</h2>
            
            <form onSubmit={handleAddTracker} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Order ID</label>
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. ZIL-9938"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Destination Address</label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Koramangala, Bangalore"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Assign Rider</label>
                <input
                  type="text"
                  required
                  value={rider}
                  onChange={(e) => setRider(e.target.value)}
                  placeholder="e.g. Mohammad Ali"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Starting Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                >
                  <option value="In Hub">In Hub</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
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
                  Start Tracker
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
