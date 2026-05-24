


// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiMenu, 
//   FiX, 
//   FiChevronUp, 
//   FiDownload, 
//   FiExternalLink,
//   FiStar,
//   FiTrendingUp,
//   FiCode,
//   FiSmartphone,
//   FiGlobe,
//   FiLinkedin,
//   FiMessageCircle,
//   FiCheckCircle,
//   FiDollarSign,
//   FiUsers,
//   FiActivity,
//   FiPercent,
//   FiArrowUpRight,
//   FiHome,
//   FiBriefcase,
//   FiBook,
//   FiStar as FiStarIcon
// } from 'react-icons/fi';

// // 3D Bar Chart Component without Three.js
// const ThreeDChart = () => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX - window.innerWidth / 2) / 100;
//       const y = (e.clientY - window.innerHeight / 2) / 100;
//       setRotation({ x, y });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);
  
//   const bars = [
//     { height: 'h-32', color: 'from-[#00ff88] to-[#00cc66]', value: '$24K', label: 'Jan' },
//     { height: 'h-24', color: 'from-[#ff0088] to-[#cc0066]', value: '$18K', label: 'Feb' },
//     { height: 'h-28', color: 'from-[#0088ff] to-[#0066cc]', value: '$22K', label: 'Mar' },
//     { height: 'h-30', color: 'from-[#ffaa00] to-[#cc8800]', value: '$24K', label: 'Apr' },
//     { height: 'h-20', color: 'from-[#ff00ff] to-[#cc00cc]', value: '$16K', label: 'May' },
//     { height: 'h-26', color: 'from-[#00ffff] to-[#00cccc]', value: '$20K', label: 'Jun' },
//   ];
  
//   return (
//     <div 
//       className="relative w-full h-full"
//       style={{
//         transform: `perspective(1000px) rotateX(${rotation.y * 5}deg) rotateY(${rotation.x * 5}deg)`,
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.1s ease-out'
//       }}
//     >
//       {/* 3D Grid Background */}
//       <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-10">
//         {[...Array(16)].map((_, i) => (
//           <div key={i} className="border border-white/20 rounded-lg" />
//         ))}
//       </div>
      
     
      
// <div className="absolute inset-0 flex items-center justify-around px-4 pb-20">
//   {bars.map((bar, index) => (
//     <motion.div
//       key={index}
//       className="relative group"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       style={{ alignSelf: 'flex-end' }}
//     >
//       {/* Bar Shadow */}
//       <div 
//         className="absolute bottom-0 w-8 bg-black/30 rounded-t-lg"
//         style={{ 
//           height: bar.height,
//           transform: 'translateZ(-20px)',
//           filter: 'blur(4px)'
//         }}
//       />
      
//       {/* Main Bar */}
//       <motion.div
//         className={`w-8 ${bar.height} bg-gradient-to-t ${bar.color} rounded-t-lg relative`}
//         style={{ 
//           transform: 'translateZ(20px)',
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
//         }}
//         whileHover={{ scale: 1.1 }}
//         transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//       >

        
//         {/* Bar Top */}
//         <div 
//           className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-white/30 to-transparent rounded-t-lg"
//           style={{ transform: 'translateZ(5px)' }}
//         />
        
//         {/* Bar Front */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-lg"
//           style={{ transform: 'translateZ(5px)' }}
//         />
//       </motion.div>
      
//       {/* Value Label */}
//       <motion.div 
//         className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
//         style={{ transform: 'translateZ(30px)' }}
//       >
//         {bar.value}
//       </motion.div>
      
//       {/* Axis Label */}
//       <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
//         {bar.label}
//       </div>
//     </motion.div>
//   ))}
// </div>





      
//       {/* Floating Particles */}
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-[#00ff88] rounded-full"
//           style={{
//             left: `${10 + i * 8}%`,
//             top: `${20 + Math.sin(i) * 30}%`,
//             transform: 'translateZ(40px)'
//           }}
//           animate={{
//             y: [0, -20, 0],
//             opacity: [0.3, 1, 0.3]
//           }}
//           transition={{
//             duration: 2 + Math.random(),
//             repeat: Infinity,
//             delay: i * 0.2
//           }}
//         />
//       ))}
      
//       {/* Chart Grid Lines */}
//       <div className="absolute inset-0">
//         {[...Array(5)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute left-0 right-0 h-px bg-white/10"
//             style={{ 
//               bottom: `${i * 25}%`,
//               transform: 'translateZ(10px)'
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };







// // Floating Card Component with advanced 3D effect
// const FloatingCard3D = ({ children, color, delay = 0 }) => {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX - window.innerWidth / 2) / 100;
//       const y = (e.clientY - window.innerHeight / 2) / 100;
//       setMouse({ x, y });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, rotateX: -10 }}
//       animate={{ opacity: 1, y: 0, rotateX: 0 }}
//       transition={{ delay, duration: 0.5 }}
//       className="relative"
//       style={{
//         transform: `perspective(1000px) rotateX(${mouse.y * 2}deg) rotateY(${mouse.x * 2}deg)`,
//         transformStyle: 'preserve-3d',
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Card Content */}
//       <div className="relative z-10">
//         {children}
//       </div>
      
//       {/* 3D Edge Effects */}
//       <div 
//         className="absolute inset-0 rounded-3xl opacity-50"
//         style={{
//           background: `linear-gradient(135deg, ${color}40, transparent 70%)`,
//           transform: 'translateZ(-20px)',
//           filter: 'blur(20px)'
//         }}
//       />
      
//       {/* Hover Glow Effect */}
//       <motion.div
//         className="absolute inset-0 rounded-3xl"
//         style={{
//           background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
//           transform: 'translateZ(-30px)'
//         }}
//         animate={{
//           opacity: isHovered ? 0.3 : 0,
//           scale: isHovered ? 1.1 : 1
//         }}
//         transition={{ duration: 0.3 }}
//       />
      
//       {/* Reflective Edges */}
//       <div className="absolute inset-0 rounded-3xl overflow-hidden">
//         <div 
//           className="absolute top-0 left-0 w-20 h-20"
//           style={{
//             background: `linear-gradient(135deg, ${color}20, transparent)`,
//             transform: 'translateZ(5px)'
//           }}
//         />
//         <div 
//           className="absolute bottom-0 right-0 w-20 h-20"
//           style={{
//             background: `linear-gradient(315deg, ${color}20, transparent)`,
//             transform: 'translateZ(5px)'
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// // Animated Counter Component
// const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2 }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let start = 0;
//     const end = typeof value === 'string' ? parseFloat(value) : value;
    
//     const increment = end / (duration * 60);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 1000 / 60);
    
//     return () => clearInterval(timer);
//   }, [value, duration]);
  
//   const displayValue = count >= 1000 ? `${(count/1000).toFixed(1)}k` : count.toFixed(count % 1 === 0 ? 0 : 1);
  
//   return (
//     <span className="inline-block">
//       {prefix}{displayValue}{suffix}
//     </span>
//   );
// };

// // Simplified Statistics Dashboard Component
// const StatsDashboard = ({ stats, time }) => (
//   <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]">
//     <div className="max-w-7xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//           <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//             Performance Dashboard
//           </span>
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Real-time analytics and insights into application performance and user engagement metrics
//         </p>
//       </motion.div>
      
//       {/* Live Time Display */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="flex justify-center mb-8"
//       >
//         <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
//           <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
//           <span className="text-gray-300 text-sm">
//             Last updated: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//           </span>
//         </div>
//       </motion.div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//         {/* 3D Chart Section */}
//         <div className="relative h-[400px] bg-gradient-to-br from-gray-900/30 to-black/30 rounded-3xl border border-white/10 overflow-hidden group">
//           <div className="absolute inset-0 p-4">
//             <ThreeDChart />
//           </div>
          
//           {/* Chart Title */}
//           <div className="absolute top-6 left-6 z-20">
//             <h3 className="text-white font-semibold">Revenue Analytics</h3>
//             <p className="text-gray-400 text-sm">Last 6 months performance</p>
//           </div>
          
//           {/* 3D Glow Effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#0088ff]/10 to-[#ff0088]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
//         </div>
        
//         {/* Stats Cards Grid */}
//         <div className="grid grid-cols-2 gap-4">
//           {[
//             { 
//               title: "Monthly Recurring Revenue", 
//               value: stats.mrr, 
//               prefix: "$", 
//               suffix: "k",
//               change: "+24.5%",
//               icon: FiDollarSign,
//               color: "#00ff88",
//               delay: 0
//             },
//             { 
//               title: "Revenue (Last 28 days)", 
//               value: stats.revenue, 
//               prefix: "$", 
//               suffix: "k",
//               change: "+18.2%",
//               icon: FiActivity,
//               color: "#0088ff",
//               delay: 0.1
//             },
//             { 
//               title: "Active Subscriptions", 
//               value: stats.activeSubscriptions, 
//               prefix: "", 
//               suffix: "",
//               change: "+32 subscriptions",
//               icon: FiUsers,
//               color: "#ff0088",
//               delay: 0.2
//             },
//             { 
//               title: "Growth Rate", 
//               value: stats.growthRate, 
//               prefix: "", 
//               suffix: "%",
//               change: "month-over-month",
//               icon: FiPercent,
//               color: "#ffaa00",
//               delay: 0.3
//             },
//           ].map((stat, index) => (
//             <FloatingCard3D key={index} color={stat.color} delay={stat.delay}>
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full relative overflow-hidden group"
//               >
//                 {/* Icon */}
//                 <div className="absolute top-4 right-4">
//                   <div 
//                     className="w-12 h-12 rounded-2xl flex items-center justify-center"
//                     style={{ background: `${stat.color}20` }}
//                   >
//                     <stat.icon className="text-white" size={24} />
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="mb-4">
//                   <span className="text-gray-400 text-sm">{stat.title}</span>
//                 </div>
                
//                 <motion.div
//                   initial={{ scale: 0.5 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: stat.delay }}
//                   className="text-3xl md:text-4xl font-bold text-white mb-2"
//                   style={{ textShadow: `0 0 20px ${stat.color}40` }}
//                 >
//                   <AnimatedCounter 
//                     value={stat.value} 
//                     prefix={stat.prefix}
//                     suffix={stat.suffix}
//                   />
//                 </motion.div>
                
//                 <div className="flex items-center gap-2" style={{ color: stat.color }}>
//                   <FiTrendingUp />
//                   <span className="text-sm">{stat.change}</span>
//                 </div>
//               </motion.div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
      
    

//  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {[
//           { 
//             label: "Customer Satisfaction", 
//             value: 91, 
//             maxValue: 100,
//             color: "#00ff88", 
//             icon: "😊",
//             suffix: "%",
//             description: "Based on user reviews and feedback"
//           },
//           { 
//             label: "Monthly Active Users", 
//             value: 10000, 
//             maxValue: 15000,
//             color: "#0088ff", 
//             icon: "👥",
//             suffix: "K",
//             description: "Active users in last 30 days"
//           },
//           { 
//             label: "Total Products", 
//             value: 5, 
//             maxValue: 5,
//             color: "#ff0088", 
//             icon: "📦",
//             suffix: "",
//             description: "Published applications"
//           },
//         ].map((metric, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 group hover:border-white/20 transition-all duration-300"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <span className="text-3xl">{metric.icon}</span>
//                 <div>
//                   <h3 className="text-gray-400 text-sm">{metric.label}</h3>
//                   <p className="text-gray-500 text-xs mt-1">{metric.description}</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <span className="font-bold text-2xl" style={{ color: metric.color }}>
//                   {metric.value}
//                   {metric.suffix && <span className="text-lg">{metric.suffix}</span>}
//                 </span>
//               </div>
//             </div>
            
//             {/* Progress bar with percentage */}
//             <div className="mb-2 flex justify-between items-center">
//               <span className="text-gray-400 text-xs">Progress</span>
//               <span className="text-white text-sm font-semibold">
//                 {Math.round((metric.value / metric.maxValue) * 100)}%
//               </span>
//             </div>
            
//             <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${(metric.value / metric.maxValue) * 100}%` }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: index * 0.1 }}
//                 className="h-full rounded-full relative"
//                 style={{ 
//                   background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)`,
//                   boxShadow: `0 0 10px ${metric.color}40`
//                 }}
//               >
//                 {/* Animated shine effect on progress bar */}
//                 <motion.div
//                   className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                   animate={{
//                     x: [-100, 100],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "linear",
//                     delay: index * 0.2
//                   }}
//                 />
//               </motion.div>
//             </div>
            
