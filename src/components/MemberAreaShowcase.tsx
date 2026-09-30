import React from 'react';

export function MemberAreaShowcase() {
  return (
    <section
      id="area-de-membros"
      className="relative py-16 bg-[#080707] border-y border-[rgba(230,181,90,0.22)] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(229,188,114,0.12),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#faf1e2] tracking-tight font-serif-sacra">
            Conheça a <span className="text-[#f5cb88]">Biblioteca da Fé 3D</span> por dentro
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#cdb896] leading-relaxed">
            Veja exatamente como está estruturada a sua futura área de membros. Acesse pelo computador, notebook, tablet ou direto pelo celular com facilidade total.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1100px] rounded-2xl sm:rounded-3xl border border-[rgba(230,181,90,0.35)] bg-[#0d0c10] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(229,188,114,0.16)] overflow-hidden group">
          <img
            src="/images/area-membros-mockup.jpg"
            alt="Área de Membros Biblioteca da Fé 3D no Computador, Tablet e Celular"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover block select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0 text-xl">
              💻
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#faf1e2] m-0">Desktop &amp; Notebook</h4>
              <p className="text-xs text-[#b8a68c] m-0">
                Navegue pelas pastas e faça download rápido dos arquivos STL.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0 text-xl">
              📱
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#faf1e2] m-0">100% Mobile</h4>
              <p className="text-xs text-[#b8a68c] m-0">
                Consulte o acervo de qualquer lugar direto pelo seu smartphone.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0 text-xl">
              ⚡
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#faf1e2] m-0">Acesso Imediato</h4>
              <p className="text-xs text-[#b8a68c] m-0">
                Login liberado no seu e-mail e WhatsApp logo após a compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
