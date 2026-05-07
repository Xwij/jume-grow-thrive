import { useState } from "react";
import { Download, FileText, Eye, X, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Item = {
  title: string;
  file: string;
  size: string;
  date: string;
};

const trainingMaterials: Item[] = [
  { title: "Carbon Farming", file: "Carbon_Farming.pdf", size: "953 KB", date: "Apr 14, 2026" },
  { title: "Companion Planting", file: "Companion_Planting.pdf", size: "1.9 MB", date: "Apr 14, 2026" },
  { title: "Compost Making", file: "Compost_Making.pdf", size: "2.7 MB", date: "Apr 14, 2026" },
  { title: "Crop Rotation", file: "Crop_Rotation.pdf", size: "618 KB", date: "Apr 14, 2026" },
  { title: "Land & Bed Preparation", file: "LandBed_Preparation.pdf", size: "2.2 MB", date: "Apr 14, 2026" },
  { title: "Mulching", file: "Mulching.pdf", size: "2.1 MB", date: "Apr 14, 2026" },
  { title: "Plant Spacing", file: "PLANT_SPACING.pdf", size: "2.1 MB", date: "Apr 14, 2026" },
  { title: "Seed Propagation", file: "Seed_Propagation.pdf", size: "1.9 MB", date: "Apr 14, 2026" },
];

const ComingSoonSection = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="rounded-2xl border bg-card shadow-sm overflow-hidden mb-8">
    <div className="flex items-center gap-3 px-6 py-4 border-b bg-muted/40">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <FileText className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
    <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
      <Clock className="w-10 h-10 text-muted-foreground/60 mb-3" />
      <p className="font-display text-xl font-bold text-foreground mb-1">Coming Soon</p>
      <p className="text-sm text-muted-foreground max-w-sm">
        We are preparing this collection.
      </p>
    </div>
  </section>
);

const Newsletters = () => {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <header className="mb-10">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Jume College Reports, Newsletters &amp; Training Resources</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Read or download our latest reports, learning briefs, field guides and updates from Jume College.
          </p>
        </header>

        <section className="rounded-2xl border bg-card shadow-sm overflow-hidden mb-8">
          <div className="flex items-center gap-3 px-6 py-4 border-b bg-muted/40">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Reports</h2>
              <p className="text-xs text-muted-foreground">Annual and project reports</p>
            </div>
          </div>
          <ul className="divide-y">
            <li className="grid grid-cols-1 md:grid-cols-12 gap-3 px-6 py-4 items-center hover:bg-muted/30 transition-colors">
              <div className="md:col-span-9 flex items-center gap-3">
                <div className="w-10 h-12 rounded bg-red-50 border border-red-200 flex items-center justify-center text-red-600 text-[10px] font-bold">PDF</div>
                <a href="/reports/The_Jume_College_Otepic_Kenya_Report.pdf" target="_blank" rel="noopener" className="text-left font-medium text-primary hover:underline">
                  The JUME College - OTEPIC Kenya Report
                </a>
              </div>
              <div className="md:col-span-3 flex md:justify-end gap-2">
                <a href="/reports/The_Jume_College_Otepic_Kenya_Report.pdf" target="_blank" rel="noopener">
                  <Button size="sm" variant="outline"><Eye className="w-4 h-4" /></Button>
                </a>
                <a href="/reports/The_Jume_College_Otepic_Kenya_Report.pdf" download>
                  <Button size="sm"><Download className="w-4 h-4 mr-1" /> <span className="hidden sm:inline">Download</span></Button>
                </a>
              </div>
            </li>
          </ul>
        </section>
        <ComingSoonSection title="Newsletters" subtitle="Periodic community updates" />

        {/* Training Materials — main */}
        <section className="rounded-2xl border bg-card shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b bg-muted/40">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Training Materials</h2>
              <p className="text-xs text-muted-foreground">Practical permaculture & agricultural learning briefs</p>
            </div>
            <span className="ml-auto text-sm text-muted-foreground">{trainingMaterials.length} files</span>
          </div>

          <div className="hidden md:grid grid-cols-12 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b">
            <div className="col-span-6">File</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-2">Last Modified</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          <ul className="divide-y">
            {trainingMaterials.map((it) => (
              <li
                key={it.file}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 px-6 py-4 items-center hover:bg-muted/30 transition-colors"
              >
                <div className="md:col-span-6 flex items-center gap-3">
                  <div className="w-10 h-12 rounded bg-red-50 border border-red-200 flex items-center justify-center text-red-600 text-[10px] font-bold">
                    PDF
                  </div>
                  <button
                    onClick={() => setOpen(it)}
                    className="text-left font-medium text-primary hover:underline"
                  >
                    {it.title}
                  </button>
                </div>
                <div className="md:col-span-2 text-sm text-muted-foreground">{it.size}</div>
                <div className="md:col-span-1 text-sm text-muted-foreground">.pdf</div>
                <div className="md:col-span-2 text-sm text-muted-foreground">{it.date}</div>
                <div className="md:col-span-1 flex md:justify-end gap-2">
                  <Button size="sm" variant="outline" onClick={() => setOpen(it)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <a href={`/newsletters/${it.file}`} download>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-1" /> <span className="hidden sm:inline">Download</span>
                    </Button>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col">
          <div className="flex items-center gap-3 px-4 py-3 bg-background border-b">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold truncate flex-1">{open.title}</h3>
            <a href={`/newsletters/${open.file}`} download>
              <Button size="sm"><Download className="w-4 h-4 mr-1" /> Download</Button>
            </a>
            <Button size="sm" variant="outline" onClick={() => setOpen(null)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <iframe
            src={`/newsletters/${open.file}`}
            title={open.title}
            className="flex-1 w-full bg-white"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Newsletters;