//             {/* Progress labels */}
//             <div className="flex justify-between mt-2">
//               <span className="text-gray-500 text-xs">0</span>
//               <span className="text-gray-500 text-xs">{metric.maxValue}{metric.suffix}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   </section>
// );

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [stats] = useState({
//     mrr: 24000,
//     revenue: 18000,
//     activeSubscriptions: 156,
//     growthRate: 24.5
//   });
//   const [time, setTime] = useState(new Date());

//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Mouse follower effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Enhanced Gradient background component
//   const GradientBackground = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff88]/20 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#0088ff]/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-[#ff0088]/10 rounded-full blur-3xl" />
      
//       {/* Animated gradient dots */}
//       <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88] rounded-full animate-ping" />
//       <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#0088ff] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
//     </div>
//   );

//   // Floating particles
//   const FloatingParticles = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           animate={{
//             y: [null, -20, 20],
//             x: [null, Math.sin(i) * 10],
//           }}
//           transition={{
//             duration: 2 + Math.random() * 3,
//             repeat: Infinity,
//             delay: i * 0.1,
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="relative bg-[#0A0A0A] min-h-screen overflow-hidden">
//       <GradientBackground />
//       <FloatingParticles />
      
//       {/* Navigation */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-lg`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-bold text-white flex items-center gap-2"
//           >
//             <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-[#00ff88] to-[#0088ff] flex items-center justify-center">
//               <span className="text-white font-bold">D</span>
//             </div>
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               Devank
//             </span>
//           </motion.div>
          
//           <div className="hidden md:flex gap-8">
//             {[
//               { name: 'Home', icon: FiHome },
//               { name: 'Dashboard', icon: FiActivity },
//               { name: 'Projects', icon: FiBriefcase },
//               { name: 'Experience', icon: FiTrendingUp },
//               { name: 'Education', icon: FiBook }
//             ].map((item) => (
//               <motion.a
//                 key={item.name}
//                 href={`#${item.name.toLowerCase()}`}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-2 relative group"
//               >
//                 <item.icon />
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#0088ff] group-hover:w-full transition-all duration-300" />
//               </motion.a>
//             ))}
//           </div>
          
//           <div className="flex items-center gap-4">
//             <motion.a
//               href="https://www.linkedin.com/in/devank-karanwal-99b05b120/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all"
//             >
//               <FiMessageCircle /> Let's Connect
//             </motion.a>
            
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <FiMenu size={24} />
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
//           >
//             <button 
//               className="absolute top-6 right-6 text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <FiX size={24} />
//             </button>
            
//             <div className="flex flex-col items-center gap-8">
//               {['Home', 'Dashboard', 'Projects', 'Experience', 'Education'].map((item) => (
//                 <motion.a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ delay: item.charCodeAt(0) * 0.01 }}
//                   className="text-3xl text-white hover:text-[#00ff88] transition-colors flex items-center gap-3"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item === 'Home' && <FiHome />}
//                   {item === 'Dashboard' && <FiActivity />}
//                   {item === 'Projects' && <FiBriefcase />}
//                   {item === 'Experience' && <FiTrendingUp />}
//                   {item === 'Education' && <FiBook />}
//                   {item}
//                 </motion.a>
//               ))}
              
//               <motion.a
//                 href="https://www.linkedin.com/in/gauhun/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="mt-8 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full flex items-center gap-2"
//               >
//                 <FiLinkedin /> Let's Connect
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="mb-6">
//                 <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ff88]/10 to-[#0088ff]/10 text-[#00ff88] px-4 py-2 rounded-full">
//                   <FiTrendingUp /> Senior IOS & React Native Developer
//                 </span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-bold mb-6">
//                 <span className="block bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//                   Hello, I'm
//                 </span>
//                 <span className="block text-white mt-2">Devank karanwal</span>
//               </h1>
              
//               {/* <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//                 Crafting exceptional mobile experiences with Native IOS & React Native for over 8+ years. 
//                 Passionate about building scalable applications that users love.
//               </p> */}

//               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
  
//  Crafting exceptional mobile experiences using <span className="font-semibold"> React Native</span>, 
//   <span className="font-semibold"> Swift</span>, and <span className="font-semibold"> Flutter</span> for over 8+ years. 
//   Passionate about building scalable applications that users love, including my own products:
//  <span className="font-semibold"> CoinClash</span>, 
//   {/* Passionate about building scalable applications that users love, including <span className="font-semibold">CoinClash</span>,  */}
//   <span className="font-semibold"> VPN</span>, <span className="font-semibold"> Hido</span>, 
//   <span className="font-semibold"> Luvio</span>, and <span className="font-semibold"> Geobuddy</span>.
// </p>

              
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <div className="flex items-center gap-2 text-gray-300">
//                   <FiCheckCircle className="text-[#00ff88]" />
//                   <span>8+ Years Experience</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-300">
//                   <FiCheckCircle className="text-[#00ff88]" />
//                   <span>20+ Projects Delivered</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-300">
//                   <FiCheckCircle className="text-[#00ff88]" />
//                   <span>100K+ Downloads</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center justify-center gap-2"
//                 >
//                   <FiMessageCircle /> Hire Me
//                 </motion.button>
                
//                 <motion.a
//                   href="https://drive.google.com/file/d/18FQYFwE75hRUp7zuO_Qyt40zeah3VZCc/view?usp=sharing"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="border border-gray-700 text-white px-8 py-3 rounded-full hover:border-[#00ff88] transition-colors flex items-center justify-center gap-2"
//                 >
//                   <FiDownload /> Download CV
//                 </motion.a>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
//                 {/* Animated orbit rings */}
//                 {[1, 2, 3].map((ring) => (
//                   <motion.div
//                     key={ring}
//                     className="absolute inset-0 border border-[#00ff88]/20 rounded-full"
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 20 + ring * 5,
//                       repeat: Infinity,
//                       ease: "linear"
//                     }}
//                   />
//                 ))}
                
//                 {/* Floating tech icons with AI colors */}
//                 {['📱', '🚀', '💻', '⚛️', '⚡', '🦅', '🛠️', '🎨', '📝'].map((icon, index) => (
//                   <motion.div
//                     key={index}
//                     className="absolute text-2xl"
//                     style={{
//                       color: ['#00ff88', '#0088ff', '#ff0088', '#ffaa00', '#ff00ff', '#00ffff', '#ffaa00', '#ff00ff', '#00ffff'][index]
//                     }}
//                     animate={{
//                       rotate: 360,
//                       x: Math.cos(index) * (100 + index * 20),
//                       y: Math.sin(index) * (100 + index * 20),
//                     }}
//                     transition={{
//                       duration: 10 + index * 2,
//                       repeat: Infinity,
//                       ease: "linear",
//                       delay: index * 0.5
//                     }}
//                   >
//                     {icon}
//                   </motion.div>
//                 ))}
                
//                 {/* Center profile */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#00ff88] relative bg-gradient-to-br from-[#00ff88]/20 to-[#0088ff]/20">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="text-6xl md:text-8xl">🚀</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Dashboard */}
//       <StatsDashboard stats={stats} time={time} />

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
//           >
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </motion.h2>
          



// <div className="grid md:grid-cols-2 gap-8">
//   {
 

//   [
//   {
//     title: "تكويد",
//     description: "Tracks farm locations, verifies export-area cultivation, ensures crop quality, sponsored by Egypt’s Agricultural Export Council.",
//     stats: "100+ installs",
//     color: "#00ff88",
//     icon: "🌾 🚜",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.takweed.app"
//   },
//   {
//     title: "قمحاوي",
//     description: "Empowers farmers with smart tools for crop health, disease detection, weather insights, and marketplace access.",
//     stats: "50K+ installs",
//     color: "#ff0088",
//     icon: "🤖 🚜",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.qamhawy.app&hl=en"
//   },
//   {
//     title: "Yapsody QuickScan",
//     description: "QuickScan efficiently manages event ticket scanning, attendee info, refunds, and multiple venue entries seamlessly",
//     stats: "100+ Downloads",
//     color: "#0088ff",
//     icon: "📲",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.quickscan&hl=en"
//   },
//   {
//     title: "Yapsody YapStats",
//     description: "YapStats tracks events, provides support, enables past event access, and simplifies presenter management efficiently",
//     stats: "1K+ Downloads",
//     color: "red",
//     icon: "📊",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yapstats&hl=en"
//   },

//     {
//     title: "Yapsody YapTickets",
//     description: "YapTickets simplifies ticket access, redemption, and transfers, ensuring fast, seamless entry to any event",
//     stats: "10K+ Downloads",
//     color: "red",
//     icon: "🎫",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yaptix&hl=en"
//   },



//     {
//     title: "Yatri Sathi",
//     description: "Yatri Sathi offers reliable ride-hailing in Kolkata, connecting millions of users with trusted local drivers",
//     stats: "1M+ Downloads",
//     color: "#ffaa00",
//     icon: "🚖",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=in.juspay.jatrisaathi&hl=en"
//   },



//       {
//     title: "Hido - Video Calls & Friends",
//     description: "Hido enables meaningful conversations, connecting people through text and video for genuine emotional connections",
//     stats: "10K+ Downloads",
//     color: "purple",
//     icon: "💬",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.hi.hido&hl=en"
//   },



//       {
//     title: "CoinClash",
//     description: "CoinClash rewards knowledge by letting users play quizzes, watch ads, and earn real money easily",
//     stats: "100+ Downloads",
//     color: "green",
//     icon: "🪙",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.coinclash&hl=en"
//   },



//       {
//     title: "Chatter Social",
//     description: "Chatter enables real-time group conversations, viral moments, and community-driven content for creators and users",
//     stats: "10K+ Downloads",
//     color: "brown",
//     icon: "👥 💬",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en"
//   },


//      {
//     title: "GeoBuddy- The Learning App",
//     description: "Our app offers comprehensive, uninterrupted learning from home with interactive features for students nationwide",
//     stats: "1K+ Downloads",
//     color: "gold",
//     icon: "📚",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=co.iron.jpiyu&hl=en"
//   },

// ]

  
//   .map((project, index) => (
//     <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
//       {/* Simple hover without complex effects */}
//       <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full overflow-hidden group hover:border-white/20 transition-all duration-300">
//         {/* Simple overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         <div className="relative z-10">
//           <div className="flex items-start justify-between mb-4">
//             <div className="text-4xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
//               {project.icon}
//             </div>
//             <span className="text-sm px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105" style={{ 
//               background: `${project.color}20`,
//               color: project.color,
//               border: `1px solid ${project.color}30`,
//             }}>
//               {project.stats}
//             </span>
//           </div>
          
//           <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
//             {project.title}
//           </h3>
          
//           <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
//             {project.description}
//           </p>
          
       

//           <a
//   href={project.playStoreUrl}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
//   style={{ color: project.color }}
// >
//   <FiExternalLink className="group-hover:scale-110 transition-transform duration-300" />
//   <span className="text-sm group-hover:tracking-wider group-hover:font-medium transition-all duration-300">
//     View Details
//   </span>
// </a>
//         </div>
        
//         {/* Simple shadow on hover */}
//         <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="absolute inset-0 shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-3xl" />
//         </div>
//       </div>
//     </FloatingCard3D>
//   ))}
// </div>




//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
//           >
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               Work Experience
//             </span>
//           </motion.h2>
          
       

// <div className="space-y-8">
//   {
  
// [
//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "App Cake",
//     duration: "March 2024 - Present",
//     location: "Remote",
//     points: [
//       "Led team of 10 developers",
//       "Enhanced system response by 80%",
//       "Delivered 10+ major projects"
//     ],
//     color: "#22c55e" // green (keep as is)
//   },
//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "Avi Software",
//     duration: "July 2023 - Dec 2023",
//     location: "Mumbai",
//     points: [
//       "Contract base of 6 month",
//       "Enhanced system response by 85%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#3b82f6" // blue (keep as is)
//   },

//   {
//     title: "Junior Software Engineer Flutter and IOS",
//     company: "ConsCent",
//     duration: "May 2022 - July 2023",
//     location: "Delhi",
//     points: [
//       "Junior Developer Flutter",
//       "Enhanced system response by 80%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#ef4444" // pink
//   },

//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "Floweret™ - India's Online Nursery",
//     duration: "July 2021 - May 2022",
//     location: "Noida",
//     points: [
//       "Senior Developer Native iOS",
//       "Enhanced system response by 70%",
//       "Delivered 3+ major projects"
//     ],
//     color: "#f472b6" // rose pink
//   },

//   {
//     title: "Junior Software Engineer React Native and IOS",
//     company: "QuickNet Solution",
//     duration: "July 2020 - July 2021",
//     location: "Noida",
//     points: [
//       "Junior Developer Native iOS",
//       "Enhanced system response by 70%",
//       "Delivered 4+ major projects"
//     ],
//     color: "#c084fc" // neon pink
//   },

//   {
//     title: "Junior Software Engineer React Native and IOS",
//     company: "Pan India Internet Pvt Ltd",
//     duration: "July 2019 - July 2020",
//     location: "Kota",
//     points: [
//       "Junior Developer Native iOS",
//       "Enhanced system response by 60%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#facc15" // soft pink
//   },

//   {
//     title: "Junior Software Engineer React Native and IOS",
//     company: "Technogogues IT Solutions Pvt. Ltd",
//     duration: "Oct 2018 - July 2019",
//     location: "Kota",
//     points: [
//       "Junior Developer Native iOS",
//       "Enhanced system response by 60%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#991b1b" // deep rose
//   }
// ]

  
//   .map((exp, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.2 }}
//       whileHover={{ 
//         scale: 1.02,
//         transition: { duration: 0.3 }
//       }}
//       className="relative group"
//     >
//       {/* Hover Gradient Background */}
//       <div 
//         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(circle at center, ${exp.color}15, transparent 70%)`,
//           filter: 'blur(20px)'
//         }}
//       />
      
//       {/* Glass Card */}
//       <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-500 overflow-hidden">
        
//         {/* Animated Gradient Border */}
//         <div className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div 
//             className="absolute inset-0 rounded-3xl"
//             style={{
//               background: `linear-gradient(90deg, transparent, ${exp.color}30, transparent)`,
//               animation: 'gradientMove 2s linear infinite'
//             }}
//           />
//         </div>
        
//         <div className="relative z-10">
//           <div className="flex items-start gap-4">
//             {/* Icon with Hover Effect */}
//             <div 
//               className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
//               style={{ 
//                 background: `${exp.color}20`,
//                 boxShadow: '0 0 0 transparent'
//               }}
//             >
//               <FiBriefcase 
//                 className="transition-all duration-500 group-hover:scale-110" 
//                 style={{ color: exp.color }}
//                 size={24}
//               />
//             </div>
            
//             <div className="flex-1">
//               {/* Title with Hover Effect */}
//               <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
//                 {exp.title}
//               </h3>
              
//               {/* Company and Duration */}
//               <div className="flex flex-wrap items-center gap-2 mb-2">
//                 <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
//                   {exp.company}
//                 </p>
//                 <span className="text-gray-500">•</span>
//                 <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
//                   {exp.duration}
//                 </p>
//               </div>
              
//               {/* Location */}
//               <p className="text-gray-500 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-400">
//                 📍 {exp.location}
//               </p>
              
//               {/* Points List with Hover Effects */}
//               <ul className="mt-4 space-y-3">
//                 {exp.points.map((point, idx) => (
//                   <motion.li 
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 + idx * 0.1 }}
//                     className="flex items-start gap-3 group/point"
//                   >
//                     {/* Check Icon with Pulse Effect */}
//                     <div className="relative mt-1">
//                       <FiCheckCircle 
//                         className="transition-all duration-300 group-hover/point:scale-110" 
//                         style={{ color: exp.color }}
//                         size={18}
//                       />
//                       {/* Pulse Animation */}
//                       <div 
//                         className="absolute inset-0 rounded-full opacity-0 group-hover/point:opacity-100 transition-opacity duration-300"
//                         style={{
//                           background: exp.color,
//                           filter: 'blur(6px)',
//                           animation: 'pulse 2s infinite'
//                         }}
//                       />
//                     </div>
                    
