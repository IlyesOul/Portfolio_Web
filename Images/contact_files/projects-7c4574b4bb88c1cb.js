(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(2218)}])},3041:function(e,t,i){"use strict";i.d(t,{f:function(){return StarrySection}});var n=i(5893),r=i(7294),o=i(6513),s=i(2734),a=i(8396);let l=(0,o.ZP)("div")(e=>{let{theme:t}=e;return"\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: max-content;\n    "}),c=(0,o.ZP)(l)(e=>{let{theme:t}=e;return"\n        width: 100vw;\n        margin: 20px 0;\n        clip-path: polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%);\n        background-image: url(images/background-animated.webp);\n        padding-bottom: 75px;\n        padding-top: 75px;\n        ".concat(t.breakpoints.up("xs")," {\n            background-position: center;\n        }\n        ").concat(t.breakpoints.up("md")," {\n            background-attachment: fixed;\n            background-position: left;\n            background-size: 100vw;\n        }\n    ")}),StarrySection=e=>{let t=(0,s.Z)(),i=(0,a.Z)(t.breakpoints.up("md")),[o,p]=r.useState(0),onScroll=()=>{let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;p(e)};return r.useEffect(()=>{if(i&&!e.disabled)return window.addEventListener("scroll",onScroll),()=>{window.removeEventListener("scroll",onScroll)}},[i,e.disabled]),e.disabled?(0,n.jsx)(l,{children:e.children}):(0,n.jsx)(c,{style:{backgroundPositionY:i?-(.25*o):0},children:e.children})}},5911:function(e,t,i){"use strict";i.d(t,{V:function(){return TechIcon},X:function(){return r}});var n,r,o=i(5893),s=i(7357),a=i(5675),l=i.n(a);i(7294);var c=i(7737);(n=r||(r={}))[n.React=0]="React",n[n.TS=1]="TS",n[n.CSharp=2]="CSharp",n[n.Python=3]="Python",n[n.HTMLCss=4]="HTMLCss",n[n.Cpp=5]="Cpp",n[n.SQL=6]="SQL",n[n.Azure=7]="Azure",n[n.Vulkan=8]="Vulkan",n[n.Rust=9]="Rust";let p={0:{url:"/images/react.webp",alt:"React"},1:{url:"/images/typescript.webp",alt:"Typescript"},2:{url:"/images/cs.svg",alt:"C#"},3:{url:"/images/python.webp",alt:"Python"},4:{url:"/images/csshtml.svg",alt:"HTML/CSS"},5:{url:"/images/cpp.svg",alt:"C++"},6:{url:"/images/sql.webp",alt:"SQL"},7:{url:"/images/azure.webp",alt:"Azure"},8:{url:"/images/vulkan.webp",alt:"Vulkan"},9:{url:"/images/rust.webp",alt:"Rust"}},TechIcon=e=>{var t;let i=p[e.type],n=null!==(t=e.sizeScalar)&&void 0!==t?t:1;return i?(0,o.jsx)(c.m,{text:e.tooltip?i.alt:void 0,tooltip:{arrow:!0},children:(0,o.jsx)(s.Z,{sx:{minWidth:{xs:35*n,sm:45*n,md:55*n,lg:65*n},minHeight:{xs:35*n,sm:45*n,md:55*n,lg:65*n},position:"relative"},children:(0,o.jsx)(l(),{src:i.url,alt:i.alt,fill:!0,sizes:"".concat(Math.round(70*n),"px")})})}):(0,o.jsx)(o.Fragment,{})}},2218:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return projects}});var n=i(5893),r=i(7294),o=i(5861),s=i(2734),a=i(8396),l=i(7357),c=i(9417),p=i(2962),d=i(9590),h=i(377),m=i(3795),u=i(5675),g=i.n(u),x=i(7431),b=i(5911),w=i(5449);let f=r.memo(e=>{let{techs:t}=e;return(0,n.jsx)(r.Fragment,{children:(0,n.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"},gap:"2rem",height:"max-content",width:"90%",borderRadius:"20px",padding:"1.5rem",background:"linear-gradient(90deg, rgba(44,42,48,0.95) 0%, rgba(66,63,73,0.95) 50%, rgba(44,42,48,0.95) 100%)",border:e=>"5px solid ".concat(e.palette.text.primaryDark)},children:[(0,n.jsx)(l.Z,{sx:{position:"relative",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(g(),{src:"/images/projects/".concat(e.imageName),style:{borderRadius:"20px",height:"auto",maxWidth:"100%",maxHeight:"100%"},alt:e.title,sizes:"\n                            (max-width: 900px) 80vw,\n                            40vw\n                        ",width:1e3,height:500})}),(0,n.jsxs)(l.Z,{sx:{width:"100%"},children:[(0,n.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",marginBottom:"0.75rem",gap:"0.75rem"},children:[(0,n.jsx)(o.Z,{variant:"h3",children:e.title}),e.link&&(0,n.jsx)(m.Z,{href:e.link,target:"_blank",height:"24px",children:(0,n.jsx)(x.Z,{sx:{color:"text.secondary"}})}),e.github&&(0,n.jsx)(m.Z,{href:e.github,target:"_blank",height:"24px",children:(0,n.jsx)(w.Z,{sx:{color:"text.secondary"}})})]}),(0,n.jsx)(o.Z,{variant:"body1",children:e.description}),(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"1rem"},children:(()=>{if(0==t.length)return;let e=[];for(let i=0;i<t.length;i++)e.push((0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(b.V,{sizeScalar:.75,type:t[i],tooltip:!0}),i!=t.length-1&&(0,n.jsx)(o.Z,{variant:"h3",children:"\xb7"})]},i));return e})()})]})]})})});var y=i(3041),j=i(5989),v=i(8662);let TextSelected=e=>(0,n.jsx)(o.Z,{...e,color:e.selected?"text.primary":"text.secondaryDark",variant:"h3",sx:{...e.sx,cursor:"pointer",opacity:e.selected?1:.5,borderBottom:t=>"5px solid ".concat(e.selected?t.palette.primary.main:t.palette.text.secondaryDark),transition:e=>e.transitions.create(["border","color","opacity"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.standard})},children:e.children});var projects=()=>{let e=(0,h.C)(e=>e.pageExpanded),t=(0,s.Z)(),i=(0,a.Z)(t.breakpoints.down("md")),[m,u]=r.useState(!0),getProProjects=()=>{let e=[(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.CSharp,b.X.SQL],imageName:"echelon-website.png",link:"https://www.echelon.org/",github:"",title:"Echelon Website",description:"During my internship with Echelon Consulting, one other intern and I converted the company website from a legacy Java codebase to a modern React frontend and DotNet backend. As part of this, we designed and implemented a custom content management system to allow easy modifications to the site going forwards. We kept the majority of the initial design but revamped some parts to feel more modern and mobile friendly."},"Echelon Website"),(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.CSharp,b.X.SQL],imageName:"echelon-dashboard.webp",link:"",github:"",title:"Echelon Dashboard",description:"During my internship with Echelon Consulting, one other intern and I built an application from the ground up, which tightly integrates with Echelon's commercial time and expense system. It allows Echelon's leadership team to view various aspects of their business in near-real time, including company utilization, individual utilization, individual project health, and client sales distribution. The application is in active use and continues to evolve."},"Echelon Dashboard")];return e},getPersonalProjects=()=>{let e=[(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.CSharp,b.X.SQL],imageName:"word-arena.png",link:"https://wordarena.xyz/",github:"",title:"Word Arena",description:"An online multiplayer-enhanced version of the popular word game Wordle filled with other cool, interactive, and customizable features."},"Word Arena"),(0,n.jsx)(f,{techs:[b.X.Cpp,b.X.Vulkan],imageName:"flourish.jpg",link:"",github:"https://github.com/TheApplePieGod/Flourish",title:"Flourish",description:"An cross-platform rendering library that abstracts away the complexity of Vulkan and allows (coming soon) the option to switch to native Metal on MacOS devices."},"Flourish"),(0,n.jsx)(f,{techs:[b.X.Cpp,b.X.CSharp],imageName:"heart.webp",link:"",github:"https://github.com/TheApplePieGod/Heart",title:"Heart",description:"A cross-platform game engine that uses Flourish under the hood to render and supports numerous features such as PBR rendering, C# scripting, physics, and more."},"Heart"),(0,n.jsx)(f,{techs:[b.X.Rust],imageName:"cel.webp",link:"",github:"https://github.com/TheApplePieGod/cel",title:"cel_",description:"A multimodal rust-based terminal emulator for the modern world. Cel features per-command contextual widgets, and supports many emulator features and complex ANSI applications like htop and Neovim."},"cel"),(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.Rust],imageName:"bandersnatch.png",link:"https://bchess.site/",github:"https://github.com/TheApplePieGod/Bandersnatch",title:"Bandersnatch",description:"A chess playing engine built from scratch, powered by the browser for anyone to use and experiment with. The engine backend was written in both Typescript and Rust (WebAssembly) for comparison."},"Bandersnatch"),(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.SQL,b.X.Python],imageName:"koi.png",link:"https://koi.fyi",github:"",title:"Koi",description:"A startup I co-founded with a friend. Koi is your trend-intelligent social media marketing agent."},"Koi"),(0,n.jsx)(f,{techs:[b.X.Cpp],imageName:"spade.png",link:"https://youtu.be/ChWMxhsLzy8",github:"https://github.com/TheApplePieGod/Spade",title:"Spade",description:"An early 3D graphics engine. Built from scratch using DX11, I aimed to create a realistic planet which can be viewed from both space and on the surface in real time."},"Spade"),(0,n.jsx)(f,{techs:[b.X.Python],imageName:"minesweeper-ai.png",link:"",github:"https://github.com/TheApplePieGod/MinesweeperAI",title:"Minesweeper AI",description:"Various different TensorFlow models and algorithms that play Minesweeper (with varying levels of success), ranging from CNNs to RL to Transformers."},"Minesweeper AI"),(0,n.jsx)(f,{techs:[b.X.Cpp,b.X.Vulkan],imageName:"diamond.png",link:"",github:"https://github.com/TheApplePieGod/Diamond",title:"Diamond",description:"A Vulkan-based 2D rendering/compute engine which was my introduction to the Vulkan API"},"Diamond"),(0,n.jsx)(f,{techs:[b.X.Cpp],imageName:"particle-simulations.png",link:"https://youtu.be/XhlcFXmRxI8",github:"https://github.com/TheApplePieGod/ParticleSimulations",title:"Particle Sims",description:"A collection of various 2D particle simulations powered by the Diamond engine."},"Particle Sims"),(0,n.jsx)(f,{techs:[b.X.Python],imageName:"dropbot.png",link:"",github:"https://github.com/TheApplePieGod/DropBot",title:"DropBot",description:"A stock monitoring bot inspired by the boom of the graphics card market in late 2020."},"DropBot"),(0,n.jsx)(f,{techs:[b.X.Cpp],imageName:"depths-of-power.png",link:"https://youtu.be/a-77SkG5YqQ",github:"https://github.com/TheApplePieGod/DepthsOfPower",title:"Depths of Power",description:"A 2D game powered by Diamond. I have a vision for a automation focused 2D exploration game, and I have a basic prototype complete so far."},"Depths of Power"),(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss],imageName:"game-manager.png",link:"",github:"https://github.com/TheApplePieGod/GameManager",title:"Game Manager",description:"An electron-powered app used to interface over the internet with minecraft servers running on the homelab in my house."},"Game Manager"),(0,n.jsx)(f,{techs:[b.X.React,b.X.TS,b.X.HTMLCss,b.X.CSharp],imageName:"sql-dev.png",link:"",github:"https://github.com/TheApplePieGod/SQLDev",title:"SQL Dev",description:"An electron-powered app I created to assist the development process of writing SQL functions and integrating them with C#."},"SQL Dev"),(0,n.jsx)(f,{techs:[b.X.CSharp,b.X.SQL],imageName:"discord-bot.png",link:"",github:"https://github.com/TheApplePieGod/BigMoBot",title:"Discord Bot",description:"A discord bot I wrote to track user activity in my friend group's discord along with other cool features."},"Discord Bot")];return e},renderProjectsSection=e=>(0,n.jsx)(j.Z,{mode:"out-in",children:(0,n.jsx)(v.ZP,{timeout:200,mountOnEnter:!0,unmountOnExit:!0,children:t=>(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",transition:e=>e.transitions.create(["opacity"],{easing:e.transitions.easing.sharp,duration:400}),opacity:"entered"==t?1:0},children:e?getPersonalProjects():getProProjects()})},e?"personal":"pro")});return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(p.PB,{title:"Projects | Evan Thompson's Portfolio",description:"A (mostly) comprehensive list iterating many of the projects I have worked on over the years",openGraph:{title:"Projects",description:"A (mostly) comprehensive list iterating many of the projects I have worked on over the years"}}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.$,{title:"Projects",subtitle:"A (mostly) comprehensive list iterating many of the projects I have worked on over the years",buttonText:"EXPLORE",imagePath:"/images/projects.webp"}),e&&(0,n.jsx)(l.Z,{sx:{position:"absolute",width:"100vw",top:"100%",left:0},children:(0,n.jsx)(y.f,{children:(0,n.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem"},children:[i?(0,n.jsx)(TextSelected,{selected:!0,children:"Personal"}):(0,n.jsxs)(l.Z,{sx:{display:"flex",alignItems:"stretch",gap:"1rem",position:"relative",padding:"1rem 1.5rem",border:e=>"2px solid ".concat(e.palette.text.primary),borderRadius:"25px"},children:[(0,n.jsx)(TextSelected,{selected:m,onClick:()=>u(!0),children:"Personal"}),(0,n.jsx)(l.Z,{sx:{width:"2px",backgroundColor:e=>e.palette.text.primary}}),(0,n.jsx)(TextSelected,{selected:!m,onClick:()=>u(!1),children:"Professional"})]}),renderProjectsSection(m),i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(TextSelected,{selected:!0,sx:{mt:"1.5rem"},children:"Professional"}),renderProjectsSection(!1)]}):(0,n.jsx)(o.Z,{sx:{mt:"1rem",maxWidth:"85vw",textAlign:"center"},children:"Make sure to check out my ".concat(m?"Professional":"Personal"," projects as well!")}),(0,n.jsx)(c.Z,{variant:"contained",onClick:()=>window.scrollTo(0,window.innerHeight),children:"Back to Top"}),(0,n.jsx)(l.Z,{sx:{height:"150px"}})]})})})]})]})}}},function(e){e.O(0,[459,590,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);