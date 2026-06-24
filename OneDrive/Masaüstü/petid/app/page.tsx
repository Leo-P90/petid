'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [connected, setConnected] = useState<boolean | null>(null)

  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase.auth.getSession()
      if (error) {
        setConnected(false)
      } else {
        setConnected(true)
      }
    }
    testConnection()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center justify-center px-4">
      
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🐾</div>
        <h1 className="text-4xl font-bold text-orange-500 mb-2">PetID</h1>
        <p className="text-gray-500 text-lg">Evcil hayvanın için kişisel eğitim rehberi</p>
      </div>

      {/* Bağlantı Durumu */}
      <div className="mb-6">
        {connected === null && <p className="text-gray-400">Bağlantı kontrol ediliyor...</p>}
        {connected === true && <p className="text-green-500 font-semibold">✅ Supabase bağlantısı başarılı!</p>}
        {connected === false && <p className="text-red-500 font-semibold">❌ Bağlantı hatası!</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm mb-10">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
          <span className="text-3xl">🎯</span>
          <div>
            <p className="font-semibold text-gray-800">Kişisel Eğitim</p>
            <p className="text-sm text-gray-500">Hayvanına özel adım adım program</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
          <span className="text-3xl">📈</span>
          <div>
            <p className="font-semibold text-gray-800">İlerleme Takibi</p>
            <p className="text-sm text-gray-500">Her adımı kaydet, gelişimi gör</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
          <span className="text-3xl">🐱🐶</span>
          <div>
            <p className="font-semibold text-gray-800">Kedi & Köpek</p>
            <p className="text-sm text-gray-500">Her iki tür için özel içerikler</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl text-lg transition-colors">
          Başla
        </button>
        <button className="bg-white hover:bg-gray-50 text-orange-500 font-semibold py-4 rounded-2xl text-lg border-2 border-orange-200 transition-colors">
          Giriş Yap
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-8">Ücretsiz başla, istediğin zaman büyüt</p>

    </main>
  )
}