//                     {/* Point Text */}
//                     <span className="text-gray-300 transition-all duration-300 group-hover/point:text-white group-hover/point:translate-x-2">
//                       {point}
//                     </span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         {/* Floating Elements on Hover */}
//         <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
//               style={{
//                 background: exp.color,
//                 filter: 'blur(1px)',
//                 top: `${20 + i * 20}%`,
//                 left: `${10 + i * 25}%`,
//               }}
//               animate={{
//                 y: [0, -10, 0],
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{
//                 duration: 2 + i,
//                 repeat: Infinity,
//                 delay: i * 0.5
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   ))}
// </div>



//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
//           >
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               Education
//             </span>
//           </motion.h2>
          
         

// <div className="grid md:grid-cols-2 gap-6">
//   {[
//     {
//       degree: "Bachelor of Computer Applications (BCA)",
//       institution: "Modi Institute of Management & Technology",
//       duration: "2013-2016",
//       percentage: "67%",
//       iconColor: "#0088ff",
//       percentageColor: "#ff0088"
//     },
//     {
//       degree: "Master of Computer Applications (MCA)",
//       institution: "Career Point University",
//       duration: "2016-2018",
//       percentage: "76%",
//       iconColor: "#00ff88",
//       percentageColor: "#ffaa00"
//     }
//   ].map((edu, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       className="group"
//     >
//       <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
//         <div className="flex items-start gap-4">
//           {/* Icon with Hover Effect */}
//           <div 
//             className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
//             style={{ 
//               background: `${edu.iconColor}20`,
//               boxShadow: '0 0 0 transparent'
//             }}
//           >
//             <span 
//               className="text-2xl transition-transform duration-300 group-hover:scale-110"
//               style={{ color: edu.iconColor }}
//             >
//               🎓
//             </span>
//           </div>
          
//           <div className="flex-1">
//             {/* Degree Title */}
//             <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
//               {edu.degree}
//             </h3>
            
//             {/* Institution */}
//             <p className="text-gray-400 mb-1 group-hover:text-gray-300 transition-colors duration-300">
//               🏛️ {edu.institution}
//             </p>
            
//             {/* Duration */}
//             <p className="text-gray-500 text-sm mb-4 group-hover:text-gray-400 transition-colors duration-300">
//               📅 {edu.duration}
//             </p>
            
//             {/* Percentage Badge */}
//             <div className="mt-4">
//               <span 
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
//                 style={{ 
//                   background: `${edu.percentageColor}20`,
//                   color: edu.percentageColor,
//                   border: `1px solid ${edu.percentageColor}30`
//                 }}
//               >
//                 <FiPercent className="group-hover:scale-110 transition-transform duration-300" size={14} />
//                 <span className="font-semibold">{edu.percentage}</span>
//               </span>
//             </div>
            
//             {/* Simple Progress Indicator */}
//             <div className="mt-3">
//               <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full rounded-full transition-all duration-1000"
//                   style={{ 
//                     width: `${parseInt(edu.percentage)}%`,
//                     background: `linear-gradient(90deg, ${edu.percentageColor}, ${edu.percentageColor}80)`
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   ))}
// </div>

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
//               <p className="text-gray-400">Ready to bring your app idea to life?</p>
//             </div>
            
//             <motion.a
//               href="https://www.linkedin.com/in/devank-karanwal-99b05b120/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center gap-2"
//             >
//               <FiLinkedin /> Connect on LinkedIn
//             </motion.a>
//           </div>
          
//           <div className="mt-12 pt-8 border-t border-white/10 text-center">
//             <p className="text-gray-500">
//               © {new Date().getFullYear()} Devank karanwal. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0 }}
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00ff88]/30 z-50"
//           >
//             <FiChevronUp size={24} />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { 
//   FiMenu, 
//   FiX, 
//   FiChevronUp, 
//   FiDownload, 
//   FiExternalLink,
//   FiStar,
//   FiTrendingUp,
//   FiCode,
//   FiSmartphone,
//   FiGlobe,
//   FiLinkedin,
//   FiMessageCircle,
//   FiCheckCircle,
//   FiDollarSign,
//   FiUsers,
//   FiActivity,
//   FiPercent,
//   FiArrowUpRight,
//   FiHome,
//   FiBriefcase,
//   FiBook,
//   FiGithub,
//   FiMail,
//   FiTool,
//   FiServer,
//   FiDatabase,
//   FiCloud,
//   FiZap,
//   FiSun,
//   FiMoon,
//   FiPenTool,
//   FiBarChart2,
//   FiUser,
//   FiGrid
// } from 'react-icons/fi';
// import { 
//   SiPhp, 
//   SiWordpress, 
//   SiShopify, 
//   SiReact, 
//   SiNodedotjs, 
//   SiBootstrap, 
//   SiTailwindcss, 
//   SiMaterialdesign,
//   SiMysql,
//   SiFigma,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiSwift,
//   SiFlutter,
//   SiKotlin,
//   SiFirebase,
//   SiAdobexd,
//   SiAdobephotoshop,
//   SiAdobeillustrator,
//   SiGoogleanalytics,
//   SiSemrush,
//   // SiMoz
// } from 'react-icons/si';

// // ============= COMPONENTS FROM WEB VERSION =============
// // ThreeDChart Component
// const ThreeDChart = () => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const containerRef = useRef(null);
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
//       const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
//       setRotation({ x: x * 10, y: y * 10 });
//     };
    
//     const handleMouseLeave = () => {
//       setRotation({ x: 0, y: 0 });
//     };
    
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('mousemove', handleMouseMove);
//       container.addEventListener('mouseleave', handleMouseLeave);
//     }
    
//     return () => {
//       if (container) {
//         container.removeEventListener('mousemove', handleMouseMove);
//         container.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, []);
  
//   const bars = [
//     { height: 'h-32', color: 'from-[#00ff88] to-[#00cc66]', value: '$24K', label: 'Jan', glow: 'rgba(0, 255, 136, 0.3)' },
//     { height: 'h-24', color: 'from-[#ff0088] to-[#cc0066]', value: '$18K', label: 'Feb', glow: 'rgba(255, 0, 136, 0.3)' },
//     { height: 'h-28', color: 'from-[#0088ff] to-[#0066cc]', value: '$22K', label: 'Mar', glow: 'rgba(0, 136, 255, 0.3)' },
//     { height: 'h-30', color: 'from-[#ffaa00] to-[#cc8800]', value: '$24K', label: 'Apr', glow: 'rgba(255, 170, 0, 0.3)' },
//     { height: 'h-20', color: 'from-[#ff00ff] to-[#cc00cc]', value: '$16K', label: 'May', glow: 'rgba(255, 0, 255, 0.3)' },
//     { height: 'h-26', color: 'from-[#00ffff] to-[#00cccc]', value: '$20K', label: 'Jun', glow: 'rgba(0, 255, 255, 0.3)' },
//   ];
  
//   return (
//     <div 
//       ref={containerRef}
//       className="relative w-full h-full cursor-pointer"
//       style={{
//         transform: `perspective(1000px) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
//       }}
//     >
//       <motion.div 
//         className="absolute inset-0 rounded-3xl"
//         animate={{
//           background: [
//             'radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
//             'radial-gradient(circle at 70% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
//             'radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
//           ]
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
      
//       <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-5">
//         {[...Array(36)].map((_, i) => (
//           <motion.div 
//             key={i} 
//             className="border border-white/10 rounded-lg"
//             animate={{ opacity: [0.3, 0.1, 0.3] }}
//             transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
//           />
//         ))}
//       </div>
      
//       <div className="absolute inset-0 flex items-end justify-around px-4 pb-20">
//         {bars.map((bar, index) => (
//           <motion.div
//             key={index}
//             className="relative group"
//             initial={{ opacity: 0, y: 100, scale: 0.5 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ 
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 100,
//               damping: 15
//             }}
//             style={{ alignSelf: 'flex-end' }}
//             onMouseEnter={() => setHoveredBar(index)}
//             onMouseLeave={() => setHoveredBar(null)}
//           >
//             <motion.div 
//               className="absolute bottom-0 w-8 bg-black/30 rounded-t-lg"
//               style={{ 
//                 height: bar.height,
//                 transform: 'translateZ(-20px)',
//                 filter: 'blur(8px)'
//               }}
//               animate={{
//                 opacity: hoveredBar === index ? 0.5 : 0.2,
//                 scale: hoveredBar === index ? 1.1 : 1,
//               }}
//             />
            
//             <motion.div
//               className={`w-8 ${bar.height} bg-gradient-to-t ${bar.color} rounded-t-lg relative overflow-hidden`}
//               style={{ 
//                 transform: 'translateZ(20px)',
//                 boxShadow: hoveredBar === index 
//                   ? `0 25px 50px ${bar.glow}, 0 0 80px ${bar.glow}`
//                   : '0 10px 30px rgba(0, 0, 0, 0.3)'
//               }}
//               whileHover={{ scale: 1.15 }}
//               animate={hoveredBar === index ? { scale: 1.05 } : { scale: 1 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 15 }}
//             >
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
//                 animate={{
//                   y: ['-100%', '200%'],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: index * 0.3,
//                   ease: "linear"
//                 }}
//               />
              
//               <div 
//                 className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-white/40 to-transparent rounded-t-lg"
//                 style={{ transform: 'translateZ(5px)' }}
//               />
//             </motion.div>
            
//             <AnimatePresence>
//               {hoveredBar === index && (
//                 <motion.div 
//                   className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold bg-black/80 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10"
//                   style={{ transform: 'translateZ(30px)' }}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                 >
//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${bar.color}`} />
//                     {bar.value}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
            
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
//               {bar.label}
//             </div>
//           </motion.div>
//         ))}
//       </div>
      
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
//           style={{
//             left: `${10 + i * 7}%`,
//             top: `${20 + Math.sin(i) * 30}%`,
//             transform: 'translateZ(40px)'
//           }}
//           animate={{
//             y: [0, -40, 0],
//             x: [0, Math.sin(i) * 20, 0],
//             opacity: [0.3, 1, 0.3]
//           }}
//           transition={{
//             duration: 3 + Math.random(),
//             repeat: Infinity,
//             delay: i * 0.2,
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // FloatingCard3D Component
// const FloatingCard3D = ({ children, color, delay = 0, aiEffect = false, className = "" }) => {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef(null);
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!cardRef.current) return;
//       const rect = cardRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
//       const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
//       setMouse({ x, y });
//     };
    
