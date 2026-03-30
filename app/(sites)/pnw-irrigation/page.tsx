"use client";
import { useState } from "react";

export default function PacificNorthwestIrrigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans" style={{fontFamily:"'Segoe UI',system-ui,sans-serif"}}>

      {/* NAV */}
      <nav style={{background:"#0f3d1f",position:"sticky",top:0,zIndex:50,boxShadow:"0 2px 20px rgba(0,0,0,0.3)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:72}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#2ecc71,#27ae60)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#fff",fontSize:16,letterSpacing:1}}>PNI</div>
            <div>
              <div style={{color:"#fff",fontWeight:800,fontSize:18,lineHeight:1}}>Pacific Northwest Irrigation</div>
              <div style={{color:"#2ecc71",fontSize:12,letterSpacing:1}}>SEATTLE'S IRRIGATION EXPERTS</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:32}}>
            <a href="#services" style={{color:"#ccc",textDecoration:"none",fontSize:14,fontWeight:500}}>Services</a>
            <a href="#why-us" style={{color:"#ccc",textDecoration:"none",fontSize:14,fontWeight:500}}>Why Us</a>
            <a href="#contact" style={{color:"#ccc",textDecoration:"none",fontSize:14,fontWeight:500}}>Contact</a>
            <a href="tel:2069901392" style={{background:"linear-gradient(135deg,#2ecc71,#27ae60)",color:"#fff",padding:"10px 24px",borderRadius:50,fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 15px rgba(46,204,113,0.4)"}}>
              (206) 990-1392
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{background:"linear-gradient(135deg,#0a2612 0%,#0f3d1f 40%,#1a6b35 100%)",minHeight:"90vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 70% 50%, rgba(46,204,113,0.08) 0%, transparent 60%)"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"80px 24px",position:"relative",zIndex:1}}>
          <div style={{display:"inline-block",background:"rgba(46,204,113,0.15)",border:"1px solid rgba(46,204,113,0.3)",borderRadius:50,padding:"6px 20px",color:"#2ecc71",fontSize:13,fontWeight:600,letterSpacing:2,marginBottom:24}}>
            ✓ LICENSED & INSURED · OPEN 24 HOURS
          </div>
          <h1 style={{color:"#fff",fontSize:"clamp(42px,7vw,80px)",fontWeight:900,lineHeight:1.05,marginBottom:24,letterSpacing:"-1px"}}>
            Seattle's Most<br/>
            <span style={{background:"linear-gradient(135deg,#2ecc71,#7bed9f)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Trusted Irrigation</span><br/>
            Experts
          </h1>
          <p style={{color:"#a8d5b5",fontSize:20,marginBottom:40,maxWidth:560,lineHeight:1.7}}>
            From custom system design to smart technology installation — we keep the Pacific Northwest green, efficient, and thriving.
          </p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:56}}>
            <a href="tel:2069901392" style={{background:"linear-gradient(135deg,#2ecc71,#27ae60)",color:"#fff",padding:"18px 40px",borderRadius:50,fontWeight:800,fontSize:18,textDecoration:"none",boxShadow:"0 8px 30px rgba(46,204,113,0.5)",letterSpacing:0.5}}>
              📞 Call Now: (206) 990-1392
            </a>
            <a href="#services" style={{background:"rgba(255,255,255,0.08)",color:"#fff",padding:"18px 40px",borderRadius:50,fontWeight:600,fontSize:18,textDecoration:"none",border:"1px solid rgba(255,255,255,0.2)"}}>
              View Services →
            </a>
          </div>
          <div style={{display:"flex",gap:32,flexWrap:"wrap"}}>
            {[["4.6★","Google Rating"],["28","Verified Reviews"],["24/7","Always Available"],["15+","Years Experience"]].map(([val,label])=>(
              <div key={label} style={{textAlign:"center"}}>
                <div style={{color:"#2ecc71",fontSize:28,fontWeight:900,lineHeight:1}}>{val}</div>
                <div style={{color:"#7a9e85",fontSize:12,marginTop:4,letterSpacing:1}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{background:"#f8faf9",padding:"100px 24px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#2ecc71",fontWeight:700,letterSpacing:3,fontSize:13,marginBottom:12}}>WHAT WE DO</div>
            <h2 style={{fontSize:"clamp(32px,5vw,52px)",fontWeight:900,color:"#0f3d1f",marginBottom:16}}>Complete Irrigation Solutions</h2>
            <p style={{color:"#5a7a65",fontSize:18,maxWidth:500,margin:"0 auto"}}>Every service you need, delivered by certified professionals.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:28}}>
            {[
              {icon:"🎨",title:"System Design",desc:"Custom-engineered irrigation plans built around your land size, soil type, water availability, and budget. No one-size-fits-all here."},
              {icon:"🔧",title:"Installation",desc:"Professional installation of sprinkler systems and drip irrigation using industry-leading equipment and zero-mess techniques."},
              {icon:"🔍",title:"Maintenance & Tune-Ups",desc:"Seasonal inspections, pressure adjustments, and water conservation audits to keep your system running at peak performance."},
              {icon:"⚡",title:"Rapid Repair",desc:"Something break? We diagnose fast and fix right the first time — 24/7 emergency response available throughout Seattle."},
              {icon:"🤖",title:"Smart Technology",desc:"Upgrade to smart controllers, soil moisture sensors, and weather-linked stations that save water and reduce your bill automatically."},
              {icon:"💧",title:"Water Conservation",desc:"Expert audits and retrofits to maximize efficiency, reduce runoff, and keep you compliant with local watering restrictions."},
            ].map(({icon,title,desc})=>(
              <div key={title} style={{background:"#fff",borderRadius:20,padding:"36px 32px",boxShadow:"0 4px 24px rgba(0,0,0,0.06)",border:"1px solid #e8f0ea",transition:"all 0.2s"}}>
                <div style={{width:56,height:56,borderRadius:16,background:"linear-gradient(135deg,#e8f8ef,#d0f0dc)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:20}}>{icon}</div>
                <h3 style={{color:"#0f3d1f",fontWeight:800,fontSize:20,marginBottom:10}}>{title}</h3>
                <p style={{color:"#5a7a65",lineHeight:1.7,fontSize:15}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{background:"linear-gradient(135deg,#0f3d1f,#1a6b35)",padding:"100px 24px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
          <div>
            <div style={{color:"#2ecc71",fontWeight:700,letterSpacing:3,fontSize:13,marginBottom:12}}>WHY CHOOSE US</div>
            <h2 style={{color:"#fff",fontSize:"clamp(32px,4vw,48px)",fontWeight:900,marginBottom:24,lineHeight:1.2}}>Built on Trust, Backed by Results</h2>
            <p style={{color:"#a8d5b5",fontSize:17,lineHeight:1.8,marginBottom:40}}>
              Since opening our doors, we've been the go-to irrigation company for Seattle homeowners and commercial property managers who want it done right — the first time.
            </p>
            <a href="tel:2069901392" style={{display:"inline-block",background:"linear-gradient(135deg,#2ecc71,#27ae60)",color:"#fff",padding:"16px 36px",borderRadius:50,fontWeight:700,fontSize:16,textDecoration:"none",boxShadow:"0 8px 30px rgba(46,204,113,0.4)"}}>
              Get a Free Quote
            </a>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            {[
              ["⏱️","24/7 Emergency Service","We don't go offline. When your system fails, we show up — day or night."],
              ["📍","Local Seattle Experts","We know the Pacific Northwest climate, soil, and regulations better than anyone."],
              ["🛡️","Licensed & Fully Insured","Every job is protected. Your property, your peace of mind."],
              ["💰","Transparent Pricing","No hidden fees. You see the full quote before we touch a thing."],
            ].map(([icon,title,desc])=>(
              <div key={title} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,padding:"24px 28px",display:"flex",gap:20,alignItems:"flex-start"}}>
                <div style={{fontSize:28,flexShrink:0}}>{icon}</div>
                <div>
                  <div style={{color:"#fff",fontWeight:700,fontSize:16,marginBottom:4}}>{title}</div>
                  <div style={{color:"#7ab88a",fontSize:14,lineHeight:1.6}}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{background:"#fff",padding:"100px 24px",textAlign:"center"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#2ecc71,#27ae60)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,margin:"0 auto 28px"}}>📞</div>
          <h2 style={{fontSize:"clamp(32px,5vw,52px)",fontWeight:900,color:"#0f3d1f",marginBottom:16}}>Ready to Get Started?</h2>
          <p style={{color:"#5a7a65",fontSize:18,marginBottom:48,lineHeight:1.7}}>
            Call Seattle's most trusted irrigation team today. Free consultations, transparent pricing, same-day estimates available.
          </p>
          <a href="tel:2069901392" style={{display:"inline-block",background:"linear-gradient(135deg,#0f3d1f,#1a6b35)",color:"#fff",padding:"22px 56px",borderRadius:50,fontWeight:800,fontSize:22,textDecoration:"none",boxShadow:"0 12px 40px rgba(15,61,31,0.3)",marginBottom:24}}>
            (206) 990-1392
          </a>
          <div style={{color:"#5a7a65",fontSize:14}}>📍 Seattle, WA &nbsp;·&nbsp; ⏱️ Open 24 Hours &nbsp;·&nbsp; ⭐ 4.6 Stars (28 Reviews)</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#070f09",color:"#fff",padding:"48px 24px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:24}}>
          <div>
            <div style={{fontWeight:800,fontSize:18,marginBottom:4}}>Pacific Northwest Irrigation</div>
            <div style={{color:"#3a5a42",fontSize:13}}>Seattle, WA · Licensed & Insured · Open 24 Hours</div>
          </div>
          <div style={{color:"#3a5a42",fontSize:13}}>© 2025 Pacific Northwest Irrigation. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
