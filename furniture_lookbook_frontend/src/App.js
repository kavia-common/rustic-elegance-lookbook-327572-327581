import React, { useMemo } from "react";
import "./App.css";

const signaturePieces = [
  {
    name: "Tidewood Dining Table",
    category: "Dining",
    description:
      "Hand-joined walnut with a matte ocean finish; designed for luminous gatherings.",
    details: ["Solid walnut", "Natural oil", "Seats 6–8"],
    price: "From $4,800",
  },
  {
    name: "Harbor Lounge Chair",
    category: "Seating",
    description:
      "Sculpted ash curves with saddle-leather comfort — calm lines, lasting support.",
    details: ["Bent ash frame", "Leather sling", "Brass fasteners"],
    price: "From $2,150",
  },
  {
    name: "Drift Credenza",
    category: "Storage",
    description:
      "Quiet grain, hidden joinery, and soft-close doors for gallery-level presence.",
    details: ["Soft-close", "Adjustable shelves", "Cable management"],
    price: "From $3,950",
  },
  {
    name: "Bluehour Nightstand",
    category: "Bedroom",
    description:
      "Compact, tactile, and precise — a bedside piece that elevates the ritual of rest.",
    details: ["Hand-cut dovetails", "Felt-lined drawer", "Inset pull"],
    price: "From $1,250",
  },
  {
    name: "Coastal Work Desk",
    category: "Office",
    description:
      "A modern writing surface with discreet storage and a floating silhouette.",
    details: ["Hidden tray", "Cable port", "Slim profile"],
    price: "From $2,900",
  },
  {
    name: "Swell Coffee Table",
    category: "Living",
    description:
      "An understated centerpiece with softened edges and a warm, low sheen.",
    details: ["Rounded corners", "Plinth base", "Finish options"],
    price: "From $1,980",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// PUBLIC_INTERFACE
function App() {
  /** Single-page lookbook with stacked sections and responsive grid. */
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="App">
      <a className="SkipLink" href="#main">
        Skip to content
      </a>

      <header className="NavShell" role="banner">
        <div className="Container Nav">
          <div className="Brand" aria-label="Brand">
            <div className="BrandMark" aria-hidden="true">
              RE
            </div>
            <div className="BrandText">
              <div className="BrandName">Rustic Elegance</div>
              <div className="BrandTagline">Handcrafted Wood Furniture</div>
            </div>
          </div>

          <nav className="NavLinks" aria-label="Primary">
            <button
              className="NavLink"
              type="button"
              onClick={() => scrollToId("philosophy")}
            >
              Philosophy
            </button>
            <button
              className="NavLink"
              type="button"
              onClick={() => scrollToId("signature")}
            >
              Signature Pieces
            </button>
            <button
              className="NavLink"
              type="button"
              onClick={() => scrollToId("craft")}
            >
              Craft Highlight
            </button>
            <button
              className="NavCta"
              type="button"
              onClick={() => scrollToId("footer")}
            >
              Request a Private Viewing
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="Hero" aria-labelledby="hero-title">
          <div className="HeroBg" aria-hidden="true" />
          <div className="Container HeroInner">
            <div className="HeroCopy">
              <p className="Eyebrow">A gallery of functional art</p>
              <h1 className="HeroTitle" id="hero-title">
                Modern rustic pieces, carved with patience and finished like
                sculpture.
              </h1>
              <p className="HeroLead">
                Discover signature furniture crafted from responsibly sourced
                hardwoods — designed to live beautifully, endure daily use, and
                age with grace.
              </p>

              <div className="HeroActions">
                <button
                  className="Button ButtonPrimary"
                  type="button"
                  onClick={() => scrollToId("signature")}
                >
                  Explore Signature Pieces
                </button>
                <button
                  className="Button ButtonGhost"
                  type="button"
                  onClick={() => scrollToId("craft")}
                >
                  See the Craft
                </button>
              </div>

              <dl className="HeroStats" aria-label="At a glance">
                <div className="Stat">
                  <dt className="StatLabel">Made-to-order</dt>
                  <dd className="StatValue">6–10 weeks</dd>
                </div>
                <div className="Stat">
                  <dt className="StatLabel">Materials</dt>
                  <dd className="StatValue">Walnut • Ash • Oak</dd>
                </div>
                <div className="Stat">
                  <dt className="StatLabel">Finish</dt>
                  <dd className="StatValue">Low-VOC oils</dd>
                </div>
              </dl>
            </div>

            <div className="HeroCard" aria-label="Featured piece">
              <div className="HeroCardTop">
                <div className="Pill">Featured</div>
                <div className="HeroCardTitle">Tidewood Dining Table</div>
                <div className="HeroCardSub">
                  Walnut slab • Hand-joined • Ocean matte
                </div>
              </div>

              <div className="HeroCardBody">
                <div className="MiniGrid" aria-label="Highlights">
                  <div className="MiniItem">
                    <div className="MiniLabel">Edge detail</div>
                    <div className="MiniValue">Softened chamfer</div>
                  </div>
                  <div className="MiniItem">
                    <div className="MiniLabel">Joinery</div>
                    <div className="MiniValue">Pinned mortise</div>
                  </div>
                  <div className="MiniItem">
                    <div className="MiniLabel">Finish</div>
                    <div className="MiniValue">Hand-rubbed oil</div>
                  </div>
                  <div className="MiniItem">
                    <div className="MiniLabel">Availability</div>
                    <div className="MiniValue">Limited each season</div>
                  </div>
                </div>

                <div className="HeroCardFooter">
                  <button
                    className="Button ButtonSecondary"
                    type="button"
                    onClick={() => scrollToId("footer")}
                  >
                    Inquire for pricing
                  </button>
                  <span className="Muted">Private consultations available.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="philosophy"
          className="Section"
          aria-labelledby="philosophy-title"
        >
          <div className="Container">
            <div className="SectionHeader">
              <h2 className="SectionTitle" id="philosophy-title">
                Brand Philosophy
              </h2>
              <p className="SectionLead">
                We craft heirloom furniture with a modern eye — honoring the
                wood’s story, celebrating negative space, and building with
                quiet confidence.
              </p>
            </div>

            <div className="PhilosophyGrid">
              <article className="InfoCard">
                <h3 className="InfoTitle">Material Reverence</h3>
                <p className="InfoText">
                  Every board is selected for grain, stability, and character.
                  Knots and mineral streaks are welcomed as signature marks of
                  authenticity.
                </p>
              </article>

              <article className="InfoCard">
                <h3 className="InfoTitle">Precision Craft</h3>
                <p className="InfoText">
                  Traditional joinery and contemporary tolerances: crisp lines,
                  durable construction, and surfaces finished to feel like
                  polished stone.
                </p>
              </article>

              <article className="InfoCard">
                <h3 className="InfoTitle">Designed to Live</h3>
                <p className="InfoText">
                  These are not precious objects — they’re companions. Built for
                  daily rituals, light movement, and a lifetime of gatherings.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="signature"
          className="Section SectionAlt"
          aria-labelledby="signature-title"
        >
          <div className="Container">
            <div className="SectionHeader RowBetween">
              <div>
                <h2 className="SectionTitle" id="signature-title">
                  Signature Pieces
                </h2>
                <p className="SectionLead">
                  A curated selection of our most-requested designs — each
                  customizable in dimension, species, and finish.
                </p>
              </div>
              <div className="Legend" aria-label="Grid note">
                Responsive gallery: 1 / 2 / 3 columns by breakpoint.
              </div>
            </div>

            <div className="PiecesGrid" role="list">
              {signaturePieces.map((piece) => (
                <article key={piece.name} className="PieceCard" role="listitem">
                  <div className="PieceTop">
                    <div className="PieceMeta">
                      <span className="Badge">{piece.category}</span>
                      <span className="Price">{piece.price}</span>
                    </div>
                    <h3 className="PieceTitle">{piece.name}</h3>
                    <p className="PieceDesc">{piece.description}</p>
                  </div>

                  <ul className="PieceDetails" aria-label="Details">
                    {piece.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div className="PieceActions">
                    <button
                      className="Button ButtonPrimarySmall"
                      type="button"
                      onClick={() => scrollToId("footer")}
                    >
                      Request details
                    </button>
                    <button
                      className="Button ButtonLink"
                      type="button"
                      onClick={() => scrollToId("craft")}
                    >
                      About our finish
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="craft" className="Section" aria-labelledby="craft-title">
          <div className="Container">
            <div className="Craft">
              <div className="CraftCopy">
                <h2 className="SectionTitle" id="craft-title">
                  Featured Craft Highlight
                </h2>
                <p className="SectionLead">
                  Our signature “Ocean Matte” finish is built in layers —
                  emphasizing grain depth while resisting daily wear.
                </p>

                <ol className="Steps" aria-label="Process steps">
                  <li className="Step">
                    <div className="StepNum">01</div>
                    <div>
                      <div className="StepTitle">Surface preparation</div>
                      <div className="StepText">
                        Hand-planed and sanded in progressive grits for a
                        low-sheen, tactile surface.
                      </div>
                    </div>
                  </li>
                  <li className="Step">
                    <div className="StepNum">02</div>
                    <div>
                      <div className="StepTitle">Oil infusion</div>
                      <div className="StepText">
                        Low-VOC oils deepen contrast while maintaining a natural
                        feel — never plasticky.
                      </div>
                    </div>
                  </li>
                  <li className="Step">
                    <div className="StepNum">03</div>
                    <div>
                      <div className="StepTitle">Burnished protection</div>
                      <div className="StepText">
                        A final burnish creates a quiet glow and makes cleanup
                        effortless.
                      </div>
                    </div>
                  </li>
                </ol>

                <div className="CraftActions">
                  <button
                    className="Button ButtonSecondary"
                    type="button"
                    onClick={() => scrollToId("footer")}
                  >
                    Book a finish sample
                  </button>
                  <p className="Muted Small">
                    Samples ship within 2–3 business days.
                  </p>
                </div>
              </div>

              <aside className="CraftPanel" aria-label="Studio note">
                <div className="PanelHeader">
                  <div className="Pill PillAmber">Studio Notes</div>
                  <div className="PanelTitle">Why we avoid high gloss</div>
                  <p className="PanelText">
                    High gloss hides the soul of wood. Our matte finish keeps the
                    grain legible, the light soft, and the piece timeless across
                    changing interiors.
                  </p>
                </div>

                <div className="PanelGrid" aria-label="Material cues">
                  <div className="PanelItem">
                    <div className="PanelK">Tone</div>
                    <div className="PanelV">Warm-neutral</div>
                  </div>
                  <div className="PanelItem">
                    <div className="PanelK">Touch</div>
                    <div className="PanelV">Velvety</div>
                  </div>
                  <div className="PanelItem">
                    <div className="PanelK">Care</div>
                    <div className="PanelV">Damp cloth</div>
                  </div>
                  <div className="PanelItem">
                    <div className="PanelK">Refinish</div>
                    <div className="PanelV">Simple oil coat</div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="Footer" aria-label="Footer">
        <div className="Container FooterInner">
          <div className="FooterTop">
            <div>
              <div className="FooterTitle">Rustic Elegance Lookbook</div>
              <p className="FooterLead">
                Ready to commission a piece? Share your space, timeline, and
                inspiration — we’ll respond with a tailored recommendation.
              </p>
            </div>

            <div className="FooterCard" aria-label="Inquiry">
              <div className="FooterCardTitle">Private Viewing Request</div>
              <p className="Muted Small">
                Email us with your preferred pieces and dimensions.
              </p>
              <div className="FooterActions">
                <a className="Button ButtonPrimary" href="mailto:studio@example.com">
                  Email the studio
                </a>
                <a className="Button ButtonGhost" href="#signature">
                  Browse again
                </a>
              </div>
            </div>
          </div>

          <div className="FooterBottom">
            <div className="Muted Small">
              © {year} Rustic Elegance. Handcrafted in small batches.
            </div>
            <div className="FooterLinks" aria-label="Secondary">
              <a className="FooterLink" href="#philosophy">
                Philosophy
              </a>
              <a className="FooterLink" href="#signature">
                Signature Pieces
              </a>
              <a className="FooterLink" href="#craft">
                Craft
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
