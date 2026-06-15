import React from "react";
import { useNavigate } from "react-router-dom";

import fotoProfil from "./assets/zaki.webp";

const Biografi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#BFD4DB] text-[#2C4A63] flex items-center justify-center py-20 px-4 md:px-8 font-sans selection:bg-[#78A2CC] selection:text-[#14263B]">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center space-x-2 text-[#4F6C82] hover:text-[#14263B] text-xs uppercase tracking-widest font-semibold transition-colors group"
      >
        <svg
          className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Kembali</span>
      </button>

      <div className="max-w-4xl w-full bg-[#AECBD6]/80 border border-[#96B9D0] rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          <div className="md:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[280px] md:max-w-full aspect-[3/4] overflow-hidden rounded-2xl border-4 border-[#96B9D0] shadow-xl bg-[#BFD4DB]">
              <img
                src={fotoProfil}
                alt="Muhammad Zaki"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center space-y-4">

            <div>
              <span className="text-[#78A2CC] text-xs tracking-[0.25em] uppercase font-bold block mb-1">
                Mengenal Penulis
              </span>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#14263B] tracking-wide">
                Biografi Penulis
              </h1>
            </div>

            <div className="w-16 h-0.5 bg-[#78A2CC]/50 my-2" />

            <p className="text-[#2C4A63] text-sm md:text-base leading-relaxed text-justify font-sans">
              <span className="text-xl font-serif font-bold text-[#14263B] mr-1">
                Muhammad Zaki
              </span>
              lahir di Tangerang Selatan pada 19 Februari 2004. Walaupun Zaki
              mempunyai hobi menggambar dan pernah mempunyai keinginan untuk
              menempuh jurusan DKV atau Perfilman, Zaki akhirnya memutuskan
              untuk mempelajari Ilmu Jurnalistik di Universitas Multimedia
              Nusantara. Sempat menyesal karena memilih jurusan jurnalistik,
              tetapi karya ini membuktikan bahwa memilih jurusan Jurnalistik
              adalah pilihan yang tepat.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-widest bg-[#BFD4DB] border border-[#96B9D0] px-3 py-1 rounded-full text-[#2C4A63]">
                📌 Jurnalistik
              </span>

              <span className="text-[10px] uppercase tracking-widest bg-[#BFD4DB] border border-[#96B9D0] px-3 py-1 rounded-full text-[#2C4A63]">
                🎓 Universitas Multimedia Nusantara
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Biografi;