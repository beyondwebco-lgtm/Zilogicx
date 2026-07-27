const fs = require('fs');

const files = [
  'src/app/services/page.tsx',
  'src/app/page.tsx',
  'src/app/partners/page.tsx',
  'src/app/technology/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/industries/page.tsx',
  'src/app/about/page.tsx'
];

const targetContent = `                {[
                  { icon: <LinkedinIcon />, label: 'LinkedIn' },
                  { icon: <TwitterXIcon />, label: 'X' },
                  { icon: <InstagramIcon />, label: 'Instagram' },
                  { icon: <FacebookIcon />, label: 'Facebook' },
                  { icon: <YoutubeIcon />, label: 'YouTube' },
                ].map((s, idx) => (
                  <a key={idx} href="/" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FFC700] hover:border-yellow-500/30 transition-colors">
                    {s.icon}
                  </a>
                ))}`;

const replacementContent = `                {[
                  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/135278550/admin/dashboard/' },
                  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/zilogicx_official?igsh=MTFiY2VheTJrZGRnMA==' },
                  { icon: <YoutubeIcon />, label: 'YouTube', href: 'https://youtube.com/@zilogicx?si=KLGr5ywbtZfcpmT6' },
                ].map((s, idx) => (
                  <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FFC700] hover:border-yellow-500/30 transition-colors">
                    {s.icon}
                  </a>
                ))}`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(targetContent)) {
    content = content.replace(targetContent, replacementContent);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Target not found in ${file}`);
  }
}