//     const handleMouseLeave = () => {
//       setMouse({ x: 0, y: 0 });
//     };
    
//     const card = cardRef.current;
//     if (card) {
//       card.addEventListener('mousemove', handleMouseMove);
//       card.addEventListener('mouseleave', handleMouseLeave);
//     }
    
//     return () => {
//       if (card) {
//         card.removeEventListener('mousemove', handleMouseMove);
//         card.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, []);
  
//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.9 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ 
//         delay, 
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }}
//       className={`relative ${className}`}
//       style={{
//         transform: `perspective(1000px) 
//                    rotateX(${mouse.y * 5}deg) 
//                    rotateY(${mouse.x * 5}deg)
//                    translateZ(${isHovered ? '20px' : '0px'})`,
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.1s ease-out'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {aiEffect && (
//         <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 x: [0, Math.sin(i) * 30],
//                 y: [0, Math.cos(i) * 30],
//                 scale: [1, 1.5, 1],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: i * 0.3,
//                 ease: "easeInOut"
//               }}
//             />
//           ))}
//         </div>
//       )}
      
//       <div className="relative z-10 h-full">
//         {children}
//       </div>
      
//       <div 
//         className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
//         style={{
//           background: `linear-gradient(135deg, ${color}40, transparent 70%)`,
//           transform: 'translateZ(-20px)',
//           filter: 'blur(20px)'
//         }}
//       />
      
//       <motion.div
//         className="absolute inset-0 rounded-3xl pointer-events-none"
//         style={{
//           background: `radial-gradient(circle at ${mouse.x * 100 + 50}% ${mouse.y * 100 + 50}%, ${color}30, transparent 70%)`,
//           transform: 'translateZ(-30px)'
//         }}
//         animate={{
//           opacity: isHovered ? 0.4 : 0,
//           scale: isHovered ? 1.1 : 1
//         }}
//         transition={{ duration: 0.3 }}
//       />
      
//       <motion.div
//         className="absolute -bottom-4 left-0 right-0 h-8 rounded-3xl pointer-events-none"
//         style={{
//           background: `linear-gradient(to top, ${color}15, transparent)`,
//           filter: 'blur(10px)',
//           transform: 'translateZ(-40px) scale(0.95)',
//           opacity: isHovered ? 0.5 : 0
//         }}
//       />
//     </motion.div>
//   );
// };

// // AnimatedCounter Component
// const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2 }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let start = 0;
//     const end = typeof value === 'string' ? parseFloat(value) : value;
    
//     const increment = end / (duration * 60);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 1000 / 60);
    
//     return () => clearInterval(timer);
//   }, [value, duration]);
  
//   const displayValue = count >= 1000 ? `${(count/1000).toFixed(1)}k` : count.toFixed(count % 1 === 0 ? 0 : 1);
  
//   return (
//     <span className="inline-block relative">
//       {prefix}{displayValue}{suffix}
//       <motion.span
//         className="absolute -top-2 -right-2 text-xs"
//         animate={{ scale: [1, 1.5, 1] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         ✨
//       </motion.span>
//     </span>
//   );
// };

// // AnimatedBackground Component
// const AnimatedBackground = () => {
//   const { scrollYProgress } = useScroll();
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//       <motion.div 
//         className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff88]/10 rounded-full blur-3xl"
//         style={{ y: backgroundY }}
//       />
//       <motion.div 
//         className="absolute top-1/3 -left-40 w-80 h-80 bg-[#0088ff]/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }}
//       />
//       <motion.div 
//         className="absolute bottom-40 right-1/3 w-60 h-60 bg-[#ff0088]/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-50%']) }}
//       />
      
//       <div className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//         }}
//       />
      
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full blur-xl"
//           style={{
//             width: `${100 + i * 20}px`,
//             height: `${100 + i * 20}px`,
//             background: `radial-gradient(circle at center, 
//               rgba(${i % 3 === 0 ? '0,255,136' : i % 3 === 1 ? '0,136,255' : '255,0,136'}, ${0.05 + i * 0.01}), 
//               transparent 70%)`,
//             left: `${10 + i * 12}%`,
//             top: `${10 + (i % 4) * 25}%`,
//           }}
//           animate={{
//             y: [0, Math.sin(i) * 50, 0],
//             x: [0, Math.cos(i) * 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 10 + i * 2,
//             repeat: Infinity,
//             delay: i * 0.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // ============= SIDE MENU COMPONENT =============
// const SideMenu = ({ activeSection, setActiveSection }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [hoveredItem, setHoveredItem] = useState(null);
  
//   const menuItems = [
//     { id: 'web', name: 'Web Development', icon: FiCode, color: '#00ff88' },
//     { id: 'app', name: 'App Development', icon: FiSmartphone, color: '#0088ff' },
//     { id: 'uiux', name: 'UI/UX Graphics Design', icon: FiPenTool, color: '#ff0088' },
//     { id: 'seo', name: 'SEO Digital Marketing', icon: FiBarChart2, color: '#ffaa00' },
//     { id: 'about', name: 'About Dart Technology', icon: FiUser, color: '#a855f7' },
//   ];
  
//   return (
//     <>
//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-24 left-4 z-50 md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-xl"
//       >
//         <FiGrid size={20} />
//       </button>
      
//       {/* Side Menu */}
//       <motion.div
//         initial={{ x: -300 }}
//         animate={{ x: isOpen ? 0 : -300 }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         className="fixed top-0 left-0 h-full w-72 z-40 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl border-r border-white/10 shadow-2xl overflow-hidden"
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.3, 1, 0.3]
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: i * 0.2
//               }}
//             />
//           ))}
//         </div>
        
//         <div className="relative z-10 p-6 h-full flex flex-col">
//           {/* Logo/Header */}
//           <motion.div 
//             className="mb-8 text-center"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="w-20 h-20 mx-auto mb-4 relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-2xl blur-xl opacity-50" />
//               <div className="relative w-full h-full bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl font-bold text-white">DT</span>
//               </div>
//             </div>
//             <h2 className="text-xl font-bold text-white">Dart Technology</h2>
//             <p className="text-gray-400 text-sm mt-1">Devank karanwal</p>
//           </motion.div>
          
//           {/* Menu Items */}
//           <div className="flex-1 space-y-2">
//             {menuItems.map((item, index) => (
//               <motion.button
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//                 onClick={() => setActiveSection(item.id)}
//                 onMouseEnter={() => setHoveredItem(item.id)}
//                 onMouseLeave={() => setHoveredItem(null)}
//                 className={`w-full relative overflow-hidden group`}
//               >
//                 <div className={`
//                   relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
//                   ${activeSection === item.id 
//                     ? 'bg-gradient-to-r from-white/10 to-white/5 border border-white/20' 
//                     : 'hover:bg-white/5'
//                   }
//                 `}>
//                   {/* Active Indicator */}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeMenu"
//                       className="absolute left-0 w-1 h-8 rounded-r-full"
//                       style={{ background: item.color }}
//                     />
//                   )}
                  
//                   {/* Icon */}
//                   <div 
//                     className="relative"
//                     style={{ color: activeSection === item.id ? item.color : '#9ca3af' }}
//                   >
//                     <item.icon size={20} />
//                     {hoveredItem === item.id && (
//                       <motion.div
//                         className="absolute inset-0 rounded-full"
//                         style={{
//                           background: `radial-gradient(circle at center, ${item.color}40, transparent 70%)`,
//                           filter: 'blur(8px)'
//                         }}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 2 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </div>
                  
//                   {/* Name */}
//                   <span className={`flex-1 text-left font-medium transition-colors duration-300
//                     ${activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
//                     {item.name}
//                   </span>
                  
//                   {/* Hover Effect */}
//                   <motion.div
//                     className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     style={{
//                       background: `linear-gradient(90deg, transparent, ${item.color}10, transparent)`,
//                     }}
//                   />
//                 </div>
//               </motion.button>
//             ))}
//           </div>
          
//           {/* Footer */}
//           <motion.div 
//             className="mt-8 pt-6 border-t border-white/10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
//               <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
//               <span className="text-sm text-gray-400">Available for work</span>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
      
//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// // ============= SECTION COMPONENTS =============

// // Web Development Section
// const WebDevelopmentSection = () => {
//   const webProjects = [
//     {
//       title: "Gymshark",
//       description: "High-performance fitness apparel e-commerce platform",
//       stats: "10M+ Visitors",
//       color: "#00ff88",
//       icon: "💪",
//       tags: ["E-commerce", "Fitness", "React"],
//       url: "https://www.gymshark.com",
//       features: ["Shopping Cart", "Product Filters", "User Accounts"]
//     },
//     {
//       title: "Allbirds",
//       description: "Sustainable footwear and apparel e-commerce store",
//       stats: "5M+ Customers",
//       color: "#ff0088",
//       icon: "👟",
//       tags: ["Sustainable", "E-commerce", "Shopify"],
//       url: "https://www.allbirds.com",
//       features: ["Eco-friendly", "Size Guide", "Product Reviews"]
//     },
//     {
//       title: "Kylie Cosmetics",
//       description: "Beauty and cosmetics e-commerce platform",
//       stats: "8M+ Products Sold",
//       color: "#0088ff",
//       icon: "💄",
//       tags: ["Beauty", "E-commerce", "React"],
//       url: "https://kyliecosmetics.com/en-in",
//       features: ["Product Gallery", "Wishlist", "Checkout"]
//     },
//     {
//       title: "Kith",
//       description: "Premium streetwear and lifestyle brand",
//       stats: "Exclusive Drops",
//       color: "#ffaa00",
//       icon: "👕",
//       tags: ["Streetwear", "Fashion", "WordPress"],
//       url: "https://kith.com",
//       features: ["Limited Editions", "Size Selection", "Fast Checkout"]
//     },
//     {
//       title: "Morphe",
//       description: "Professional makeup and beauty products",
//       stats: "Global Shipping",
//       color: "#ff00ff",
//       icon: "🎨",
//       tags: ["Makeup", "Beauty", "E-commerce"],
//       url: "https://www.morphe.com",
//       features: ["Product Videos", "Tutorials", "Bundles"]
//     }
//   ];

//   const webSkills = [
//     { skill: "PHP Development", level: 95, icon: SiPhp, color: "#777BB4", description: "Core PHP, MySQL, Dynamic Websites" },
//     { skill: "WordPress", level: 90, icon: SiWordpress, color: "#21759B", description: "Themes, Plugins, Custom Development" },
//     { skill: "Shopify", level: 85, icon: SiShopify, color: "#7AB55C", description: "E-commerce Stores, Custom Themes" },
//     { skill: "React JS", level: 88, icon: SiReact, color: "#61DAFB", description: "Frontend Development, Components" },
//     { skill: "Node.js", level: 82, icon: SiNodedotjs, color: "#339933", description: "Backend APIs, Server-side" },
//     { skill: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS Framework" },
//     { skill: "MySQL", level: 88, icon: SiMysql, color: "#4479A1", description: "Database Design & Management" }
//   ];

//   return (
//     <section id="web" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               Web Development
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl">
//             Expert in creating dynamic, responsive websites with cutting-edge technologies. 
//             Specializing in PHP, WordPress, and modern JavaScript frameworks.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {webSkills.map((skill, index) => (
//             <FloatingCard3D key={index} color={skill.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${skill.color}20` }}>
//                     <skill.icon className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-white">{skill.skill}</h3>
//                     <p className="text-gray-400 text-sm">{skill.description}</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-400">Proficiency</span>
//                     <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.5 }}
//                       className="h-full rounded-full"
//                       style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>

//         {/* Projects */}
//         <h2 className="text-3xl font-bold text-white mb-8">Featured Web Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {webProjects.map((project, index) => (
//             <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="text-4xl mb-4">{project.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, idx) => (
//                     <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <a href={project.url} target="_blank" rel="noopener noreferrer" 
//                    className="inline-flex items-center gap-2 text-sm" style={{ color: project.color }}>
//                   <FiExternalLink /> Visit Website
//                 </a>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // App Development Section
// const AppDevelopmentSection = () => {
//   const appProjects = [
    
  
//   {
//     title: "تكويد",
//     description: "Tracks farm locations, verifies export-area cultivation, ensures crop quality, sponsored by Egypt’s Agricultural Export Council.",
//     stats: "100+ installs",
//     color: "#00ff88",
//     icon: "🌾 🚜",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.takweed.app"
//   },
//   {
//     title: "قمحاوي",
//     description: "Empowers farmers with smart tools for crop health, disease detection, weather insights, and marketplace access.",
//     stats: "50K+ installs",
//     color: "#ff0088",
//     icon: "🤖 🚜",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.qamhawy.app&hl=en"
//   },
//   {
//     title: "Yapsody QuickScan",
//     description: "QuickScan efficiently manages event ticket scanning, attendee info, refunds, and multiple venue entries seamlessly",
//     stats: "100+ Downloads",
//     color: "#0088ff",
//     icon: "📲",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.quickscan&hl=en"
//   },
//   {
//     title: "Yapsody YapStats",
//     description: "YapStats tracks events, provides support, enables past event access, and simplifies presenter management efficiently",
//     stats: "1K+ Downloads",
//     color: "red",
//     icon: "📊",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yapstats&hl=en"
//   },

