import React, {useState, useCallback} from "react";
import Modal from 'react-modal';

const Artist = ({img, name, role, children, allowScrolling}) => {
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => {
    setVisible(true)
    allowScrolling(false)
  }, [allowScrolling, setVisible])
  const hide = useCallback(() => {
    setVisible(false)
    allowScrolling(true)
  }, [allowScrolling, setVisible])
  return (
    <div className="artist">
      <img onClick={show} src={img} />
      <Modal style={{content: {color: 'black'}}} onRequestClose={() => setVisible(false)} isOpen={visible}>
        <h3>{name}</h3>
        <h4>{role}</h4>
        {children}
        <button className="close" type="button" onClick={hide}>close</button>
      </Modal>
    </div>
  )
}

export default ({allowScrolling}) => (
  <div className="padder artists">
    <Artist allowScrolling={allowScrolling} name="Laura Hopwood" img="images/lh.jpg" role="performer">
      <p>Laura Hopwood is an award winning theatre maker whose work is immediate, invitational and non-hierarchical. She explores audience agency within communal experience and specialises in interactive, immersive, site specific and physical performance.</p>
      <p>Originally from Australia, she moved to London in 2014 to study at Drama Centre London and the Boris Schukin Institute in Moscow. In 2016 she co-wrote the Off West End award winning show What Once Was Ours, developed in collaboration with young people across the country exploring politics and national values. Upcoming is The Rage Room at Lewisham Arthouse, developed in part last year on residency in Piotrowice Nyskie, Poland with her performance collaboration Holocene.</p>
    </Artist>
    <Artist allowScrolling={allowScrolling} name="Meret Roth" img="images/mr.jpg" role="singer">
      <p>Meret Roth (soprano) studied at the Zurich University of the Arts and completed her master's degree in the class of Jane Thorner-Mengedoht with distinction and prize of the Werner and Berti Alter Foundation. She had completed her bachelor's degree with a focus on baroque singing with Jill Feldman. In addition to engagements as a soprano in classical and baroque concerts, she is active as an actress and speaker, focusing on contemporary projects.</p>
      <p>In January 2016, she debuted as a soloist with the Bavarian Radio Symphony Orchestra as part of the Musica viva series (conducted by Susanna Mälkki). As a singer of the Lucerne Festival Academy she sang under the direction of Sir Simon Rattle in Luciano Berio's 'Coro' for 40 solo parts and orchestra. She also received important artistic impulses at master classes with Barbara Hannigan, Donatienne Michel-Dansac, Marijana Mijanovic, Sarah Maria Sun, Daniel Fueter and Jakob Stämpfli. Meret Roth is a member of the baroque ensemble Ensemble Lusciniol, the association ‘Besuch der Lieder’ as well as the a cappella ensemble Racine's StimmFolk.</p>
    </Artist>
    <Artist allowScrolling={allowScrolling} name="Lucas Jordan" img="images/lj.jpg" role="flute and composition">
      <p>An innovative flutist and composer, in search of ever growing expressivity in both fields, Lucas Jordan crosses musical boundaries and redefines them with the aim of reconnecting music with today's society. Recognized for developing projects, such as  “dsharpgents | re:staging music” and “Wenn heute sich mit gestern vermischt” (2009 - 2011; with support awarded by the “momento stiftung”), he is the Artistic Director of “das kurze festival” in Zurich, Switzerland. </p>
      <p>Born in Brazil, Lucas Jordan studied flute at the Royal Academy of Music with William Bennett after studying flute and composition at the Zurich University of the Arts with Matthias Ziegler (flute) and Isabel Mundry (composition). He is grateful for generous scholarships from the LYRA Stiftung and Alfred und Isle Stammer-Mayer Stiftung (Switzerland). </p>
    </Artist>
    <Artist allowScrolling={allowScrolling} name="Elena Cappelletti" img="images/ec.jpg" role="cello">
      <p>An enthusiastic chamber music player, Elena performs regularly as member of the young emerging Alauda Quartet, with whom she was Chamber Music Fellow at the Royal Academy of Music, Park Lane Group artist and Making Music artist.The Alauda Quartet was awarded first prize in the “Antonelli” competition in Italy 2018 and special prize in the “Orlando” chamber music competition in the Netherlands in 2017.They re- ceived a scholarship to attend the EQ string quartet programme at the Banff centre for performing arts in Canada in 2018.As well as their busy schedule in the UK the Alauda Quartet have enjoyed performing in various music festivals across Europe holding regular tours in Spain, Italy, Serbia and Germany. Elena has worked with orchestras across UK and Italy such as the Philarmonic Chamber Orchestra in London, the Orchestra del Maggio musicale fiorentino,“G.Verdi” Symphony Orchestra in Milano,Teatro Petruzzelli in Bari,Teatro San Carlo in Naples, Filarmonica del Teatro Comunale di Bologna and in 2015 she was accepted into the Lucerne Festival Academy Orchestra.</p>
      <p>She graduated at the Royal Academy of Music and completed her bachelor degree at the G.Verdi conserva- toire in Milano. She obtained a chamber music Master degree at the Hochschule für musik in Hannover in 2014.</p>
      <p>She is keen on working with different artistic languages and together with Lucas Jordan they recently devel- oped an interdisciplinary project based on the novel “The Invisible Cities” by Italo Calvino.</p>
    </Artist>
    <Artist allowScrolling={allowScrolling} name="Irene Ros" img="images/ir.jpg" role="theatre director">
      <p>Irene is a theatre director and multimedia artist with 16 years of professional experience, producing work that is fuelled by interdisciplinary research. She recently graduated from the MA Performance Design and Practice, Central Saint Martins. </p>
      <p>Her work has been constantly inspired by politics, gender equality and the media. Through multimedia live performance, she creates experiences for the audience that question their participation in society and promote social cohesion. </p>
      <p>She ran the Italian theatre company Ursa Maior between 2002 and 2012, directing and producing 13 shows, often working as a dramaturg. Working as director, artistic director and producer she led tours in Italy and coordinated a theatre season in the historic Filippo Neri Theatre in Bologna. Ursa Maior projects have been supported by the National Agency of the European Union, Padua University, Rosa Luxemburg Foundation of Berlin, Women's Centre of Bologna, Italian Cultural Institute of London. She performed at the Brighton (2013) and Edinburgh (2014) Fringe Festivals and Rich Mix (2016).</p>
      <p>Working with puppeteer Helen Ainsworth, she founded Cut Moose, a charity dedicated to creating thought, visually stimulating, provoking theatre. She was artist in residence in the European Capital of Culture Wroclaw 2016 programme, co-leading a project for marginalised women. Over the past two years, she challenged the concepts of representation and participation through different forms, such as site responsive performances, immersive and participatory installations.</p>
    </Artist>
    <Artist allowScrolling={allowScrolling} name="Marja-Lisa Hedenquist" img="images/mlh.jpg" role="costume design">
      <p>Marja-Lisa Hedenquist is a Swedish artist with professional and educational background in costume design, making and set design. Her personal passion and focus is on performance art as a sociopolitical tool to affect change and build narratives to counteract an ever-growing fragmented culture and its separation from nature.</p>
    </Artist>
  </div>
)