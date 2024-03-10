import Image from "next/image";

export default function Work() {
  return (
    <div className=" mb-12 mx-auto max-w-[1440px] mt-6 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white-60 mb-50  pb- tracking-normal whitespace-wrap leading ">
      <p className="text-gray-700 font-light flex flex-col gap-3  ">
        <span className="text-green-800 font-extrabold  capitalize text">
          Hilink
        </span>
        Size yardım etmeye adanmış her yolculukta yoldaşınızız, doğanın
        bozulmamış güzelliğini keşfedin.Uygulamamızla dünyadaki maceralarınızı
        zahmetsiz ve unutulmaz kılmayı hedefliyoruz
        <p>
          İster deneyimli bir kaşif olun, ister maceranıza yeni başlayın,
          platformumuz size en güzel deneyimleri sunmak için tasarlanmıştır.
          Başlamak için ihtiyacınız olan araçlar, bilgiler ve destek güvenle
          yolculuklar.
        </p>
        Kaybolmanın gezginler için ortak bir endişe kaynağı olduğunu anlıyoruz,
        özellikle yabancı arazilerde. Bu yüzden size rehberlik etmek için her
        adımda buradayız. Sürüm uygulaması ile teklif verebilirsiniz kaybolma
        endişelerine elveda. Uygulamamız çevrimdışı haritalara sahiptir,
        internet olmadan uzak bölgelerde bile gezinebilmenizi sağlamaktayız.
        Arkadaşlarınızı, ailenizi ve diğer maceracılarınızı katılmaya davet
        edin. Büyük açık havada vadileri keşfediyor, dağları tırmanıyor ve
        heyecanı yaşıyorsunuz. Hilink ile her zaman aradığınızı bulacaksınız,
        bir sonraki maceranıza giden kolay yol...
      </p>
      <h1 className="p-4 mx-auto text-center from-stone-700 animate-pulse text-xl font-mono">
        Teşekkürlerr!!
      </h1>
      <div className="text-center justify-center">
        <Image src="hilink-logo.svg" alt="logo" width={80} height={10} />
      </div>
    </div>
  );
}
