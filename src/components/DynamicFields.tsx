import React from 'react';

type CustomField = {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'textarea';
  required: boolean;
};

export function DynamicFields({ fields }: { fields: CustomField[] }) {
  if (!fields || fields.length === 0) return null;

  return (
    <>
      {fields.map((field) => (
        <div key={field.id} className="w-full">
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
            {field.label} {field.required && '*'}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              required={field.required}
              name={field.id}
              rows={3}
              placeholder={`Enter ${field.label.toLowerCase()}...`}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium resize-none"
            />
          ) : (
            <input
              required={field.required}
              name={field.id}
              type={field.type}
              placeholder={`Enter ${field.label.toLowerCase()}...`}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
            />
          )}
        </div>
      ))}
    </>
  );
}