//     {
//     title: "Yapsody YapTickets",
//     description: "YapTickets simplifies ticket access, redemption, and transfers, ensuring fast, seamless entry to any event",
//     stats: "10K+ Downloads",
//     color: "red",
//     icon: "🎫",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yaptix&hl=en"
//   },



//     {
//     title: "Yatri Sathi",
//     description: "Yatri Sathi offers reliable ride-hailing in Kolkata, connecting millions of users with trusted local drivers",
//     stats: "1M+ Downloads",
//     color: "#ffaa00",
//     icon: "🚖",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=in.juspay.jatrisaathi&hl=en"
//   },



//       {
//     title: "Hido - Video Calls & Friends",
//     description: "Hido enables meaningful conversations, connecting people through text and video for genuine emotional connections",
//     stats: "10K+ Downloads",
//     color: "purple",
//     icon: "💬",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.hi.hido&hl=en"
//   },



//       {
//     title: "CoinClash",
//     description: "CoinClash rewards knowledge by letting users play quizzes, watch ads, and earn real money easily",
//     stats: "100+ Downloads",
//     color: "green",
//     icon: "🪙",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.coinclash&hl=en"
//   },



//       {
//     title: "Chatter Social",
//     description: "Chatter enables real-time group conversations, viral moments, and community-driven content for creators and users",
//     stats: "10K+ Downloads",
//     color: "brown",
//     icon: "👥 💬",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en"
//   },


//      {
//     title: "GeoBuddy- The Learning App",
//     description: "Our app offers comprehensive, uninterrupted learning from home with interactive features for students nationwide",
//     stats: "1K+ Downloads",
//     color: "gold",
//     icon: "📚",
//     playStoreUrl: "https://play.google.com/store/apps/details?id=co.iron.jpiyu&hl=en"
//   },

//   ];

//   const appSkills = [
//     { skill: "React Native", level: 92, icon: SiReact, color: "#61DAFB", description: "Cross-platform development" },
//     { skill: "Swift/iOS", level: 88, icon: SiSwift, color: "#FA7343", description: "Native iOS development" },
//     { skill: "Flutter", level: 85, icon: SiFlutter, color: "#02569B", description: "Cross-platform UI toolkit" },
//     { skill: "Kotlin", level: 80, icon: SiKotlin, color: "#7F52FF", description: "Android development" },
//     { skill: "Firebase", level: 90, icon: SiFirebase, color: "#FFCA28", description: "Backend & real-time database" },
//      { skill: "Supabase", level: 90, icon: SiFirebase, color: "#FFC0CB", description: "Backend & real-time database" }
//   ];

//   return (
//     <section id="app" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               App Development
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl">
//             Crafting exceptional mobile experiences with React Native, Swift, and Flutter. 
//             8+ years of experience building scalable applications that users love.
//           </p>
//         </motion.div>

//         {/* App Skills */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {appSkills.map((skill, index) => (
//             <FloatingCard3D key={index} color={skill.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${skill.color}20` }}>
//                     <skill.icon className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-white">{skill.skill}</h3>
//                     <p className="text-gray-400 text-sm">{skill.description}</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-400">Proficiency</span>
//                     <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.5 }}
//                       className="h-full rounded-full"
//                       style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>

//         {/* App Projects */}
//         <h2 className="text-3xl font-bold text-white mb-8">Featured Mobile Apps</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {appProjects.map((project, index) => (
//             <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex items-start justify-between mb-4">
//                   <span className="text-4xl">{project.icon}</span>
//                   <span className="px-3 py-1 rounded-full text-xs" style={{ background: `${project.color}20`, color: project.color }}>
//                     {project.stats}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" 
//                    className="inline-flex items-center gap-2 text-sm" style={{ color: project.color }}>
//                   <FiExternalLink /> View on Play Store
//                 </a>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // UI/UX Graphics Design Section
// const UIUXSection = () => {
//   const uiuxSkills = [
//     { skill: "Figma", level: 95, icon: SiFigma, color: "#F24E1E", description: "UI/UX Design, Prototyping" },
//     { skill: "Adobe XD", level: 90, icon: SiAdobexd, color: "#FF61F6", description: "Wireframing, Interactive Design" },
//     { skill: "Photoshop", level: 88, icon: SiAdobephotoshop, color: "#31A8FF", description: "Graphics, Image Editing" },
//     { skill: "Illustrator", level: 85, icon: SiAdobeillustrator, color: "#FF9A00", description: "Vector Graphics, Icons" },
//   ];

//   const uiuxProjects = [
//     {
//       title: "E-commerce App Design",
//       description: "Complete UI/UX design for a modern shopping app with intuitive navigation",
//       tools: ["Figma", "Adobe XD"],
//       color: "#00ff88",
//       icon: "🛍️"
//     },
//     {
//       title: "Dashboard Analytics",
//       description: "Complex data visualization dashboard with clean, modern interface",
//       tools: ["Figma", "Illustrator"],
//       color: "#0088ff",
//       icon: "📊"
//     },
//     {
//       title: "Mobile Banking App",
//       description: "Secure and user-friendly banking application interface",
//       tools: ["Adobe XD", "Photoshop"],
//       color: "#ff0088",
//       icon: "🏦"
//     }
//   ];

//   return (
//     <section id="uiux" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               UI/UX Graphics Design
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl">
//             Creating beautiful, intuitive interfaces that users love. Specializing in modern design tools
//             and user-centered design principles.
//           </p>
//         </motion.div>

//         {/* UI/UX Skills */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {uiuxSkills.map((skill, index) => (
//             <FloatingCard3D key={index} color={skill.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: `${skill.color}20` }}>
//                     <skill.icon className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-lg font-bold text-white mb-2">{skill.skill}</h3>
//                   <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
//                   <div className="w-full">
//                     <div className="flex justify-between text-sm mb-1">
//                       <span className="text-gray-400">Proficiency</span>
//                       <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
//                     </div>
//                     <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1.5 }}
//                         className="h-full rounded-full"
//                         style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>

//         {/* UI/UX Projects */}
//         <h2 className="text-3xl font-bold text-white mb-8">Design Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {uiuxProjects.map((project, index) => (
//             <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="text-4xl mb-4">{project.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tools.map((tool, idx) => (
//                     <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300">
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // SEO Digital Marketing Section
// const SEOSection = () => {
//   const seoServices = [
//     { name: "SEO Optimization", level: 92, icon: FiTrendingUp, color: "#00ff88", description: "On-page & Off-page SEO" },
//     { name: "Google Analytics", level: 88, icon: SiGoogleanalytics, color: "#E37400", description: "Data Analysis & Reporting" },
//     { name: "SEMrush", level: 85, icon: SiSemrush, color: "#FF642D", description: "Keyword Research & Competition" },
//     // { name: "Moz Pro", level: 82, icon: SiMoz, color: "#000000", description: "SEO Tools & Insights" },
//   ];

//   const seoProjects = [
//     {
//       title: "E-commerce SEO Strategy",
//       description: "Increased organic traffic by 150% for an online store through comprehensive SEO strategy",
//       results: "150% Traffic Growth",
//       color: "#00ff88"
//     },
//     {
//       title: "Local Business Optimization",
//       description: "Ranked #1 for 20+ local keywords for a service business",
//       results: "#1 Rankings",
//       color: "#0088ff"
//     },
//     {
//       title: "Content Marketing Campaign",
//       description: "Generated 50K+ monthly visitors through content optimization",
//       results: "50K+ Monthly Visitors",
//       color: "#ff0088"
//     }
//   ];

//   return (
//     <section id="seo" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               SEO Digital Marketing
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl">
//             Driving organic growth through data-driven SEO strategies and digital marketing campaigns.
//             Proven track record of improving rankings and increasing traffic.
//           </p>
//         </motion.div>

//         {/* SEO Services */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {seoServices.map((service, index) => (
//             <FloatingCard3D key={index} color={service.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: `${service.color}20` }}>
//                     <service.icon className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
//                   <p className="text-gray-400 text-sm mb-4">{service.description}</p>
//                   <div className="w-full">
//                     <div className="flex justify-between text-sm mb-1">
//                       <span className="text-gray-400">Expertise</span>
//                       <span className="font-bold" style={{ color: service.color }}>{service.level}%</span>
//                     </div>
//                     <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${service.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1.5 }}
//                         className="h-full rounded-full"
//                         style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}80)` }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>

//         {/* SEO Success Stories */}
//         <h2 className="text-3xl font-bold text-white mb-8">Success Stories</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {seoProjects.map((project, index) => (
//             <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
//               <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                   <FiBarChart2 className="text-2xl" style={{ color: project.color }} />
//                 </div>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="mt-4 p-3 rounded-xl" style={{ background: `${project.color}10` }}>
//                   <p className="text-sm" style={{ color: project.color }}>Results: {project.results}</p>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // About Section (Dart Technology / Hukam Singh)
// const AboutSection = () => {
//   const experiences = [

//     {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "App Cake",
//     duration: "March 2024 - Present",
//     location: "Remote",
//     points: [
//       "Led team of 10 developers",
//       "Enhanced system response by 80%",
//       "Delivered 10+ major projects"
//     ],
//     color: "#22c55e" // green (keep as is)
//   },
//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "Avi Software",
//     duration: "July 2023 - Dec 2023",
//     location: "Mumbai",
//     points: [
//       "Contract base of 6 month",
//       "Enhanced system response by 85%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#3b82f6" // blue (keep as is)
//   },

//   {
//     title: "Senior Software Engineer Flutter and IOS",
//     company: "ConsCent",
//     duration: "May 2022 - July 2023",
//     location: "Delhi",
//     points: [
//       "Flutter",
//       "Enhanced system response by 80%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#ef4444" // pink
//   },

//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "Floweret™ - India's Online Nursery",
//     duration: "July 2021 - May 2022",
//     location: "Noida",
//     points: [
//       "Senior Developer Native iOS",
//       "Enhanced system response by 70%",
//       "Delivered 3+ major projects"
//     ],
//     color: "#f472b6" // rose pink
//   },

//   {
//     title: "Senior Software Engineer React Native and IOS",
//     company: "QuickNet Solution",
//     duration: "July 2020 - July 2021",
//     location: "Noida",
//     points: [
//       "Senior Developer Native iOS",
//       "Enhanced system response by 70%",
//       "Delivered 4+ major projects"
//     ],
//     color: "#c084fc" // neon pink
//   },

//   {
//     title: "Junior Software Engineer React Native and IOS",
//     company: "Pan India Internet Pvt Ltd",
//     duration: "July 2019 - July 2020",
//     location: "Kota",
//     points: [
//       "Junior Developer Native iOS",
//       "Enhanced system response by 60%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#facc15" // soft pink
//   },

//   {
//     title: "Junior Software Engineer React Native and IOS",
//     company: "Technogogues IT Solutions Pvt. Ltd",
//     duration: "Oct 2018 - July 2019",
//     location: "Kota",
//     points: [
//       "Junior Developer Native iOS",
//       "Enhanced system response by 60%",
//       "Delivered 2+ major projects"
//     ],
//     color: "#991b1b" // deep rose
//   }
//   ];

//   return (
//     <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
//               About Dart Technology
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl">
//             Hi, I'm <span className="text-[#00ff88] font-semibold">Devank karanwal</span>, Co-founder of Dart Technology. 
//             With over 8 years of experience in web and app development, I help businesses create 
//             powerful digital solutions that drive growth and engagement.
//           </p>
//         </motion.div>

//         {/* Profile Overview */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           <FloatingCard3D color="#00ff88">
//             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-[#00ff88] to-[#0088ff] flex items-center justify-center">
//                   <span className="text-4xl font-bold text-white">DK</span>
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-2">Devank karanwal</h2>
//                   <p className="text-gray-400">Full Stack App & Web Developer & Founder @ Dart Technology</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
//                     <FiMail className="text-[#00ff88]" />
//                   </div>
//                   <span className="text-gray-300">devankkaranwal@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
//                     <FiLinkedin className="text-[#0088ff]" />
//                   </div>
//                   <a href="https://www.linkedin.com/in/devank-karanwal-99b05b120/" target="_blank" rel="noopener noreferrer" 
//                      className="text-gray-300 hover:text-[#0088ff] transition-colors">
//                     linkedin.com/in/devank-karanwal
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </FloatingCard3D>

