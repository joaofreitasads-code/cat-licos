import React, { useState } from 'react';
import { VslPlayer } from './components/VslPlayer';
import { MarqueeRow } from './components/MarqueeRow';
import { MemberAreaShowcase } from './components/MemberAreaShowcase';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { UpsellModal } from './components/UpsellModal';
import { BuyToast } from './components/BuyToast';

const gallery1 = [
  { src: '/thumbnails/anjo-da-guarda.jpg', alt: 'Anjo da Guarda 3D' },
  { src: '/thumbnails/imagens-de-santos.jpg', alt: 'Imagens de Santos' },
  { src: '/thumbnails/divino-esp-rito-santo.jpg', alt: 'Divino Espírito Santo' },
  { src: '/thumbnails/nossa-senhora-de-f-tima.jpg', alt: 'Nossa Senhora de Fátima' },
  { src: '/images/cat2_01.webp', alt: 'Anjo da Guarda' },
  { src: '/images/cat2_05.webp', alt: 'Imagens de Santos' },
  { src: '/images/cat2_08.webp', alt: 'São Miguel com Espada' },
  { src: '/images/cat04.webp', alt: 'Nossa Senhora' },
];

const gallery2 = [
  { src: '/thumbnails/crucifixos-decorativos-e-medalh-es.jpg', alt: 'Crucifixos Decorativos' },
  { src: '/thumbnails/jesus-com-a-cruz.jpg', alt: 'Jesus com a Cruz' },
  { src: '/thumbnails/jesus-cross.jpg', alt: 'Jesus Cross' },
  { src: '/thumbnails/jesus-crucifixion.jpg', alt: 'Jesus Crucifixion' },
  { src: '/thumbnails/crucifixo-modelo-1.png', alt: 'Crucifixo Clássico' },
  { src: '/thumbnails/crucifixo-modelo-2.png', alt: 'Crucifixo Altar' },
  { src: '/thumbnails/crucifixo-modelo-5.png', alt: 'Crucifixo Sagrada Cruz' },
  { src: '/thumbnails/crucifixo-modelo-7.png', alt: 'Medalhão Dourado' },
];

const gallery3 = [
  { src: '/thumbnails/presepio-decorativo-1.jpg', alt: 'Presépio Sagrada Família' },
  { src: '/thumbnails/presepio-decorativo-2.jpg', alt: 'Presépio Gruta de Belém' },
  { src: '/thumbnails/presepio-decorativo-3.jpg', alt: 'Presépio Estrela Guia' },
  { src: '/thumbnails/quadro-relevo-1.jpg', alt: 'Quadro em Relevo Crucifixo' },
  { src: '/thumbnails/quadro-relevo-2.jpg', alt: 'Quadro em Relevo Sagrado Coração' },
  { src: '/thumbnails/quadro-relevo-3.jpg', alt: 'Quadro em Relevo Santa Maria' },
  { src: '/thumbnails/quadro-relevo-5.jpg', alt: 'Arte Sacra em Relevo' },
  { src: '/thumbnails/quadro-relevo-6.jpg', alt: 'Quadro em Relevo Presença de Cristo' },
];

const luminarias = [
  { src: '/images/img18.webp', alt: 'Luminária 3D Sagrada 1' },
  { src: '/images/img19.webp', alt: 'Luminária 3D Sagrada 2' },
  { src: '/images/img20.webp', alt: 'Luminária 3D Sagrada 3' },
  { src: '/images/img21.webp', alt: 'Luminária 3D Sagrada 4' },
  { src: '/images/img22.webp', alt: 'Luminária 3D Sagrada 5' },
  { src: '/images/img23.webp', alt: 'Luminária 3D Sagrada 6' },
  { src: '/images/img24.webp', alt: 'Luminária 3D Sagrada 7' },
  { src: '/images/img25.webp', alt: 'Luminária 3D Sagrada 8' },
];

