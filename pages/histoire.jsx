import React from 'react'

const histoire = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src='https://images.unsplash.com/photo-1471532027614-154d124ccf57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
        />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>HISTOIRE</h1>
        </div>
      </div>

      <div className='max-w-[80%] mx-auto py-20 flex flex-col'>
        <h2 className='text-2xl text-[#35441e]'>Il était une fois</h2>
        <p className='py-8'>
          Dans un charmant petit village de Martigny-le-Comte, vivait un jeune couple nommé Céline et Christophe. <br />
          Céline, passionnée par la nature, avait tout quitté pour rejoindre son amoureux sur les terres fertiles de La ferme de Novelle où il s'occupait avec dévouement de ses bovins Charolais. <br />
          Ensemble, ils s'unirent pour faire de la ferme un véritable joyau de qualité et de respect envers la nature. <br />
          <br />
          Un jour, alors que Céline se rendait au marché de Charolles pour vendre les produits de la ferme, Christophe aperçut un de ses boeufs Charolais qui s'était égaré dans les bois. Déterminé à le retrouver, il partit avec détermination sur les traces du bovin perdu. <br />
          Au fil de sa quête, il découvrit une grotte enchantée remplie de délicieux fruits et légumes. Il comprit alors que ce trésor était le fruit de la permaculture pratiquée par Céline dans son potager de la ferme. <br />
          Fier de cette découverte, Christophe ramena le bovin égaré et les fruits et légumes de la grotte enchantée à la ferme. <br />
          Céline, émerveillée, décida de les ajouter à sa production pour offrir à leurs clients des produits encore plus sains et goûteux. <br />
          A partir de ce jour, la ferme Novelle devint encore plus connue pour ses produits de qualité, respectueux de la nature et des animaux. <br />
          <br />
          Céline et Christophe poursuivirent leurs aventures sur la ferme en harmonie, émerveillant leurs clients avec leur passion pour la qualité et le respect de la nature. <br />
          Ils vécurent heureux et eurent beaucoup d'enfants qui poursuivirent leur héritage sur la ferme Novelle. <br />
          Et ainsi, l'histoire de la ferme Novelle devint légendaire, transmise de génération en génération comme un véritable conte de fée.
        </p>
        <h2 className='text-2xl text-[#35441e]'>FIN.</h2>
      </div>
    </>
  )
}

export default histoire