//           <FloatingCard3D color="#0088ff">
//             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10">
//               <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 {[
//                   { label: "Years Experience", value: "8+" },
//                   { label: "Projects Completed", value: "200+" },
//                   { label: "Happy Clients", value: "150+" },
//                   { label: "Success Rate", value: "95%" }
//                 ].map((stat, idx) => (
//                   <div key={idx} className="text-center">
//                     <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
//                     <div className="text-gray-400 text-sm">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </FloatingCard3D>
//         </div>

//         {/* Experience Timeline */}
//         <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
//         <div className="space-y-6 mb-16">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="group"
//             >
//               <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10">
//                 <div className="flex flex-col md:flex-row md:items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${exp.color}20` }}>
//                     <FiBriefcase style={{ color: exp.color }} size={24} />
//                   </div>
                  
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
//                     <p className="text-gray-400 mb-2">{exp.company}</p>
//                     <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                    
//                     <ul className="space-y-2">
//                       {exp.points.map((point, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-gray-300">
//                           <FiCheckCircle style={{ color: exp.color }} className="mt-1 flex-shrink-0" />
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Education */}
//         <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             { degree: "MCA", institution: "Career Point University", duration: "2016-2018", percentage: "76%" },
//             { degree: "BCA", institution: "Modi Institute of Management & Technology", duration: "2013-2016", percentage: "67%" }
//           ].map((edu, index) => (
//             <FloatingCard3D key={index} color={index === 0 ? "#00ff88" : "#0088ff"}>
//               <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10">
//                 <div className="flex items-start gap-4">
//                   <span className="text-3xl">🎓</span>
//                   <div>
//                     <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
//                     <p className="text-gray-400 mb-1">{edu.institution}</p>
//                     <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
//                     <span className="inline-block px-3 py-1 rounded-full text-sm" style={{ 
//                       background: `${index === 0 ? '#00ff8820' : '#0088ff20'}`,
//                       color: index === 0 ? '#00ff88' : '#0088ff'
//                     }}>
//                       {edu.percentage}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



//   {/* Experience Section */}
// //       <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
// //           >
// //             <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
// //               Work Experience
// //             </span>
// //           </motion.h2>
          
       

// // <div className="space-y-8">
// //   {
  
// // [
// //   {
// //     title: "Senior Software Engineer React Native and IOS",
// //     company: "App Cake",
// //     duration: "March 2024 - Present",
// //     location: "Remote",
// //     points: [
// //       "Led team of 10 developers",
// //       "Enhanced system response by 80%",
// //       "Delivered 10+ major projects"
// //     ],
// //     color: "#22c55e" // green (keep as is)
// //   },
// //   {
// //     title: "Senior Software Engineer React Native and IOS",
// //     company: "Avi Software",
// //     duration: "July 2023 - Dec 2023",
// //     location: "Mumbai",
// //     points: [
// //       "Contract base of 6 month",
// //       "Enhanced system response by 85%",
// //       "Delivered 2+ major projects"
// //     ],
// //     color: "#3b82f6" // blue (keep as is)
// //   },

// //   {
// //     title: "Junior Software Engineer Flutter and IOS",
// //     company: "ConsCent",
// //     duration: "May 2022 - July 2023",
// //     location: "Delhi",
// //     points: [
// //       "Junior Developer Flutter",
// //       "Enhanced system response by 80%",
// //       "Delivered 2+ major projects"
// //     ],
// //     color: "#ef4444" // pink
// //   },

// //   {
// //     title: "Senior Software Engineer React Native and IOS",
// //     company: "Floweret™ - India's Online Nursery",
// //     duration: "July 2021 - May 2022",
// //     location: "Noida",
// //     points: [
// //       "Senior Developer Native iOS",
// //       "Enhanced system response by 70%",
// //       "Delivered 3+ major projects"
// //     ],
// //     color: "#f472b6" // rose pink
// //   },

// //   {
// //     title: "Junior Software Engineer React Native and IOS",
// //     company: "QuickNet Solution",
// //     duration: "July 2020 - July 2021",
// //     location: "Noida",
// //     points: [
// //       "Junior Developer Native iOS",
// //       "Enhanced system response by 70%",
// //       "Delivered 4+ major projects"
// //     ],
// //     color: "#c084fc" // neon pink
// //   },

// //   {
// //     title: "Junior Software Engineer React Native and IOS",
// //     company: "Pan India Internet Pvt Ltd",
// //     duration: "July 2019 - July 2020",
// //     location: "Kota",
// //     points: [
// //       "Junior Developer Native iOS",
// //       "Enhanced system response by 60%",
// //       "Delivered 2+ major projects"
// //     ],
// //     color: "#facc15" // soft pink
// //   },

// //   {
// //     title: "Junior Software Engineer React Native and IOS",
// //     company: "Technogogues IT Solutions Pvt. Ltd",
// //     duration: "Oct 2018 - July 2019",
// //     location: "Kota",
// //     points: [
// //       "Junior Developer Native iOS",
// //       "Enhanced system response by 60%",
// //       "Delivered 2+ major projects"
// //     ],
// //     color: "#991b1b" // deep rose
// //   }
// // ]

// // Main App Component
// const App = () => {
//   const [activeSection, setActiveSection] = useState('web');
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [stats] = useState({
//     mrr: 24000,
//     revenue: 18000,
//     activeSubscriptions: 156,
//     growthRate: 24.5
//   });
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderSection = () => {
//     switch(activeSection) {
//       case 'web': return <WebDevelopmentSection />;
//       case 'app': return <AppDevelopmentSection />;
//       case 'uiux': return <UIUXSection />;
//       case 'seo': return <SEOSection />;
//       case 'about': return <AboutSection />;
//       default: return <WebDevelopmentSection />;
//     }
//   };

//   return (
//     <div className="relative bg-[#0A0A0A] min-h-screen overflow-hidden">
//       <AnimatedBackground />
      
//       <SideMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      
//       <main className="relative z-10">
//         {renderSection()}
//       </main>

//       {/* Scroll to Top Button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 z-50"
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0 }}
//           >
//             <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-xl">
//               <FiChevronUp />
//             </div>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* Footer */}
//       <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 ml-0 md:ml-72 bg-gradient-to-b from-black to-[#0A0A0A]">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
//               <p className="text-gray-400">Ready to bring your project to life?</p>
//             </div>
            
//             <a
//               href="https://www.linkedin.com/in/devank-karanwal-99b05b120/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center gap-2"
//             >
//               <FiLinkedin /> Connect on LinkedIn
//             </a>
//           </div>
          
//           <div className="mt-12 pt-8 border-t border-white/10 text-center">
//             <p className="text-gray-500">
//               © {new Date().getFullYear()} Dart Technology. All rights reserved. | Devank karanwal
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;





















import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiChevronUp,
  FiExternalLink,
  FiStar,
  FiTrendingUp,
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiBriefcase,
  FiCheckCircle,
  FiZap,
  FiUser,
  FiGrid,
  FiPenTool,
  FiBarChart2,
  FiServer,
  FiDatabase,
  FiShield,
  FiLayers,
  FiMessageCircle,
  FiPhoneCall,
  FiMonitor,
  FiArrowUpRight
} from 'react-icons/fi';
import {
  SiPhp,
  SiWordpress,
  SiShopify,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiFigma,
  SiSwift,
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGoogleanalytics,
  SiSemrush,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSocketdotio,
  SiCloudinary
} from 'react-icons/si';

// ================= CONFIG =================
const COMPANY = {
  name: 'Dart Technology',
  founder: 'Devank Karanwal',
  email: 'devankkaranwal@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devank-karanwal-99b05b120/',
  whatsapp: 'https://wa.me/919001234567'
};

const SectionHeader = ({ badge, title, subtitle, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''}`}
  >
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00ff88] text-sm font-semibold mb-5">
        <FiZap /> {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
      <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    {subtitle && (
      <p className={`text-gray-400 text-lg leading-8 ${align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-4xl'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

// ================= 3D CARD =================
const FloatingCard3D = ({ children, color = '#00ff88', delay = 0, aiEffect = false, className = '' }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };

    const handleMouseLeave = () => setMouse({ x: 0, y: 0 });
    const card = cardRef.current;

    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.55, type: 'spring', stiffness: 100, damping: 16 }}
      className={`relative ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${mouse.y * 5}deg) rotateY(${mouse.x * 5}deg) translateZ(${isHovered ? '18px' : '0px'})`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.12s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {aiEffect && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ x: [0, Math.sin(i) * 30, 0], y: [0, Math.cos(i) * 30, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 h-full">{children}</div>

      <div
        className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color}35, transparent 70%)`,
          transform: 'translateZ(-20px)',
          filter: 'blur(20px)'
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouse.x * 100 + 50}% ${mouse.y * 100 + 50}%, ${color}30, transparent 70%)`,
          transform: 'translateZ(-30px)'
        }}
        animate={{ opacity: isHovered ? 0.45 : 0, scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// ================= BACKGROUND =================
const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#0A0A0A]">
      <motion.div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" style={{ y: backgroundY }} />
      <motion.div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#0088ff]/10 rounded-full blur-3xl" style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }} />
      <motion.div className="absolute bottom-40 right-1/3 w-80 h-80 bg-[#ff0088]/10 rounded-full blur-3xl" style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-50%']) }} />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '56px 56px'
        }}
      />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${90 + i * 22}px`,
            height: `${90 + i * 22}px`,
            background: `radial-gradient(circle at center, rgba(${i % 3 === 0 ? '0,255,136' : i % 3 === 1 ? '0,136,255' : '255,0,136'}, ${0.04 + i * 0.006}), transparent 70%)`,
            left: `${8 + i * 10}%`,
            top: `${10 + (i % 5) * 19}%`
          }}
          animate={{ y: [0, Math.sin(i) * 55, 0], x: [0, Math.cos(i) * 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 10 + i * 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  );
};





// ================= SIDE MENU =================
const SideMenu = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'home', name: 'Home', icon: FiGrid, color: '#00ff88' },
    { id: 'build', name: 'What We Build', icon: FiLayers, color: '#0088ff' },
    { id: 'case-studies', name: 'Case Studies', icon: FiBriefcase, color: '#ff0088' },
    { id: 'web', name: 'Web Development', icon: FiCode, color: '#00ff88' },
    { id: 'app', name: 'App Development', icon: FiSmartphone, color: '#0088ff' },
    { id: 'uiux', name: 'UI/UX Design', icon: FiPenTool, color: '#ff0088' },
    { id: 'seo', name: 'SEO & Marketing', icon: FiBarChart2, color: '#ffaa00' },
    { id: 'reviews', name: 'Reviews', icon: FiStar, color: '#facc15' },
    // { id: 'about', name: 'About Dart', icon: FiUser, color: '#a855f7' }
  ];

  // const handleClick = (id) => {
  //   setActiveSection(id);
  //   if (window.innerWidth < 768) setIsOpen(false);
  // };

const handleClick = (id) => {
  setActiveSection(id);

  const element = document.getElementById(id);

  if (element) {
    const offset = 20;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;

    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  if (window.innerWidth < 768) {
    setIsOpen(false);
  }
};

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-4 z-50 md:hidden bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white p-3 rounded-full shadow-xl"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-72 z-40 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl border-r border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          <motion.div className="mb-8 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-2xl blur-xl opacity-50" />
              <div className="relative w-full h-full bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-black text-white">DT</span>
              </div>
            </div>
            <h2 className="text-xl font-black text-white">Dart Technology</h2>
            <p className="text-gray-400 text-sm mt-1">AI Systems & Software</p>
          </motion.div>

          <div className="flex-1 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.05 }}
                onClick={() => handleClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="w-full relative overflow-hidden group"
              >
                <div className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.id ? 'bg-gradient-to-r from-white/10 to-white/5 border border-white/20' : 'hover:bg-white/5'}`}>
                  {activeSection === item.id && <motion.div layoutId="activeMenu" className="absolute left-0 w-1 h-8 rounded-r-full" style={{ background: item.color }} />}
                  <div className="relative" style={{ color: activeSection === item.id ? item.color : '#9ca3af' }}>
                    <item.icon size={20} />
                    {hoveredItem === item.id && (
                      <motion.div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle at center, ${item.color}40, transparent 70%)`, filter: 'blur(8px)' }} initial={{ scale: 0 }} animate={{ scale: 2 }} transition={{ duration: 0.3 }} />
                    )}
                  </div>
                  <span className={`flex-1 text-left font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{item.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div className="mt-6 pt-5 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for global projects</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
};

// ================= HOME / HERO =================
const HomeSection = () => {
  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Built' },
    { value: '15+', label: 'Industries Served' },
    { value: 'Global', label: 'Remote Delivery' }
  ];

  return (
    <section id="home" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#00ff88] mb-6">
              <FiGlobe /> Building for clients worldwide
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
                AI-powered SaaS, ERP & automation systems for serious business growth
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-8 max-w-3xl mb-8">
              We build scalable SaaS platforms, AI automation systems, ERP software, mobile apps and intelligent business workflows for modern companies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={`mailto:${COMPANY.email}?subject=Project Inquiry for Dart Technology`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all">
                Start a Project <FiArrowUpRight />
              </a>
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                View LinkedIn <FiLinkedin />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <FloatingCard3D key={stat.label} color={index % 2 === 0 ? '#00ff88' : '#0088ff'} delay={index * 0.06}>
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-3xl border border-white/10 text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-xs leading-5">{stat.label}</div>
                  </div>
                </FloatingCard3D>
              ))}
            </div>
          </motion.div>

          <FloatingCard3D color="#00ff88" aiEffect className="min-h-[520px]">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10 h-full">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Business Automation Engine</p>
                  <h3 className="text-2xl font-black text-white mt-1">System Blueprint</h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88]">
                  <FiZap size={28} />
                </div>
              </div>

              <div className="space-y-5">
                {[
                  ['Lead / Event Captured', 'Website, Shopify, CRM, WhatsApp, form or custom API event.'],
                  ['Workflow Triggered', 'Rules decide what message, call or follow-up should happen next.'],
                  ['AI + Automation Layer', 'AI call, WhatsApp template, CRM update, email or internal task.'],
                  ['Dashboard & Reports', 'Team tracks replies, conversions, customers and growth impact.']
                ].map(([title, desc], index) => (
                  <motion.div key={title} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.15 }} className="relative p-5 rounded-3xl bg-black/30 border border-white/10">
                    <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-[#00ff88] to-[#0088ff]" />
                    <div className="pl-4">
                      <h4 className="text-white font-bold">{title}</h4>
                      <p className="text-gray-400 text-sm leading-6 mt-1">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FloatingCard3D>
        </div>
      </div>
    </section>
  );
};