const premium1 = [
  { src: '/images/premium_01.webp', alt: 'Arte Sacra Premium 01' },
  { src: '/images/premium_02.webp', alt: 'Arte Sacra Premium 02' },
  { src: '/images/premium_03.webp', alt: 'Arte Sacra Premium 03' },
  { src: '/images/premium_04.webp', alt: 'Arte Sacra Premium 04' },
  { src: '/images/premium_05.webp', alt: 'Arte Sacra Premium 05' },
  { src: '/images/premium_06.webp', alt: 'Arte Sacra Premium 06' },
];

const premium2 = [
  { src: '/images/cat3_01.webp', alt: 'Arte Sacra Premium Cat 01' },
  { src: '/images/cat3_02.webp', alt: 'Arte Sacra Premium Cat 02' },
  { src: '/images/cat3_03.webp', alt: 'Arte Sacra Premium Cat 03' },
  { src: '/images/cat3_04.webp', alt: 'Arte Sacra Premium Cat 04' },
  { src: '/images/cat3_05.webp', alt: 'Arte Sacra Premium Cat 05' },
  { src: '/images/cat3_06.webp', alt: 'Arte Sacra Premium Cat 06' },
  { src: '/images/cat3_07.webp', alt: 'Arte Sacra Premium Cat 07' },
];

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">
            Biblioteca da Fé 3D · Arte Que Aproxima do Divino
          </span>
          <h1>
            +500 Arquivos STL de Arte Sacra Prontos Para Você{' '}
            <span className="hl">Imprimir Hoje, Vender Amanhã</span> e Fazer Parte
            da Comunidade Católica Que Vive da Fé
          </h1>

          <VslPlayer />

          <p className="lead">
            Enquanto você pensa, outros membros da comunidade católica já estão
            imprimindo e vendendo com os mesmos arquivos. Coloque sua impressora 3D
            para criar arte sacra e transforme fé em resultado, todos os dias.
          </p>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_crnvdc16r"
            >
              Quero Garantir Meu Acesso
            </a>
            <p className="cta-note">
              Acesso digital &nbsp;•&nbsp; Liberação imediata &nbsp;•&nbsp; Pagamento seguro
            </p>
          </div>
        </div>
      </header>

      {/* Categorias da Biblioteca */}
      <section id="biblioteca">
        <div className="wrap">
          <h2 className="title">
            Veja tudo o que você vai receber nessa coleção exclusiva
          </h2>
          <p className="sub">
            São +500 arquivos de arte sacra testados, otimizados e prontos para
            imprimir hoje mesmo — divididos entre diferentes temas para você nunca
            ficar sem opção.
          </p>

          <div className="grid g4">
            <div className="cat-card">
              <span className="dot" />Jesus Cristo
            </div>
            <div className="cat-card">
              <span className="dot" />Nossa Senhora
            </div>
            <div className="cat-card">
              <span className="dot" />Santos
            </div>
            <div className="cat-card">
              <span className="dot" />Crucifixos
            </div>
            <div className="cat-card">
              <span className="dot" />Presépios
            </div>
            <div className="cat-card">
              <span className="dot" />Sagrada Família
            </div>
            <div className="cat-card">
              <span className="dot" />Anjos
            </div>
            <div className="cat-card">
              <span className="dot" />Terços e devocionais
            </div>
            <div className="cat-card">
              <span className="dot" />Decoração católica
            </div>
            <div className="cat-card">
              <span className="dot" />Peças para presente
            </div>
            <div className="cat-card">
              <span className="dot" />Modelos para produção
            </div>
            <div className="cat-card">
              <span className="dot" />Peças de parede
            </div>
          </div>
        </div>
      </section>

      {/* Área de Membros Showcase */}
      <MemberAreaShowcase />

      {/* Galeria Carousels */}
      <section id="galeria" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">
            São +500 arquivos de arte sacra testados, otimizados e prontos para
            imprimir hoje mesmo
          </h2>
          <p className="sub">
            E dezenas de outros modelos exclusivos que só quem tem esse pack pode
            oferecer. Veja a variedade de peças que você pode transformar em
            impressões reais.
          </p>

          <MarqueeRow images={gallery1} direction="left" />
          <MarqueeRow images={gallery2} direction="right" />
          <MarqueeRow images={gallery3} direction="left" />

          <p className="gallery-note">
            São centenas de possibilidades reunidas em um único acervo para você
            não depender de pesquisas intermináveis por arquivos espalhados na
            internet.
          </p>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_r5d27jwhc"
            >
              Quero Meus Modelos
            </a>
          </div>
        </div>
      </section>

      {/* Para quem é / Não é */}
      <section id="para-quem">
        <div className="wrap">
          <h2 className="title">
            Veja como esse material pode transformar o seu negócio de arte sacra
          </h2>
          <p className="sub">
            Seja por fé, paixão pela impressão 3D ou desejo de construir uma nova
            fonte de renda, esse Mega Pack foi feito para quem quer vender arte sacra
            sem depender de arquivo em arquivo.
          </p>

          <div className="fit-grid">
            <div className="fit-card yes">
              <h3>É para você</h3>
              <ul>
                <li>Quer imprimir peças que representem sua fé.</li>
                <li>Deseja criar presentes católicos personalizados.</li>
                <li>Gosta de produzir peças religiosas em impressão 3D.</li>
                <li>Quer ampliar seu catálogo de produtos.</li>
                <li>Busca modelos selecionados em um único lugar.</li>
                <li>Quer economizar tempo procurando arquivos.</li>
                <li>Deseja explorar encomendas e vendas no segmento religioso.</li>
              </ul>
            </div>

            <div className="fit-card no">
              <h3>Não é para você</h3>
              <ul>
                <li>Não possui interesse em impressão 3D.</li>
                <li>Procura apenas arquivos gratuitos aleatórios.</li>
                <li>Não pretende utilizar os modelos.</li>
                <li>Não deseja produzir peças religiosas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso & Bônus */}
      <section id="incluso" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">Tudo o que você vai receber</h2>
          <p className="sub">
            Acesso imediato, sem enrolação. Além da coleção principal, o Plano
            Completo reúne materiais para você produzir, apresentar e vender suas
            peças.
          </p>

          <div className="main-item">
            <h3>+500 Arquivos STL de Arte Sacra</h3>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              Uma biblioteca com centenas de modelos religiosos testados e prontos
              para você imprimir e transformar em peças físicas.
            </p>
          </div>

          <div className="bonus-list">
            <div className="bonus-item">
              <img
                src="/images/bonus1.webp"
                alt="Bônus 01 — Guia de Produtos Católicos que Mais Vendem"
                loading="lazy" decoding="async"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 01</b>
                  Guia de Produtos Católicos que Mais Vendem
                  <span className="bi-desc">
                    Descubra quais peças costumam vender mais rápido para focar sua
                    produção nelas.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                src="/images/bonus2.webp"
                alt="Bônus 02 — Tabela de Preços para Produtos 3D Católicos"
                loading="lazy" decoding="async"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 02</b>
                  Tabela de Preços para Produtos 3D Católicos
                  <span className="bi-desc">
                    Uma referência para ajudar você a não ficar perdido na hora de
                    precificar seus produtos.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                src="/images/bonus3.webp"
                alt="Bônus 03 — Guia Rápido de Configuração para Impressão Perfeita"
                loading="lazy" decoding="async"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 03</b>
                  Guia Rápido de Configuração para Impressão Perfeita
                  <span className="bi-desc">
                    Orientações práticas para facilitar seus primeiros testes e
                    ajustes.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                src="/images/bonus4.webp"
                alt="Bônus 04 — Mockups Prontos para Divulgação"
                loading="lazy" decoding="async"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 04</b>
                  Mockups Prontos para Divulgação
                  <span className="bi-desc">
                    Materiais visuais prontos para você divulgar e vender suas peças.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                src="/images/bonus5.webp"
                alt="Bônus 05 — Guia de Acabamento e Pintura para Peças Católicas"
                loading="lazy" decoding="async"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 05</b>
                  Guia de Acabamento e Pintura para Peças Católicas
                  <span className="bi-desc">
                    Dicas para melhorar o acabamento e valorizar suas peças na hora da
                    venda.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_1vmak73fp"
            >
              Quero Tudo Isso
            </a>
          </div>
        </div>
      </section>

      {/* Bônus Especial Luminárias */}
      <section className="bonus-sec" id="bonus-luminarias">
        <div className="wrap center">
          <span className="seal">Bônus incluso</span>
          <h2 className="title">E ainda tem um bônus especial…</h2>
          <p className="sub" style={{ marginBottom: '14px' }}>
            <b className="gold" style={{ fontSize: '1.15rem' }}>
              Leve também o Pack de Luminárias 3D
            </b>
          </p>
          <p className="sub">
            Além da coleção de arte sacra, você recebe modelos de luminárias para
            ampliar ainda mais seu catálogo.
          </p>

          <MarqueeRow images={luminarias} direction="left" maxWidth="1000px" />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_7r58aisx3"
            >
              Quero Meus Bônus
            </a>
          </div>
        </div>
      </section>

      {/* Artes Sacras Premium */}
      <section className="bonus-sec" id="premium">
        <div className="wrap center">
          <span className="seal">Exclusivo do Plano Completo</span>
          <h2 className="title">
            Artes Sacras Premium: as peças mais buscadas e que mais vendem
          </h2>
          <p className="sub" style={{ marginBottom: '14px' }}>
            <b className="gold" style={{ fontSize: '1.15rem' }}>
              A seleção com a maior qualidade do acervo
            </b>
          </p>
          <p className="sub">
            São as peças de acabamento mais refinado, mais procuradas por quem
            imprime e as que mais convertem em venda. Esse bônus vem apenas no Plano
            Completo — não está incluso no Plano Básico.
          </p>

          <MarqueeRow images={premium1} direction="left" maxWidth="1000px" />
          <MarqueeRow images={premium2} direction="right" maxWidth="1000px" />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn pulse"
              id="_lt_0aetdzmsg"
            >
              Quero as Artes Sacras Premium
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona">
        <div className="wrap">
          <h2 className="title">Acesso imediato, sem enrolação</h2>
          <p className="sub">
            Tudo 100% digital. Sem esperar entrega física: você recebe e já pode
            começar a imprimir e vender.
          </p>

          <div className="grid g3">
            <div className="step">
              <div className="num">01</div>
              <h3>Faça sua compra</h3>
              <p>Escolha a forma de pagamento e conclua o pedido com segurança.</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <h3>Receba as instruções</h3>
              <p>As informações de acesso chegam logo após a confirmação.</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <h3>Entre na coleção</h3>
              <p>Acesse a área com todos os modelos organizados por tema.</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <h3>Escolha seus modelos</h3>
              <p>Navegue pelas categorias e selecione o que quer imprimir.</p>
            </div>
            <div className="step">
              <div className="num">05</div>
              <h3>Comece a imprimir e vender</h3>
              <p>Baixe os arquivos e coloque sua impressora para trabalhar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos">
        <div className="wrap">
          <h2 className="title">
            Quem já está imprimindo e vendendo arte sacra
          </h2>
          <p className="sub">
            Algumas mensagens de clientes que receberam a coleção e começaram a
            explorar os modelos.
          </p>

          <TestimonialsCarousel />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_hl38toydx"
            >
              Quero Fazer Parte
            </a>
          </div>
        </div>
      </section>

      {/* Transição */}
      <section id="transicao">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <h2 className="title">
            Sua impressora já está pronta. Agora falta escolher o que ela vai criar.
          </h2>
          <div className="sub" style={{ textAlign: 'center', maxWidth: '660px' }}>
            <p style={{ margin: '0 0 12px' }}>
              Você já tem a tecnologia nas mãos. Agora pode ter também um acervo
              testado, com centenas de possibilidades.
            </p>
            <p style={{ margin: '0 0 12px' }}>
              Imprima para você. Crie presentes. Produza peças de devoção. Faça
              encomendas. Ou construa uma nova fonte de renda com produtos que
              carregam fé.
            </p>
            <p style={{ margin: '0 0 12px' }}>
              Tudo começa escolhendo o primeiro modelo.
            </p>
          </div>
          <p
            style={{
              textAlign: 'center',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              color: 'var(--gold-lt)',
              margin: '26px auto 22px',
              maxWidth: '700px',
              lineHeight: 1.35,
            }}
          >
            +500 Arquivos STL de Arte Sacra.
            <br />
            Imprima hoje, venda amanhã.
          </p>
          <div className="cta-block" style={{ marginTop: 0 }}>
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn pulse"
              id="_lt_nvd2goc3u"
            >
              Quero Meu Acesso
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Oferta */}
      <section className="offer-wrap" id="oferta">
        <div className="wrap">
          <h2 className="title">
            Aproveite enquanto o Plano Completo está em promoção
          </h2>
          <p className="sub">
            Comece pela essencial ou leve a completa com todos os bônus — 97%
            escolhem a completa, e não é à toa.
          </p>

          <div className="plans">
            {/* Plano Básico */}
            <div className="plan">
              <span className="tag">Essencial</span>
              <h3 className="pname">Plano Básico</h3>
              <ul>
                <li>+500 Arquivos STL Católicos</li>
                <li>Acesso Vitalício</li>
                <li>Envio Imediato</li>
                <li className="no">Não inclui bônus</li>
              </ul>
              <div className="price">
                <span className="val">
                  <span className="cur">R$</span>10,90
                </span>
                <p className="cond">Pagamento único</p>
              </div>
              <button
                type="button"
                className="btn-basic-plan"
                onClick={() => setIsUpsellOpen(true)}
                id="_lt_9ouwi7xt2"
              >
                Quero o plano básico
              </button>
            </div>

            {/* Plano Completo */}
            <div className="plan featured">
              <span className="best">Mais completo</span>
              <span className="tag">Recomendado</span>
              <h3 className="pname">Plano Completo</h3>

              <div
                style={{
                  width: 'calc(100% + 52px)',
                  margin: '0 -26px 18px',
                  background: '#0d0b09',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  borderTop: '1px solid rgba(230, 178, 60, 0.4)',
                  borderBottom: '1px solid rgba(230, 178, 60, 0.4)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                }}
              >
                <img
                  src="/images/pack-capa-completo.jpg"
                  alt="Pack +500 Acervos Católicos STL Completo"
                  loading="lazy" decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>

              <ul>
                <li>+500 Arquivos STL Católicos</li>
                <li>Uso comercial liberado e sem limite</li>
                <li className="bonus">Bônus 1: Guia de Produtos Católicos que Mais Vendem</li>
                <li className="bonus">Bônus 2: Tabela de Preços para Produtos 3D Católicos</li>
                <li className="bonus">Bônus 3: Guia de Configuração para Impressão</li>
                <li className="bonus">Bônus 4: Mockups para Divulgação</li>
                <li className="bonus">Bônus 5: Guia de Acabamento e Pintura</li>
                <li className="bonus">Bônus 6: Pack de Luminárias 3D</li>
                <li className="bonus">
                  Bônus 7: Artes Sacras Premium{' '}
                  <span
                    style={{
                      background: 'var(--green)',
                      color: '#fff',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '999px',
                      marginLeft: '6px',
                      verticalAlign: 'middle',
                      letterSpacing: '0.04em',
                    }}
                  >
                    NOVO
                  </span>
                </li>
                <li>Acesso Vitalício</li>
                <li>Envio Imediato</li>
              </ul>

              <div className="price">
                <p style={{ color: '#7a6a57', fontSize: '0.86rem', margin: '0 0 2px' }}>
                  Valor total: <span style={{ textDecoration: 'line-through' }}>R$ 97,00</span>
                </p>
                <p style={{ color: '#574838', fontSize: '0.82rem', margin: '0 0 4px', fontWeight: 600 }}>
                  Hoje, pagamento único
                </p>
                <span className="val">
                  <span className="cur">R$</span>37,90
                </span>
                <p className="cond">Acesso vitalício</p>
              </div>

              <a
                href="https://checkout.wiven.com.br/checkout/cmssaso1r0bw001odhutl03ut?offer=G4ZPAP2"
                className="btn-complete-plan"
                id="_lt_2ocbbuja5"
              >
                Quero o plano completo
              </a>
            </div>
          </div>

          <p className="cta-note center" style={{ marginTop: '20px' }}>
            ACESSO IMEDIATO &nbsp;•&nbsp; 7 dias de garantia
          </p>
        </div>
      </section>

      {/* Garantia */}
      <section id="garantia">
        <div className="wrap">
          <div className="guarantee">
            <img
              className="g-seal-img"
              src="/images/garantia.webp"
              alt="Selo de 7 dias de garantia"
              loading="lazy" decoding="async"
            />
            <div>
              <h2 style={{ fontSize: '1.6rem', textAlign: 'left', marginBottom: '8px' }}>
                Sua compra 100% segura e sem risco nenhum
              </h2>
              <p>
                Você recebe acesso imediato a mais de 500 arquivos de arte sacra, prontos
                para imprimir em 3D. Se dentro de <b style={{ color: 'var(--text)' }}>7 dias</b>{' '}
                sentir que o material não faz sentido pra você, é só pedir o reembolso que
                devolvemos 100% do valor. Sem perguntas, sem burocracia — o risco é nosso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">Dúvidas frequentes</h2>
          <div className="faq">
            <details open>
              <summary>O que eu recebo após a compra?</summary>
              <p>
                Você recebe o acesso ao pack com mais de 500 arquivos STL católicos, além dos
                bônus e do pack de luminárias 3D incluídos na oferta.
              </p>
            </details>
            <details>
              <summary>São arquivos físicos ou digitais?</summary>
              <p>
                São arquivos digitais. Nada é enviado pelos Correios: você recebe o acesso para
                baixar os modelos.
              </p>
            </details>
            <details>
              <summary>Quantos arquivos STL estão inclusos?</summary>
              <p>
                Mais de 500 arquivos STL católicos, além dos modelos do pack de luminárias que
                entra como bônus.
              </p>
            </details>
            <details>
              <summary>Preciso ter uma impressora 3D?</summary>
              <p>
                Sim. Os arquivos STL são feitos para serem impressos em uma impressora 3D —
                sua ou de um serviço de impressão.
              </p>
            </details>
            <details>
              <summary>Posso acessar os arquivos depois?</summary>
              <p>
                Sim. O acesso é vitalício, então você pode voltar e baixar os modelos quando
                quiser.
              </p>
            </details>
            <details>
              <summary>Como recebo meu acesso?</summary>
              <p>
                Após a confirmação do pagamento, você recebe as informações de acesso por e-mail
                e WhatsApp.
              </p>
            </details>
            <details>
              <summary>O pack de luminárias está incluso?</summary>
              <p>
                Sim. O pack de luminárias 3D entra como bônus, junto com a coleção de arquivos
                católicos.
              </p>
            </details>
            <details>
              <summary>Existe garantia?</summary>
              <p>
                Sim. Você tem 7 dias para conhecer o material, conforme as condições de
                garantia apresentadas na compra.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="final">
        <div className="wrap">
          <h2 className="title">
            Comece hoje a fazer parte da comunidade que imprime e vende arte sacra
          </h2>
          <p className="sub">
            Tenha +500 arquivos STL de arte sacra e todos os bônus reunidos em uma única oferta.
          </p>
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="btn pulse"
            id="_lt_pybe2kf4w"
          >
            Quero Meu Acesso
          </a>
          <p className="cta-note">
            Acesso imediato &nbsp;•&nbsp; Acesso vitalício &nbsp;•&nbsp; 7 dias de garantia
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <p title="Central 3D Lucrativa" style={{ cursor: 'default' }}>
            © {currentYear} — Todos os direitos reservados.
          </p>
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
        </div>
      </footer>

      {/* Modais & Notificações */}
      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
      <BuyToast />
    </>
  );
}
