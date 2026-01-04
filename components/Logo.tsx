export default function Logo() {
  return (
    <div className="group cursor-pointer select-none">
      {/* Container Flex pour aligner K . L */}
      <div className="font-mono text-2xl font-black tracking-tighter flex items-center gap-1 transition-all duration-300 group-hover:gap-3">
        
        {/* Le K */}
        <span className="text-gray-900 transition-transform duration-300 group-hover:-rotate-12">
          K
        </span>

        {/* Le Point (devient bleu et tourne au survol) */}
        <span className="text-gray-400 text-xl transition-all duration-500 group-hover:text-blue-600 group-hover:rotate-180 group-hover:scale-125">
          ●
        </span>

        {/* Le L */}
        <span className="text-gray-900 transition-transform duration-300 group-hover:rotate-12">
          L
        </span>

      </div>
    </div>
  );
}