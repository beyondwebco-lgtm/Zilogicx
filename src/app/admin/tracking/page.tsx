'use client';

import React, { useState } from 'react';
import { MapPin, Search, Edit3, Save, X, Plus } from 'lucide-react';

type Tracker = {
  id: string;
  orderId: string;
  destination: string;
  rider: string;
  status: 'In Hub' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  current_location: string;
};

const initialTrackers: Tracker[] = [
  { id: 'TRK-501', orderId: 'ZIL-9011', destination: 'Indiranagar, Bangalore', rider: 'Arjun Kumar', status: 'Out for Delivery', current_location: 'Koramangala Checkpoint' },
  { id: 'TRK-502', orderId: 'ZIL-9012', destination: 'Whitefield, Bangalore', rider: 'Vikram Singh', status: 'In Transit', current_location: 'Marathahalli Bridge' },
  { id: 'TRK-503', orderId: 'ZIL-9013', destination: 'Saket, Delhi', rider: 'Sanjay Dutt', status: 'In Hub', current_location: 'Delhi Central Hub' },
  { id: 'TRK-504', orderId: 'ZIL-9014', destination: 'Bandra, Mumbai', rider: 'Mohammad Ali', status: 'Delivered', current_location: 'Customer Doorstep' },
];

export default function AdminTrackingPage() {
  const [trackers, setTrackers] = useState<Tracker[]>(initialTrackers);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLocation, setEditLocation] = useState('');
  const [editStatus, setEditStatus] = useState<Tracker['status']>('In Transit');

  // Creation State
  const [isCreating, setIsCreating] = useState(false);
  const [newTracker, setNewTracker] = useState<Partial<Tracker>>({
    id: `TRK-${Math.floor(1000 + Math.random() * 9000)}`,
    orderId: '',
    destination: '',
    status: 'In Hub',
    current_location: ''
  });

  const startEditing = (tracker: Tracker) => {
    setIsCreating(false);
    setEditingId(tracker.id);
    setEditLocation(tracker.current_location);
    setEditStatus(tracker.status);
  };

  const saveEdit = () => {
    if (!editingId) return;
    setTrackers(trackers.map(t => 
      t.id === editingId ? { ...t, current_location: editLocation, status: editStatus } : t
    ));
    setEditingId(null);
  };

  const startCreating = () => {
    setEditingId(null);
    setIsCreating(true);
    setNewTracker({
      id: `TRK-${Math.floor(1000 + Math.random() * 9000)}`,
      orderId: '',
      destination: '',
      status: 'In Hub',
      current_location: '',
      rider: 'Pending Assignment'
    });
  };

  const saveNew = () => {
    if (!newTracker.orderId || !newTracker.destination) {
      alert("Please enter Order ID and Destination.");
      return;
    }
    setTrackers([newTracker as Tracker, ...trackers]);
    setIsCreating(false);
  };

  const filteredTrackers = trackers.filter(t => 
    t.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.current_location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-500" /> Shipment Updates
          </h1>
          <p className="text-slate-400 font-medium">Update the current location and status of active shipments.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search shipments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full md:w-64 pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-[#050A15]/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all"
            />
          </div>
          <button 
            onClick={startCreating}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#FFC700] hover:bg-[#e5b300] text-black font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-[#FFC700]/10"
          >
            <Plus className="w-5 h-5" /> New Shipment
          </button>
        </div>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Tracking ID</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Order & Dest</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Current Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Last Known Location</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-black text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 bg-transparent">
              
              {/* Creation Row */}
              {isCreating && (
                <tr className="bg-blue-900/10 border-l-4 border-blue-500">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#FFC700] font-mono">{newTracker.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                      <input 
                        type="text"
                        placeholder="Order ID"
                        value={newTracker.orderId}
                        onChange={(e) => setNewTracker({...newTracker, orderId: e.target.value})}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                      />
                      <input 
                        type="text"
                        placeholder="Destination"
                        value={newTracker.destination}
                        onChange={(e) => setNewTracker({...newTracker, destination: e.target.value})}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select 
                      value={newTracker.status}
                      onChange={(e) => setNewTracker({...newTracker, status: e.target.value as any})}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="In Hub">In Hub</option>
                      <option value="In Transit">In Transit</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input 
                      type="text"
                      placeholder="Current Location"
                      value={newTracker.current_location}
                      onChange={(e) => setNewTracker({...newTracker, current_location: e.target.value})}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={saveNew} className="text-green-500 hover:text-green-400" title="Save New">
                        <Save className="w-5 h-5" />
                      </button>
                      <button onClick={() => setIsCreating(false)} className="text-slate-500 hover:text-slate-400" title="Cancel">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}

              {/* Existing Trackers */}
              {filteredTrackers.map((tracker) => (
                <tr key={tracker.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#FFC700] font-mono">{tracker.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{tracker.orderId}</span>
                      <span className="text-xs text-slate-400">📍 {tracker.destination}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === tracker.id ? (
                      <select 
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value as any)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="In Hub">In Hub</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tracker.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === tracker.id ? (
                      <input 
                        type="text"
                        value={editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 w-full max-w-[200px]"
                      />
                    ) : (
                      <span className="text-sm text-slate-300">{tracker.current_location}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {editingId === tracker.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={saveEdit} className="text-green-500 hover:text-green-400" title="Save">
                          <Save className="w-5 h-5" />
                        </button>
                        <button onClick={() => setEditingId(null)} className="text-slate-500 hover:text-slate-400" title="Cancel">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => startEditing(tracker)} className="text-blue-500 hover:text-blue-400" title="Update Location">
                        <Edit3 className="w-5 h-5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTrackers.length === 0 && !isCreating && (
            <div className="p-12 text-center text-slate-500 font-bold">
              No shipments found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