// ================= WHAT WE BUILD =================
const WhatWeBuildSection = () => {
  const builds = [
    {
      title: 'AI Automation Systems',
      desc: 'WhatsApp automation, AI calling agents, CRM workflows and smart customer engagement systems.',
      icon: FiZap,
      color: '#00ff88',
      points: ['WhatsApp journeys', 'AI calling agents', 'Lead follow-up', 'CRM automation']
    },
    {
      title: 'Custom ERP Systems',
      desc: 'Education, real estate, hospitality, logistics, coaching and business ERP solutions.',
      icon: FiDatabase,
      color: '#0088ff',
      points: ['Admin dashboards', 'Role-based access', 'Reports & billing', 'Student/customer modules']
    },
    {
      title: 'SaaS Platforms',
      desc: 'Multi-tenant SaaS products with subscriptions, analytics, automation and scalable backend APIs.',
      icon: FiLayers,
      color: '#ff0088',
      points: ['Multi-tenant architecture', 'Subscription plans', 'Analytics', 'API-first backend']
    },
    {
      title: 'Mobile & Web Apps',
      desc: 'React, React Native, Flutter and scalable backend systems for product-grade applications.',
      icon: FiSmartphone,
      color: '#ffaa00',
      points: ['Android & iOS', 'React dashboards', 'Realtime features', 'Payment flows']
    },
    {
      title: 'SEO Intelligence Systems',
      desc: 'Technical SEO dashboards, audit engines, keyword visibility and AI-search tracking systems.',
      icon: FiBarChart2,
      color: '#a855f7',
      points: ['SEO audits', 'GSC/GA4 integration', 'Keyword tracking', 'Competitor insights']
    },
    {
      title: 'Secure Cloud Deployment',
      desc: 'Production deployment with authentication, databases, queues, file storage and monitoring setup.',
      icon: FiShield,
      color: '#22c55e',
      points: ['JWT auth', 'Render/cloud deploy', 'Queues & workers', 'Database design']
    }
  ];

  return (
    <section id="build" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="What We Build" title="Product-grade systems, not just websites." subtitle="We focus on business outcomes: automation, dashboards, operations, customer engagement and scalable software that can grow with your company." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builds.map((item, index) => (
            <FloatingCard3D key={item.title} color={item.color} delay={index * 0.08} aiEffect={index === 0}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-7 rounded-3xl border border-white/10 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${item.color}20`, color: item.color }}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7 mb-5">{item.desc}</p>
                <div className="space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <FiCheckCircle style={{ color: item.color }} /> {point}
                    </div>
                  ))}
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= CASE STUDIES =================
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'AI WhatsApp Automation SaaS',
      category: 'Automation Platform',
      desc: 'Event-driven WhatsApp automation platform for businesses with workflows, approved Meta templates, analytics and tenant-wise API keys.',
      problem: 'Businesses lose leads because follow-ups are manual and delayed.',
      solution: 'Automated journeys triggered by events like cart abandoned, inquiry received, payment failed and order placed.',
      impact: ['Event-based workflow builder', 'Meta template status sync', 'Tenant API keys', 'Queue-based message delivery'],
      stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Meta API'],
      icon: FiMessageCircle,
      color: '#00ff88'
    },
    {
      title: 'Coaching & Education ERP',
      category: 'EdTech SaaS',
      desc: 'Complete coaching platform with live classes, student management, course access, payments, recordings and AI content search roadmap.',
      problem: 'Coaching institutes manage classes, students, payments and content across scattered tools.',
      solution: 'One ERP with live classes, student dashboards, teacher panels, course management and recording support.',
      impact: ['Teacher/student dashboards', 'Live class system', 'Course purchase flow', 'PDF/video upload support'],
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Cloudinary'],
      icon: FiMonitor,
      color: '#0088ff'
    },
    {
      title: 'AI Calling Agent Platform',
      category: 'Voice AI',
      desc: 'Voice automation system for sales, bookings and support calls using Plivo voice flows, speech-to-text, LLM replies and call logs.',
      problem: 'Businesses cannot call every lead instantly and consistently.',
      solution: 'AI agent handles calls, answers basic questions, captures intent and stores lead conversation history.',
      impact: ['Hindi & English support', 'Call recordings', 'Lead conversation logs', 'Fast response pipeline'],
      stack: ['Plivo', 'Node.js', 'Groq Whisper', 'OpenAI-compatible LLM', 'MongoDB'],
      icon: FiPhoneCall,
      color: '#ff0088'
    },
    {
      title: 'AI SEO Operating System',
      category: 'SEO Intelligence',
      desc: 'Technical SEO and AI search visibility product focused on audits, rankings, competitor tracking and content intelligence.',
      problem: 'SEO teams need one place to track technical issues, keywords, competitors and AI search visibility.',
      solution: 'SEO OS with audit dashboards, monitoring, keyword research UI, crawler services and analytics integrations.',
      impact: ['Audit dashboard', 'Keyword research flow', 'Monitoring APIs', 'GSC/GA4 integration roadmap'],
      stack: ['React', 'Node.js', 'Crawler APIs', 'DataForSEO', 'Analytics APIs'],
      icon: FiTrendingUp,
      color: '#ffaa00'
    }
  ];

  return (
    <section id="case-studies" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Case Studies"
          title="Strong project positioning for international clients."
          subtitle="Instead of showing random famous websites, show your own product capabilities with problem, solution, stack and business impact. This builds much better trust."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <FloatingCard3D key={project.title} color={project.color} delay={index * 0.1} aiEffect={index === 0}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-7 rounded-3xl border border-white/10 h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: project.color }}>{project.category}</p>
                    <h3 className="text-2xl font-black text-white leading-tight">{project.title}</h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${project.color}20`, color: project.color }}>
                    <project.icon size={28} />
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-7 mb-6">{project.desc}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <p className="text-white font-bold mb-2">Problem</p>
                    <p className="text-gray-400 text-sm leading-6">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <p className="text-white font-bold mb-2">Solution</p>
                    <p className="text-gray-400 text-sm leading-6">{project.solution}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {project.impact.map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-2xl bg-black/30 border border-white/10 px-4 py-3 text-sm text-gray-300">
                      <FiCheckCircle style={{ color: project.color }} /> {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= WEB DEVELOPMENT =================
const WebDevelopmentSection = () => {
  const webSkills = [
    { skill: 'Core PHP / MySQL', level: 95, icon: SiPhp, color: '#777BB4', description: 'Dynamic business websites, admin panels and custom portals' },
    { skill: 'React JS', level: 92, icon: SiReact, color: '#61DAFB', description: 'Modern dashboards, SaaS UI and frontend systems' },
    { skill: 'Node.js APIs', level: 88, icon: SiNodedotjs, color: '#339933', description: 'REST APIs, authentication and backend services' },
    { skill: 'WordPress', level: 86, icon: SiWordpress, color: '#21759B', description: 'Business websites, landing pages and custom themes' },
    { skill: 'Shopify', level: 84, icon: SiShopify, color: '#7AB55C', description: 'E-commerce setup, theme changes and integrations' },
    { skill: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: '#06B6D4', description: 'Premium responsive UI with fast development' }
  ];

  const webProjects = [
    {
      title: 'Business ERP Admin Panel',
      description: 'Role-based dashboard with users, reports, billing, analytics and operational modules.',
      tags: ['ERP', 'Admin Panel', 'Reports'],
      color: '#00ff88',
      icon: '📊'
    },
    {
      title: 'SaaS Landing + Dashboard',
      description: 'Conversion-focused landing page connected with authenticated product dashboard.',
      tags: ['SaaS', 'React', 'API'],
      color: '#0088ff',
      icon: '🚀'
    },
    {
      title: 'E-commerce Operations System',
      description: 'Storefront, catalog, order workflow, customer communication and backend management.',
      tags: ['E-commerce', 'Automation', 'CRM'],
      color: '#ff0088',
      icon: '🛒'
    }
  ];

  return (
    <section id="web" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Web Development"
          title="Websites, dashboards and business portals that look premium and work fast."
          subtitle="We build modern web systems using React, Node.js, PHP, MySQL and scalable APIs for businesses that need more than a simple website."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {webSkills.map((skill, index) => (
            <FloatingCard3D key={skill.skill} color={skill.color} delay={index * 0.08}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${skill.color}20` }}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{skill.skill}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Expertise</span>
                  <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }} />
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>

        <h3 className="text-3xl font-black text-white mb-8">Web Systems We Deliver</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <FloatingCard3D key={project.title} color={project.color} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-7 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>




       
    </section>
  );
};



const WebDevelopmentSections = () => {
  const webProjectss = [
    {
      title: "Gymshark",
      description: "High-performance fitness apparel e-commerce platform",
      stats: "10M+ Visitors",
      color: "#00ff88",
      icon: "💪",
      tags: ["E-commerce", "Fitness", "React"],
      url: "https://www.gymshark.com",
      features: ["Shopping Cart", "Product Filters", "User Accounts"]
    },
    {
      title: "Allbirds",
      description: "Sustainable footwear and apparel e-commerce store",
      stats: "5M+ Customers",
      color: "#ff0088",
      icon: "👟",
      tags: ["Sustainable", "E-commerce", "Shopify"],
      url: "https://www.allbirds.com",
      features: ["Eco-friendly", "Size Guide", "Product Reviews"]
    },
    {
      title: "Kylie Cosmetics",
      description: "Beauty and cosmetics e-commerce platform",
      stats: "8M+ Products Sold",
      color: "#0088ff",
      icon: "💄",
      tags: ["Beauty", "E-commerce", "React"],
      url: "https://kyliecosmetics.com/en-in",
      features: ["Product Gallery", "Wishlist", "Checkout"]
    },
    {
      title: "Kith",
      description: "Premium streetwear and lifestyle brand",
      stats: "Exclusive Drops",
      color: "#ffaa00",
      icon: "👕",
      tags: ["Streetwear", "Fashion", "WordPress"],
      url: "https://kith.com",
      features: ["Limited Editions", "Size Selection", "Fast Checkout"]
    },
    {
      title: "Morphe",
      description: "Professional makeup and beauty products",
      stats: "Global Shipping",
      color: "#ff00ff",
      icon: "🎨",
      tags: ["Makeup", "Beauty", "E-commerce"],
      url: "https://www.morphe.com",
      features: ["Product Videos", "Tutorials", "Bundles"]
    }
  ];
    return (
    <section id="web" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
       <h2 className="text-3xl font-bold text-white mb-8">Featured Web Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjectss.map((project, index) => (
            <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 text-sm" style={{ color: project.color }}>
                  <FiExternalLink /> Visit Website
                </a>
              </div>
            </FloatingCard3D>
          ))}
        </div>
 
    </section>
  );
};

// ================= APP DEVELOPMENT =================
const AppDevelopmentSection = () => {
  const appSkills = [
    { skill: 'React Native', level: 92, icon: SiReact, color: '#61DAFB', description: 'Cross-platform Android and iOS apps' },
    { skill: 'Flutter', level: 85, icon: SiFlutter, color: '#02569B', description: 'Beautiful mobile UI and fast delivery' },
    { skill: 'Swift / iOS', level: 88, icon: SiSwift, color: '#FA7343', description: 'Native iOS experience and performance' },
    { skill: 'Kotlin', level: 80, icon: SiKotlin, color: '#7F52FF', description: 'Native Android development' },
    { skill: 'Firebase', level: 90, icon: SiFirebase, color: '#FFCA28', description: 'Realtime database, notifications and auth' },
    { skill: 'Backend APIs', level: 88, icon: SiNodedotjs, color: '#339933', description: 'Node.js APIs for mobile applications' }
  ];

  const appProjects = [
    {
      title: 'Marketplace Mobile App',
      description: 'User app, owner app and admin panel with listings, search, booking and payment workflow.',
      stats: 'Multi-app system',
      color: '#00ff88',
      icon: '🏠'
    },
    {
      title: 'Education Mobile App',
      description: 'Student learning app with classes, PDF sheets, answer submission, scores and analytics.',
      stats: 'EdTech ready',
      color: '#0088ff',
      icon: '📚'
    },
    {
      title: 'Business Service App',
      description: 'Customer booking, service tracking, notifications and backend operations dashboard.',
      stats: 'Service platform',
      color: '#ff0088',
      icon: '📱'
    }
  ];

  return (
    <section id="app" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="App Development"
          title="Mobile apps with clean UI, fast APIs and real business workflows."
          subtitle="We build app ecosystems with user apps, owner apps, admin panels, live data, notifications and backend automation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {appSkills.map((skill, index) => (
            <FloatingCard3D key={skill.skill} color={skill.color} delay={index * 0.08}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${skill.color}20` }}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{skill.skill}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Expertise</span>
                  <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }} />
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>

        <h3 className="text-3xl font-black text-white mb-8">Mobile App Systems</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {appProjects.map((project, index) => (
            <FloatingCard3D key={project.title} color={project.color} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${project.color}20`, color: project.color }}>{project.stats}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{project.description}</p>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};


const AppDevelopmentSections = () => {
  const appProjects = [
    
  
  {
    title: "تكويد",
    description: "Tracks farm locations, verifies export-area cultivation, ensures crop quality, sponsored by Egypt’s Agricultural Export Council.",
    stats: "100+ installs",
    color: "#00ff88",
    icon: "🌾 🚜",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.takweed.app"
  },
  {
    title: "قمحاوي",
    description: "Empowers farmers with smart tools for crop health, disease detection, weather insights, and marketplace access.",
    stats: "50K+ installs",
    color: "#ff0088",
    icon: "🤖 🚜",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.qamhawy.app&hl=en"
  },
  {
    title: "Yapsody QuickScan",
    description: "QuickScan efficiently manages event ticket scanning, attendee info, refunds, and multiple venue entries seamlessly",
    stats: "100+ Downloads",
    color: "#0088ff",
    icon: "📲",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.quickscan&hl=en"
  },
  {
    title: "Yapsody YapStats",
    description: "YapStats tracks events, provides support, enables past event access, and simplifies presenter management efficiently",
    stats: "1K+ Downloads",
    color: "red",
    icon: "📊",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yapstats&hl=en"
  },

    {
    title: "Yapsody YapTickets",
    description: "YapTickets simplifies ticket access, redemption, and transfers, ensuring fast, seamless entry to any event",
    stats: "10K+ Downloads",
    color: "red",
    icon: "🎫",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yaptix&hl=en"
  },



    {
    title: "Yatri Sathi",
    description: "Yatri Sathi offers reliable ride-hailing in Kolkata, connecting millions of users with trusted local drivers",
    stats: "1M+ Downloads",
    color: "#ffaa00",
    icon: "🚖",
    playStoreUrl: "https://play.google.com/store/apps/details?id=in.juspay.jatrisaathi&hl=en"
  },



      {
    title: "Hido - Video Calls & Friends",
    description: "Hido enables meaningful conversations, connecting people through text and video for genuine emotional connections",
    stats: "10K+ Downloads",
    color: "purple",
    icon: "💬",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hi.hido&hl=en"
  },



      {
    title: "CoinClash",
    description: "CoinClash rewards knowledge by letting users play quizzes, watch ads, and earn real money easily",
    stats: "100+ Downloads",
    color: "green",
    icon: "🪙",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coinclash&hl=en"
  },



      {
    title: "Chatter Social",
    description: "Chatter enables real-time group conversations, viral moments, and community-driven content for creators and users",
    stats: "10K+ Downloads",
    color: "brown",
    icon: "👥 💬",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en"
  },


     {
    title: "GeoBuddy- The Learning App",
    description: "Our app offers comprehensive, uninterrupted learning from home with interactive features for students nationwide",
    stats: "1K+ Downloads",
    color: "gold",
    icon: "📚",
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.iron.jpiyu&hl=en"
  },

  ];

    return (
    <section id="app" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Mobile Apps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appProjects.map((project, index) => (
            <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ background: `${project.color}20`, color: project.color }}>
                    {project.stats}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 text-sm" style={{ color: project.color }}>
                  <FiExternalLink /> View on Play Store
                </a>
              </div>
            </FloatingCard3D>
          ))}
        </div>
    </section>
  );
};


// ================= UI UX =================
const UIUXSection = () => {
  const uiuxSkills = [
    { skill: 'Figma', level: 95, icon: SiFigma, color: '#F24E1E', description: 'UI design and prototypes' },
    { skill: 'Adobe XD', level: 90, icon: SiAdobexd, color: '#FF61F6', description: 'Wireframes and app flows' },
    { skill: 'Photoshop', level: 88, icon: SiAdobephotoshop, color: '#31A8FF', description: 'Creative visual editing' },
    { skill: 'Illustrator', level: 85, icon: SiAdobeillustrator, color: '#FF9A00', description: 'Brand graphics and icons' }
  ];

  return (
    <section id="uiux" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="UI/UX Design"
          title="Clean product interfaces that make software easier to sell and use."
          subtitle="Good UI makes your product look trustworthy. We design dashboards, apps, landing pages and admin panels with a premium product feel."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {uiuxSkills.map((skill, index) => (
            <FloatingCard3D key={skill.skill} color={skill.color} delay={index * 0.08}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: `${skill.color}20` }}>
                  <skill.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{skill.skill}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }} />
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Dashboard UI', 'Analytics, CRM, ERP and SaaS dashboards with clean data hierarchy.', '📊', '#00ff88'],
            ['Mobile App UI', 'User-friendly app screens for customers, owners, admins and teams.', '📱', '#0088ff'],
            ['Landing Page UI', 'High-converting pages for SaaS, automation and service businesses.', '🌐', '#ff0088']
          ].map(([title, desc, icon, color]) => (
            <FloatingCard3D key={title} color={color}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-7">{desc}</p>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= SEO =================
const SEOSection = () => {
  const seoServices = [
    { name: 'SEO Optimization', level: 92, icon: FiTrendingUp, color: '#00ff88', description: 'On-page, off-page and technical SEO' },
    { name: 'Google Analytics', level: 88, icon: SiGoogleanalytics, color: '#E37400', description: 'Data analysis and reporting' },
    { name: 'SEMrush', level: 85, icon: SiSemrush, color: '#FF642D', description: 'Keyword and competitor research' },
    { name: 'SEO Systems', level: 90, icon: FiBarChart2, color: '#0088ff', description: 'Dashboards, audits and tracking tools' }
  ];

  return (
    <section id="seo" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="SEO & Marketing"
          title="SEO systems and growth dashboards for measurable visibility."
          subtitle="We support SEO campaigns with technical audits, analytics setup, competitor tracking and custom AI SEO operating systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {seoServices.map((service, index) => (
            <FloatingCard3D key={service.name} color={service.color} delay={index * 0.08}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: `${service.color}20` }}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${service.level}%` }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}80)` }} />
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Technical SEO Audit', 'Find website issues, speed problems, indexing errors and page-level improvements.', '#00ff88'],
            ['AI Search Visibility', 'Track how your brand appears in AI answers and search recommendation systems.', '#0088ff'],
            ['Content Growth Plan', 'Build keyword clusters, content calendar and performance-focused SEO workflows.', '#ff0088']
          ].map(([title, desc, color]) => (
            <FloatingCard3D key={title} color={color}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full">
                <FiBarChart2 className="text-3xl mb-4" style={{ color }} />
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-7">{desc}</p>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= REVIEWS =================
const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Michael Carter',
      company: 'E-commerce Brand Owner',
      review: 'Dart Technology helped us automate customer workflows and improve our operations significantly. Very professional execution.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'Coaching Business',
      review: 'The ERP and live class system completely transformed how we manage students, courses and internal operations.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      company: 'Digital Agency',
      review: 'Excellent communication, strong technical skills and reliable delivery. They understand both product and business needs.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Client Reviews"
          title="Trust signals that help global clients feel confident."
          subtitle="Reviews make the portfolio feel more credible. Replace these sample reviews with real client names and real testimonials when available."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <FloatingCard3D key={review.name} color={index === 0 ? '#00ff88' : index === 1 ? '#0088ff' : '#ff0088'} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-7 rounded-3xl border border-white/10 h-full">
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-7 mb-7">“{review.review}”</p>
                <div>
                  <h4 className="text-white font-black">{review.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{review.company}</p>
                </div>
              </div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= ABOUT =================
const AboutSection = () => {
  const experiences = [
    {
      title: 'Founder & Full Stack Developer',
      company: 'Dart Technology',
      duration: 'Current',
      points: ['Building SaaS, ERP and automation systems', 'AI calling and WhatsApp automation products', 'Custom software for business operations'],
      color: '#00ff88'
    },
    {
      title: 'Senior Software Engineer React Native and iOS',
      company: 'App Cake',
      duration: 'March 2024 - Present',
      points: ['Led development work across mobile features', 'Improved system response and app stability', 'Delivered production-ready features'],
      color: '#22c55e'
    },
    {
      title: 'Senior Software Engineer React Native and iOS',
      company: 'Avi Software',
      duration: 'July 2023 - Dec 2023',
      points: ['Contract-based mobile application development', 'Enhanced app performance and user experience', 'Delivered business-focused mobile solutions'],
      color: '#3b82f6'
    },
    {
      title: 'Senior Software Engineer Flutter and iOS',
      company: 'ConsCent',
      duration: 'May 2022 - July 2023',
      points: ['Flutter application development', 'Mobile UI and performance improvements', 'Production app feature delivery'],
      color: '#ef4444'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-0 md:ml-72">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Dart Technology"
          title="Founder-led software company focused on real business systems."
          subtitle="Hi, I'm Devank Karanwal, founder of Dart Technology. We help businesses build scalable software, automation workflows and product-grade systems that reduce manual work and improve growth."
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <FloatingCard3D color="#00ff88">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-[#00ff88] to-[#0088ff] flex items-center justify-center">
                  <span className="text-4xl font-black text-white">DK</span>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">Devank Karanwal</h2>
                  <p className="text-gray-400">Founder @ Dart Technology</p>
                </div>
              </div>

              <div className="space-y-4">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-gray-300 hover:text-[#00ff88] transition">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><FiMail /></div>
                  {COMPANY.email}
                </a>
                <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#0088ff] transition">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><FiLinkedin /></div>
                  LinkedIn Profile
                </a>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#22c55e] transition">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><FiMessageCircle /></div>
                  WhatsApp / Project Inquiry
                </a>
              </div>
            </div>
          </FloatingCard3D>

          <FloatingCard3D color="#0088ff">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10 h-full">
              <h3 className="text-2xl font-black text-white mb-6">Why Clients Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Scalable architecture', 'AI-powered workflows', 'Clean UI/UX', 'Fast delivery', 'Long-term support', 'Enterprise-ready systems'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 text-gray-300">
                    <FiCheckCircle className="text-[#00ff88]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </FloatingCard3D>
        </div>

        <h3 className="text-3xl font-black text-white mb-8">Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${exp.color}20` }}>
                    <FiBriefcase style={{ color: exp.color }} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-white mb-1">{exp.title}</h4>
                    <p className="text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-gray-300">
                          <FiCheckCircle style={{ color: exp.color }} className="mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= MAIN APP =================
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = ['home', 'build', 'case-studies', 'web', 'app', 'uiux', 'seo', 'reviews', 'about'];

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const current = sections.findLast((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= 180;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative bg-[#0A0A0A] min-h-screen overflow-hidden">
      <AnimatedBackground />

      <SideMenu activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10">
        <HomeSection />
        <WhatWeBuildSection />
        <CaseStudiesSection />
        <WebDevelopmentSection />
         <WebDevelopmentSections />
        <AppDevelopmentSection />
         <AppDevelopmentSections />
        <UIUXSection />
        <SEOSection />
        <ReviewsSection />
        {/* <AboutSection /> */}
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white p-4 rounded-full shadow-xl shadow-[#00ff88]/30">
              <FiChevronUp />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 ml-0 md:ml-72 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">Let's Build Something Amazing</h3>
              <p className="text-gray-400">Ready to build your SaaS, ERP, app or automation system?</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`mailto:${COMPANY.email}?subject=Project Inquiry for Dart Technology`} className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center justify-center gap-2 font-bold">
                <FiMail /> Start Project
              </a>
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold">
                <FiLinkedin /> Connect
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Dart Technology. All rights reserved. | Devank Karanwal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;




