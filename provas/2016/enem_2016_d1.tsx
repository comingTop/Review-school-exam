import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2016_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Sentimos que toda satisfação de nossos desejos 
advinda do mundo assemelha-se à esmola que mantém 
hoje o mendigo vivo, porém prolonga amanhã a sua 
fome. A resignação, ao contrário, assemelha-se à 
fortuna herdada: livra o herdeiro para sempre de todas 
as preocupações. 
SCHOPENHAUER, A. Aforismo para a sabedoria da vida . São Paulo: Martins Fontes, 2005. 
O trecho destaca uma ideia remanescente de uma 
tradição filosófica ocidental, segundo a qual a felicidade 
se mostra indissociavelmente ligada à`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `consagração de relacionamentos afetivos.` },
      { id: 'B', type: 'text', value: `administração da independência interior.` },
      { id: 'C', type: 'text', value: `fugacidade do conhecimento empírico.` },
      { id: 'D', type: 'text', value: `liberdade de expressão religiosa.` },
      { id: 'E', type: 'text', value: `busca de prazeres efêmeros.` },
    ],
    correct: 'B',
    explanation: `Para o filósofo Schopenhauer a felicidade não depende de fatores externos. Para ele, a verdadeira felicidade só seria atingida a partir de elementos encontrados no interior do próprio indivíduo. Assim, ele defende uma administração da independência interior.`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Batizado por Tancredo Neves de “Nova República”, 
o período que marca o reencontro do Brasil com os 
governos civis e a democracia ainda não completou 
seu quinto ano e já viveu dias de grande comoção. 
Começou com a tragédia de Tancredo, seguiu pela 
euforia do Plano Cruzado, conheceu as depressões da 
inflação e das ameaças da hiperinflação e desembocou 
na movimentação que antecede as primeiras eleições 
diretas para presidente em 29 anos. 
O álbum dos presidentes: a história vista pelo JB. Jornal do Brasil , 15 nov. 1989. 
O período descrito apresenta continuidades e rupturas 
em relação à conjuntura histórica anterior. Uma dessas 
continuidades consistiu na`,
    alternatives: [
      { id: 'A', type: 'text', value: `representação do legislativo com a fórmula do 
bipartidarismo.` },
      { id: 'B', type: 'text', value: `detenção de lideranças populares por crimes de 
subversão.` },
      { id: 'C', type: 'text', value: `presença de políticos com trajetórias no regime 
autoritário.` },
      { id: 'D', type: 'text', value: `prorrogação das restrições advindas dos atos 
institucionais.` },
      { id: 'E', type: 'text', value: `estabilidade da economia com o congelamento anual 
de preços.` },
    ],
    correct: 'C',
    explanation: `A alternativa correta destaca exatamente o movimento vivido no Brasil pós Ditadura Militar. As coligações que se candidataram para as eleições indiretas tinham muitos políticos que estavam vinculados diretamente à base governamental da época ditatorial.`,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os moradores de Andalsnes, na Noruega, poderiam 
se dar ao luxo de morar perto do trabalho nos dias úteis e 
de se refugiar na calmaria do bosque aos fins de semana. 
E sem sair da mesma casa. Bastaria achar uma vaga 
para estacionar o imóvel antes de curtir o novo endereço. 
Disponível em: http://casavogue.globo.com. Acesso em: 3 out. 2015 (adaptado). 
Uma vez implementada, essa proposta afetaria a 
dinâmica do espaço urbano por reduzir a intensidade do 
seguinte processo:`,
    images: ['/enem/2016/images/enem_2016_d1_q3.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Êxodo rural.` },
      { id: 'B', type: 'text', value: `Movimento pendular.` },
      { id: 'C', type: 'text', value: `Migração de retorno.` },
      { id: 'D', type: 'text', value: `Deslocamento sazonal.` },
      { id: 'E', type: 'text', value: `Ocupação de áreas centrais.` },
    ],
    correct: 'B',
    explanation: `A imagem mostra um tipo de residências em cima de trilhos, possibilitando a dinâmica descrita no texto. Ao longo da semana, as pessoas deixariam as suas residências nas proximidades do centro, facilitando o deslocamento para o trabalho, nos finais de semana, poderiam deslocar as suas casas para as áreas mais distantes dos centros, aproveitando as amenidades das áreas menos transformadas. Nesse sentido, o processo que sofreu uma forte redução é o de migração pendular (deslocamentos populacionais rápidos e repetitivos), pois, as pessoas podem localizar melhor as suas residências e evitar os deslocamentos entre um centro e suas periferias.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O Rio de Janeiro tem projeção imediata no próprio 
estado e no Espírito Santo, em parcela do sul do estado 
da Bahia, e na Zona da Mata, em Minas Gerais, onde 
tem influência dividida com Belo Horizonte. Compõem 
a rede urbana do Rio de Janeiro, entre outras cidades: 
Vitória, Juiz de Fora, Cachoeiro de Itapemirim, Campos 
dos Goytacazes, Volta Redonda - Barra Mansa, Teixeira 
de Freitas, Angra dos Reis e Teresópolis. 
Disponível em: http://ibge.gov.br. Acesso em: 9 jul. 2015 (adaptado). 
O conceito que expressa a relação entre o espaço 
apresentado e a cidade do Rio de Janeiro é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Frente pioneira.` },
      { id: 'B', type: 'text', value: `Zona de transição.` },
      { id: 'C', type: 'text', value: `Região polarizada.` },
      { id: 'D', type: 'text', value: `Área de conurbação.` },
      { id: 'E', type: 'text', value: `Periferia metropolitana.` },
    ],
    correct: 'C',
    explanation: `O texto retrata o nível de importância da cidade do Rio de Janeiro, pois destaca a área que é diretamente influenciada pela capital carioca (englobando o próprio estado, Espírito Santo e Minas Gerais &#8211; até o encontro com a área de influência de Belo Horizonte). Sendo assim, a opção que mostra corretamente o conceito que se relaciona à dinâmica é o que fala em polarização (termo que indica a ideia de centralidade), típica das grandes metrópoles brasileira.`,
    subject: ['geo'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Documentos do século XVI algumas vezes se 
referem aos habitantes indígenas como “os brasis”, 
ou “gente brasília” e, ocasionalmente no século 
XVII, o termo “brasileiro” era a eles aplicado, mas as 
referências ao status econômico e jurídico desses 
eram muito mais populares. Assim, os termos “negro 
da terra” e “índios” eram utilizados com mais frequência 
do que qualquer outro. 
SCHWARTZ, S. B. Gente da terra braziliense da nação. Pensando o Brasil: a construção de 
um povo. In: MOTA, C. G. (Org.). Viagem incompleta : a experiência brasileira (1500-2000). 
São Paulo: Senac, 2000 (adaptado). 
TEXTO II 
Índio é um conceito construído no processo de 
conquista da América pelos europeus. Desinteressados 
pela diversidade cultural, imbuídos de forte preconceito 
para com o outro, o indivíduo de outras culturas, 
espanhóis, portugueses, franceses e anglo-saxões 
terminaram por denominar da mesma forma povos tão 
díspares quanto os tupinambás e os astecas. 
SILVA, K. V.; SILVA, M. H. Dicionário de conceitos históricos . São Paulo: Contexto, 2005. 
Ao comparar os textos, as formas de designação dos 
grupos nativos pelos europeus, durante o período 
analisado, são reveladoras da`,
    alternatives: [
      { id: 'A', type: 'text', value: `concepção idealizada do território, entendido como 
geograficamente indiferenciado.` },
      { id: 'B', type: 'text', value: `percepção corrente de uma ancestralidade comum às 
populações ameríndias.` },
      { id: 'C', type: 'text', value: `compreensão etnocêntrica acerca das populações 
dos territórios conquistados.` },
      { id: 'D', type: 'text', value: `transposição direta das categorias originadas no 
imaginário medieval.` },
      { id: 'E', type: 'text', value: `visão utópica configurada a partir de fantasias de 
riqueza.` },
    ],
    correct: 'C',
    explanation: `Ambos os textos abordam a imagem do índio de maneira diminutiva e desprestigiada. Até o próprio nome &#8220;índio&#8221; surge de maneira inusitada, devido ao erro europeu ao pensar que estivessem nas Índias. Evidencia-se, portanto, a centralização em que o europeu se coloca e sua visão etnocêntrica sobre os povos nativos.`,
    subject: ['soc'],
    topics: ['Direitos humanos', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Ser ou não ser - eis a questão. 
Morrer - dormir - Dormir! Talvez sonhar. Aí está o obstáculo! 
Os sonhos que hão de vir no sono da morte 
Quando tivermos escapado ao tumulto vital 
Nos obrigam a hesitar: e é essa a reflexão 
Que dá à desventura uma vida tão longa. 
SHAKESPEARE, W. Hamlet . Porto Alegre: L&PM, 2007. 
Este solilóquio pode ser considerado um precursor do 
existencialismo ao enfatizar a tensão entre`,
    alternatives: [
      { id: 'A', type: 'text', value: `consciência de si e angústia humana.` },
      { id: 'B', type: 'text', value: `inevitabilidade do destino e incerteza moral.` },
      { id: 'C', type: 'text', value: `tragicidade da personagem e ordem do mundo.` },
      { id: 'D', type: 'text', value: `racionalidade argumentativa e loucura iminente.` },
      { id: 'E', type: 'text', value: `dependência paterna e impossibilidade de ação.` },
    ],
    correct: 'A',
    explanation: `O pensamento tratado no texto de Hamlet é sobre o existencialismo, que aborda a essência da existência humana. A contribuição mais importante dessa corrente é sobre a responsabilidade do homem sobre seu destino e seu livre-arbítrio. Por isso, surge a dicotomia sobre ser consciente sobre si e a angústia de ser responsável por seus atos.`,
    subject: ['fil'],
    topics: ['Filosofia Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Tradução: “As mulheres do futuro farão da Lua um 
 lugar mais limpo para se viver”. 
Disponível em: www.propagandashistoricas.com.br. Acesso em: 16 out. 2015. 
TEXTO II 
Metade da nova equipe da Nasa 
é composta por mulheres 
Até hoje, cerca de 350 astronautas americanos 
já estiveram no espaço, enquanto as mulheres não 
chegam a ser um terço desse número. Após o anúncio 
da turma composta 50% por mulheres, alguns internautas 
escreveram comentários machistas e desrespeitosos 
sobre a escolha nas redes sociais. 
Disponível em: https://catracalivre.com.br. Acesso em: 10 mar. 2016. 
A comparação entre o anúncio publicitário de 1968 e a 
repercussão da notícia de 2016 mostra a`,
    images: ['/enem/2016/images/enem_2016_d1_q7.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elitização da carreira científica.` },
      { id: 'B', type: 'text', value: `qualificação da atividade doméstica.` },
      { id: 'C', type: 'text', value: `ambição de indústrias patrocinadoras.` },
      { id: 'D', type: 'text', value: `manutenção de estereótipos de gênero.` },
      { id: 'E', type: 'text', value: `equiparação de papéis nas relações familiares.` },
    ],
    correct: 'D',
    explanation: `Uma propaganda machista ocorrida no ano de 1968 é colocada em comparação na atualidade com uma notícia prestigiosa, onde comunicam que 50% da equipa da Nasa é feminina. O que não se esperava é que boa parte de internautas na redes sociais agissem de maneira machista e criticassem a Nasa. O ponto principal é que sabemos que os pensamentos estão mudando, porém, ainda temos uma boa parte da população que pensa e age como se estivesse em 1968.`,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A África Ocidental é conhecida pela dinâmica das 
suas mulheres comerciantes, caracterizadas pela perícia, 
autonomia e mobilidade. A sua presença, que fora 
atestada por viajantes e por missionários portugueses que 
visitaram a costa a partir do século XV, consta também na 
ampla documentação sobre a região. A literatura é rica 
em referências às grandes mulheres como as vendedoras 
ambulantes, cujo jeito para o negócio, bem como a 
autonomia e mobilidade, é tão típico da região. 
HAVIK, P. Dinâmicas e assimetrias afro-atlânticas: a agência feminina e representações em 
mudança na Guiné (séculos XIX e XX). In: PANTOJA, S. (Org.). Identidades, memórias e 
histórias em terras africanas . Brasília: LGE; Luanda: Nzila, 2006. 
A abordagem realizada pelo autor sobre a vida social da 
África Ocidental pode ser relacionada a uma característica 
marcante das cidades no Brasil escravista nos séculos 
XVIII e XIX, que se observa pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `restrição à realização do comércio ambulante por 
africanos escravizados e seus descendentes.` },
      { id: 'B', type: 'text', value: `convivência entre homens e mulheres livres, de 
diversas origens, no pequeno comércio.` },
      { id: 'C', type: 'text', value: `presença de mulheres negras no comércio de rua de 
diversos produtos e alimentos.` },
      { id: 'D', type: 'text', value: `dissolução dos hábitos culturais trazidos do continente 
de origem dos escravizados.` },
      { id: 'E', type: 'text', value: `entrada de imigrantes portugueses nas atividades 
ligadas ao pequeno comércio urbano.` },
    ],
    correct: 'C',
    explanation: `Principalmente nos grandes centros urbanos, negras escravas participavam do comércio de alguns produtos, sob supervisão de seus senhores, ou não. Entravam na modalidade de &#8220;Escravos de ganho&#8221;. Negras libertas, já inseridas neste sistema, tinham a tendência de continuar no comércio, portanto, não era estranho ver este tipo de ocorrência.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Quanto mais complicada se tornou a produção 
industrial, mais numerosos passaram a ser os elementos 
da indústria que exigiam garantia de fornecimento. 
Três deles eram de importância fundamental: o trabalho, 
a terra e o dinheiro. Numa sociedade comercial, esse 
fornecimento só poderia ser organizado de uma forma: 
tornando-os disponíveis à compra. Agora eles tinham que 
ser organizados para a venda no mercado. Isso estava 
de acordo com a exigência de um sistema de mercado. 
Sabemos que em um sistema como esse, os lucros só 
podem ser assegurados se se garante a autorregulação 
por meio de mercados competitivos interdependentes. 
POLANYI, K. A grande transformação : as origens de nossa época. 
 Rio de Janeiro: Campus, 2000 (adaptado). 
A 
consequência 
do 
processo 
de 
transformação 
socioeconômica abordado no texto é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `expansão das terras comunais.` },
      { id: 'B', type: 'text', value: `limitação do mercado como meio de especulação.` },
      { id: 'C', type: 'text', value: `consolidação da força de trabalho como mercadoria.` },
      { id: 'D', type: 'text', value: `diminuição do comércio como efeito da industrialização.` },
      { id: 'E', type: 'text', value: `adequação do dinheiro como elemento padrão 
das transações.` },
    ],
    correct: 'C',
    explanation: `Segundo Karl Marx, o trabalhador passa a ter que vender sua força de trabalho no momento em que não detém mais os meios de produção, ainda segundo ele, seu bem mais precioso. Portanto, sua força de trabalho passa a ser tratada também como um produto, aplicando-se sobre ela as regras de livre mercado e oferta e procura.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O que ocorreu na Bahia de 1798, ao contrário das 
outras situações de contestação política na América 
portuguesa, é que o projeto que lhe era subjacente 
não tocou somente na condição, ou no instrumento, da 
integração subordinada das colônias no império luso. 
Dessa feita, ao contrário do que se deu nas Minas Gerais 
(1789), a sedição avançou sobre a sua decorrência. 
JANCSÓ, I.; PIMENTA, J. P. Peças de um mosaico. In: MOTA, C. G. (Org.). Viagem incompleta : 
a experiência brasileira (1500-2000). São Paulo: Senac, 2000. 
A diferença entre as sedições abordadas no texto 
encontrava-se na pretensão de`,
    alternatives: [
      { id: 'A', type: 'text', value: `eliminar a hierarquia militar.` },
      { id: 'B', type: 'text', value: `abolir a escravidão africana.` },
      { id: 'C', type: 'text', value: `anular o domínio metropolitano.` },
      { id: 'D', type: 'text', value: `suprimir a propriedade fundiária.` },
      { id: 'E', type: 'text', value: `extinguir o absolutismo monárquico.` },
    ],
    correct: 'B',
    explanation: `O Texto refere-se a Sedição Baiana, ou Conjuração Baiana. A sua principal diferente em relação aos outros movimentos foi a intensa participação da classe economicamente baixa da sociedade e escravos, além de defender a abolição da escravatura.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Disponível em: http://portal.iphan.gov.br. Acesso em: 6 abr. 2016. 
TEXTO II 
A eleição dos novos bens, ou melhor, de novas 
formas de se conceber a condição do patrimônio cultural 
nacional, também permite que diferentes grupos sociais, 
utilizando as leis do Estado e o apoio de especialistas, 
revejam as imagens e alegorias do seu passado, do que 
querem guardar e definir como próprio e identitário. 
ABREU, M.; SOIHET, R.; GONTIJO, R. (Org.). Cultura política e leituras do passado : 
historiografia e ensino de história . Rio de Janeiro: Civilização Brasileira, 2007. 
O texto chama a atenção para a importância da proteção 
de bens que, como aquele apresentado na imagem, se 
identificam como:`,
    images: ['/enem/2016/images/enem_2016_d1_q11.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Artefatos sagrados.` },
      { id: 'B', type: 'text', value: `Heranças materiais.` },
      { id: 'C', type: 'text', value: `Objetos arqueológicos.` },
      { id: 'D', type: 'text', value: `Peças comercializáveis.` },
      { id: 'E', type: 'text', value: `Conhecimentos tradicionais.` },
    ],
    correct: 'E',
    explanation: `A questão nos remete à valorização e reconhecimento de práticas tradicionais que configuram patrimônio cultural imaterial. De acordo com o IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional), “os bens culturais de natureza imaterial dizem respeito àquelas práticas e domínios da vida social que se manifestam em saberes, ofícios e modos de fazer.”`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `No início de maio de 2014, a instalação da 
plataforma petrolífera de perfuração HYSY-981 nas 
águas contestadas do Mar da China Meridional 
suscitou especulações sobre as motivações chinesas. 
Na avaliação de diversos observadores ocidentais, 
Pequim pretendeu, com esse gesto, demonstrar que 
pode impor seu controle e dissuadir outros países de 
seguir com suas reivindicações de direito de exploração 
dessas águas, como é o caso do Vietnã e das Filipinas. 
KLARE, M.T. A guerra pelo petróleo se joga no mar. Le Monde Diplomatique Brasil , abr. 2015. 
A ação da China em relação à situação descrita no texto 
evidencia um conflito que tem como foco o(a):`,
    alternatives: [
      { id: 'A', type: 'text', value: `Distribuição das zonas econômicas especiais.` },
      { id: 'B', type: 'text', value: `Monopólio das inovações tecnológicas extrativas.` },
      { id: 'C', type: 'text', value: `Dinamização da atividade comercial.` },
      { id: 'D', type: 'text', value: `Jurisdição da soberania territorial.` },
      { id: 'E', type: 'text', value: `Embargo da produção industrial.` },
    ],
    correct: 'D',
    explanation: `A Zona Econômica Exclusiva (ZEE) é uma área de exploração econômica adjacente ao mar territorial de determinado país. Nesse sentido, a soberania dessa região está atrelada ao respectivo mar territorial. A instalação de uma plataforma de exploração em uma ZEE de outro país se configura em uma situação de conflito por ferir a soberania territorial.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A Operação Condor está diretamente vinculada 
às experiências históricas das ditaduras civil-militares 
que se disseminaram pelo Cone Sul entre as décadas 
de 1960 e 1980. Depois do Brasil (e do Paraguai de 
Stroessner), foi a vez da Argentina (1966), Bolívia 
(1966 e 1971), Uruguai e Chile (1973) e Argentina 
(novamente, em 1976). Em todos os casos se 
instalaram ditaduras civil-militares (em menor ou 
maior medida) com base na Doutrina de Segurança 
Nacional e tendo como principais características um 
anticomunismo militante, a identificação do inimigo 
interno, a imposição do papel político das Forças 
Armadas e a definição de fronteiras ideológicas. 
PADRÓS, E. S. et al. Ditadura de Segurança Nacional no Rio Grande do Sul (1964-1985) : 
história e memória. Porto Alegre: Corag, 2009 (adaptado). 
Levando-se em conta o contexto em que foi criada, a 
referida operação tinha como objetivo coordenar a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `modificação de limites territoriais.` },
      { id: 'B', type: 'text', value: `sobrevivência de oficiais exilados.` },
      { id: 'C', type: 'text', value: `interferência de potências mundiais.` },
      { id: 'D', type: 'text', value: `repressão de ativistas oposicionistas.` },
      { id: 'E', type: 'text', value: `implantação de governos nacionalistas.` },
    ],
    correct: 'D',
    explanation: `A Operação Condor foi uma ação internacional que contou com a gestão estadunidense e participação de todos os países onde houve intervenção militar na América. A intenção principal era montar um sistema de troca de informações para facilitar a inibição a repressão contra ações e, consequentemente pessoas, não condizentes com a política ditatorial dos países envolvidos.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A regulação das relações de trabalho compõe uma 
estrutura complexa, em que cada elemento se ajusta aos 
demais. A Justiça do Trabalho é apenas uma das peças 
dessa vasta engrenagem. A presença de representantes 
classistas na composição dos órgãos da Justiça do 
Trabalho é também resultante da montagem dessa 
regulação. O poder normativo também reflete essa 
característica. Instituída pela Constituição de 1934, a 
Justiça do Trabalho só vicejou no ambiente político do 
Estado Novo instaurado em 1937. 
ROMITA, A. S. Justiça do Trabalho: produto do Estado Novo. In: PANDOLFI, D. (Org.). 
Repensando o Estado Novo . Rio de Janeiro: Editora FGV, 1999. 
A criação da referida instituição estatal na conjuntura 
histórica abordada teve por objetivo`,
    alternatives: [
      { id: 'A', type: 'text', value: `legitimar os protestos fabris.` },
      { id: 'B', type: 'text', value: `ordenar os conflitos laborais.` },
      { id: 'C', type: 'text', value: `oficializar os sindicatos plurais.` },
      { id: 'D', type: 'text', value: `assegurar os princípios liberais.` },
      { id: 'E', type: 'text', value: `unificar os salários profissionais.` },
    ],
    correct: 'B',
    explanation: `O novo cenário que surgia no Brasil precisava de normas e padrões. Um modelo industrial desorganizado não rende. Levando em conta esse posicionamento e o fato de que a Justiça do Trabalho também iria trazer grande satisfação popular, Getúlio Vargas coloca para vigorar de maneira ativa e rígida tal legislação.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Hoje, a indústria cultural assumiu a herança civilizatória da democracia de pioneiros e empresários, que tampouco 
desenvolvera uma fineza de sentido para os desvios espirituais. Todos são livres para dançar e para se divertir, do 
mesmo modo que, desde a neutralização histórica da religião, são livres para entrar em qualquer uma das inúmeras 
seitas. Mas a liberdade de escolha da ideologia, que reflete sempre a coerção econômica, revela-se em todos os 
setores como a liberdade de escolher o que é sempre a mesma coisa. 
ADORNO, T; HORKHEIMER, M. Dialética do esclarecimento : fragmentos filosóficos. Rio de Janeiro: Zahar, 1985. 
A liberdade de escolha na civilização ocidental, de acordo com a análise do texto, é um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `legado social.` },
      { id: 'B', type: 'text', value: `patrimônio político.` },
      { id: 'C', type: 'text', value: `produto da moralidade.` },
      { id: 'D', type: 'text', value: `conquista da humanidade.` },
      { id: 'E', type: 'text', value: `ilusão da contemporaneidade.` },
    ],
    correct: 'E',
    explanation: `O filósofo e sociólogo Adorno possui uma visão bem crítica acerca da sociedade ocidental capitalista. Para ele, o capitalismo modificou os aspectos da cultura, tornando-a mais um objeto de consumo. Neste sentido, aspectos tradicionais da cultura são trocados por “produtos vendáveis” que estão presentes em todas as formas de lazer e entretenimento do sujeito contemporâneo, nas músicas, livros, entre outros. Adorno vai defender que a liberdade de escolha é algo que acaba sendo imposto, visto que a sociedade encaminha o indivíduo a gostar das mesmas coisas (cultura de massa).`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Parceria Transpacífica 
Japão 
Vietnã 
Cingapura 
Brunei Darussalam 
Malásia 
Austrália 
Nova Zelândia 
Dentro das atuais redes produtivas, o referido bloco apresenta composição estratégica por se tratar de um conjunto 
de países com`,
    images: ['/enem/2016/images/enem_2016_d1_q16.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elevado padrão social.` },
      { id: 'B', type: 'text', value: `sistema monetário integrado.` },
      { id: 'C', type: 'text', value: `alto desenvolvimento tecnológico.` },
      { id: 'D', type: 'text', value: `identidades culturais semelhantes.` },
      { id: 'E', type: 'text', value: `vantagens locacionais complementares.` },
    ],
    correct: 'E',
    explanation: `A parceria transpacífica é um acordo comercial estabelecido entre doze países banhados pelo Oceano Pacífico, com o objetivo principal de promover o crescimento econômico e, nesse sentido, a composição estratégica leva em consideração as vantagens locacionais dos países membros.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Disponível em: www.unric.org. Acesso em: 9 ago. 2013. 
A ONU faz referência a uma projeção cartográfica em seu 
logotipo. A figura que ilustra o modelo dessa projeção é:`,
    images: ['/enem/2016/images/enem_2016_d1_q17.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `O símbolo da ONU &#8211; Organização das Nações Unidas é uma representação baseada na projeção azimutal do globo, no qual o plano tangencia o globo no polo.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Segundo a Conferência de Quioto, os países 
centrais industrializados, responsáveis históricos pela 
poluição, deveriam alcançar a meta de redução de 
5,2% do total de emissões segundo níveis de 1990. 
O nó da questão é o enorme custo desse processo, 
demandando mudanças radicais nas indústrias para 
que se adaptem rapidamente aos limites de emissão 
estabelecidos e adotem tecnologias energéticas limpas. 
A comercialização internacional de créditos de sequestro 
ou de redução de gases causadores do efeito estufa 
foi a solução encontrada para reduzir o custo global do 
processo. Países ou empresas que conseguirem reduzir 
as emissões abaixo de suas metas poderão vender este 
crédito para outro país ou empresa que não consiga. 
BECKER, B. Amazônia : geopolítica na virada do II milênio. Rio de Janeiro: Garamond, 2009. 
As posições contrárias à estratégia de compensação 
presente no texto relacionam-se à ideia de que 
ela promove`,
    alternatives: [
      { id: 'A', type: 'text', value: `retração nos atuais níveis de consumo.` },
      { id: 'B', type: 'text', value: `surgimento de conflitos de caráter diplomático.` },
      { id: 'C', type: 'text', value: `diminuição dos lucros na produção de energia.` },
      { id: 'D', type: 'text', value: `desigualdade na distribuição do impacto ecológico.` },
      { id: 'E', type: 'text', value: `decréscimo 
dos 
índices 
de 
desenvolvimento 
econômico.` },
    ],
    correct: 'D',
    explanation: `O texto fala da contradição entre promover acordos internacionais de redução de poluentes e práticas que permitem a continuidade do processo de poluição, através da compra de créditos de carbono, que refere-se à aquisição do direito de poluir. Em resumo, o mundo continua assistindo à uma desigualdade na distribuição das áreas poluidoras, ou como a opção chamou, dos impactos ambientais.`,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Dados recentes mostram que muitos são os 
países periféricos que dependem dos recursos 
enviados pelos imigrantes que estão nos países 
centrais. Grande parte dos países da América Latina, 
por exemplo, depende hoje das remessas de seus 
imigrantes. Para se ter uma ideia mais concreta, 
recentes dados divulgados pela ONU revelaram 
que somente os indianos recebem 10 bilhões de 
dólares de seus compatriotas no exterior. No México, 
segundo maior volume de divisas, esse valor chega 
a 9,9 bilhões de dólares e nas Filipinas, o terceiro, a 
8,4 bilhões. 
HAESBAERT, R.; PORTO-GONÇALVES, C. W. A nova des-ordem mundial . 
São Paulo: Edunesp, 2006. 
Um aspecto do mundo globalizado que facilitou a 
ocorrência do processo descrito, na transição do 
século XX para o século XXI, foi o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `integração de culturas distintas.` },
      { id: 'B', type: 'text', value: `avanço técnico das comunicações.` },
      { id: 'C', type: 'text', value: `quebra de barreiras alfandegárias.` },
      { id: 'D', type: 'text', value: `flexibilização de regras trabalhistas.` },
      { id: 'E', type: 'text', value: `desconcentração espacial da produção.` },
    ],
    correct: 'B',
    explanation: `O advento do meio técnico científico-informacional se deu em função, fundamentalmente, dos avanços tecnológicos na produção e na comunicação. Nesse sentido, lugares distantes e distintos estão cada vez mais próximos face a velocidade com que a circulação no mundo atual ocorre, facilitando a remessa de recursos de um lugar para outro, independente da distância.`,
    subject: ['geo'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Nunca nos tornaremos matemáticos, por exemplo, 
embora nossa memória possua todas as demonstrações 
feitas por outros, se nosso espírito não for capaz de 
resolver toda espécie de problemas; não nos tornaríamos 
filósofos, por ter lido todos os raciocínios de Platão e 
Aristóteles, sem poder formular um juízo sólido sobre 
o que nos é proposto. Assim, de fato, pareceríamos ter 
aprendido, não ciências, mas histórias. 
DESCARTES, R. Regras para a orientação do espirito . São Paulo: Martins Fontes, 1999. 
Em sua busca pelo saber verdadeiro, o autor considera o 
conhecimento, de modo crítico, como resultado da`,
    alternatives: [
      { id: 'A', type: 'text', value: `investigação de natureza empírica.` },
      { id: 'B', type: 'text', value: `retomada da tradição intelectual.` },
      { id: 'C', type: 'text', value: `imposição de valores ortodoxos.` },
      { id: 'D', type: 'text', value: `autonomia do sujeito pensante.` },
      { id: 'E', type: 'text', value: `liberdade do agente moral.` },
    ],
    correct: 'D',
    explanation: `O filósofo Descartes foi considerado “pai” do racionalismo moderno por alterar a objetividade racional utilizada na Antiguidade. Para tal, o filósofo buscava uma metodologia específica na qual utilizava-se de uma dúvida hiperbólica em que chegava a um conhecimento inabalável. Sua teoria do cogito (“Penso logo existo’), demonstra a autonomia do homem enquanto ser racional.`,
    subject: ['fil'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Pois quem seria tão inútil ou indolente a ponto 
de não desejar saber como e sob que espécie de 
constituição os romanos conseguiram em menos de 
cinquenta e três anos submeter quase todo o mundo 
habitado ao seu governo exclusivo - fato nunca antes 
ocorrido? Ou, em outras palavras, quem seria tão 
apaixonadamente devotado a outros espetáculos ou 
estudos a ponto de considerar qualquer outro objetivo 
mais importante que a aquisição desse conhecimento? 
POLÍBIO. História. Brasília: Editora UnB, 1985. 
A experiência a que se refere o historiador Políbio, nesse 
texto escrito no século II a.C., é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação do contingente de camponeses livres.` },
      { id: 'B', type: 'text', value: `consolidação do poder das falanges hoplitas.` },
      { id: 'C', type: 'text', value: `concretização do desígnio imperialista.` },
      { id: 'D', type: 'text', value: `adoção do monoteísmo cristão.` },
      { id: 'E', type: 'text', value: `libertação do domínio etrusco.` },
    ],
    correct: 'C',
    explanation: `O texto mostra como a visão dos romanos sobre as demais áreas era de superioridade. O Império Romano em si começa apenas em 27 a.C. porém, a caminhada para tal feito já vinha sendo percorrida há muito tempo antes, como podemos perceber no texto apresentado.`,
    subject: ['his'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `SATRAPI, M. Persepolis . São Paulo: Cia. das Letras, 2007 (adaptado). 
A memória recuperada pela autora apresenta a 
relação entre`,
    images: ['/enem/2016/images/enem_2016_d1_q22.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `conflito trabalhista e engajamento sindical.` },
      { id: 'B', type: 'text', value: `organização familiar e proteção à infância.` },
      { id: 'C', type: 'text', value: `centralização econômica e pregação religiosa.` },
      { id: 'D', type: 'text', value: `estrutura educacional e desigualdade de renda.` },
      { id: 'E', type: 'text', value: `transformação política e modificação de costumes.` },
    ],
    correct: 'E',
    explanation: `A memória trata de conservar, adquirir e armazenar informações que fazem parte de algum momento retratado para um indivíduo. A questão faz menção a uma alteração política que foi vivida que gerou uma mudança cultural impactante num dado período.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Fragmento B91: Não se pode banhar duas vezes no 
mesmo rio, nem substância mortal alcançar duas vezes 
a mesma condição; mas pela intensidade e rapidez da 
mudança, dispersa e de novo reúne. 
HERÁCLITO. Fragmentos (Sobre a natureza) . São Paulo: Abril Cultural, 1996 (adaptado). 
TEXTO II 
Fragmento B8: São muitos os sinais de que o ser 
é ingênito e indestrutível, pois é compacto, inabalável 
e sem fim; não foi nem será, pois é agora um todo 
homogêneo, uno, contínuo. Como poderia o que é 
perecer? Como poderia gerar-se? 
PARMÊNIDES. Da natureza . São Paulo: Loyola, 2002 (adaptado). 
Os fragmentos do pensamento pré-socrático expõem 
uma oposição que se insere no campo das`,
    alternatives: [
      { id: 'A', type: 'text', value: `investigações do pensamento sistemático.` },
      { id: 'B', type: 'text', value: `preocupações do período mitológico.` },
      { id: 'C', type: 'text', value: `discussões de base ontológica.` },
      { id: 'D', type: 'text', value: `habilidades da retórica sofística.` },
      { id: 'E', type: 'text', value: `verdades do mundo sensível.` },
    ],
    correct: 'C',
    explanation: `Foram um grupo de filósofos que especularam sobre a origem do mundo e observaram a natureza como fonte de conhecimento. A teoria de Parmênides visava o imobilismo, enquanto a de Heráclito, o mobilismo. daí, encontramos a contradição teórica. Ontologia é um estudo voltado para o “ser”, portanto, cada um dos filósofos possui um posicionamento quanto ao papel do “ser” na natureza.`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A democracia deliberativa afirma que as partes 
do conflito político devem deliberar entre si e, por 
meio de argumentação razoável, tentar chegar a um 
acordo sobre as políticas que seja satisfatório para 
todos. A democracia ativista desconfia das exortações 
à deliberação por acreditar que, no mundo real da 
política, onde as desigualdades estruturais influenciam 
procedimentos e resultados, processos democráticos 
que parecem cumprir as normas de deliberação 
geralmente tendem a beneficiar os agentes mais 
poderosos. Ela recomenda, portanto, que aqueles que 
se preocupam com a promoção de mais justiça devem 
realizar principalmente a atividade de oposição crítica, 
em vez de tentar chegar a um acordo com quem sustenta 
estruturas de poder existentes ou delas se beneficia. 
YOUNG, I. M. Desafios ativistas à democracia deliberativa. 
Revista Brasileira de Ciência Politica , n. 13, jan.-abr. 2014. 
As concepções de democracia deliberativa e de 
democracia ativista apresentadas no texto tratam como 
imprescindíveis, respectivamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `a decisão da maioria e a uniformização de direitos.` },
      { id: 'B', type: 'text', value: `a organização de eleições e o movimento anarquista.` },
      { id: 'C', type: 'text', value: `a obtenção do consenso e a mobilização das minorias.` },
      { id: 'D', type: 'text', value: `a fragmentação da participação e a desobediência civil.` },
      { id: 'E', type: 'text', value: `a imposição de resistência e o monitoramento da 
liberdade.` },
    ],
    correct: 'C',
    explanation: `A democracia é conhecida como uma forma de governo em que o povo é detentor do poder. A democracia deliberativa foi criada por Habermas em que o debate público deveria ser feito para gerar um consenso sobre o melhor discurso (agir comunicativo), enquanto a democracia ativista busca uma mobilização social para que os indivíduos alcancem os seus direitos.`,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A promessa da tecnologia moderna se converteu 
em uma ameaça, ou esta se associou àquela de forma 
indissolúvel. Ela vai além da constatação da ameaça 
física. Concebida para a felicidade humana, a submissão 
da natureza, na sobremedida de seu sucesso, que agora 
se estende à própria natureza do homem, conduziu 
ao maior desafio já posto ao ser humano pela sua 
própria ação. O novo continente da práxis coletiva que 
adentramos com a alta tecnologia ainda constitui, para a 
teoria ética, uma terra de ninguém. 
JONAS, H. O princípio da responsabilidade . Rio de Janeiro: 
Contraponto; Editora PUC-Rio, 2011 (adaptado). 
As implicações éticas da articulação apresentada no texto 
impulsionam a necessidade de construção de um novo 
padrão de comportamento, cujo objetivo consiste em 
garantir o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `pragmatismo da escolha individual.` },
      { id: 'B', type: 'text', value: `sobrevivência de gerações futuras.` },
      { id: 'C', type: 'text', value: `fortalecimento de políticas liberais.` },
      { id: 'D', type: 'text', value: `valorização de múltiplas etnias.` },
      { id: 'E', type: 'text', value: `promoção da inclusão social.` },
    ],
    correct: 'B',
    explanation: `A bioética ocupa-se em estudar o impacto de práticas biológicas que despertam disparidades morais. A noção de sustentabilidade surge da preocupação com o uso exacerbado de tecnologias nas sociedades atuais. Portanto, há uma maior preocupação quanto ao que vai acontecer com as próximas gerações.`,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Imagem de São Benedito . Disponível em: http://acervo.bndigital.bn.br. 
 Acesso em: 6 jan. 2016 (adaptado). 
TEXTO II 
Os santos tornaram-se grandes aliados da Igreja para 
atrair novos devotos, pois eram obedientes a Deus e ao 
poder clerical. Contando e estimulando o conhecimento 
sobre a vida dos santos, a Igreja transmitia aos fiéis os 
ensinamentos que julgava corretos e que deviam ser 
imitados por escravos que, em geral, traziam outras 
crenças de suas terras de origem, muito diferentes das 
que preconizava a fé católica. 
OLIVEIRA, A. J. Negra devoção. Revista de História da Biblioteca Nacional , 
 n. 20, maio 2007 (adaptado). 
Posteriormente ressignificados no interior de certas 
irmandades e no contato com outra matriz religiosa, o 
ícone e a prática mencionada no texto estiveram desde 
o século XVII relacionados a um esforço da Igreja 
Católica para`,
    images: ['/enem/2016/images/enem_2016_d1_q26.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `reduzir o poder das confrarias.` },
      { id: 'B', type: 'text', value: `cristianizar a população afro-brasileira.` },
      { id: 'C', type: 'text', value: `espoliar recursos materiais dos cativos.` },
      { id: 'D', type: 'text', value: `recrutar libertos para seu corpo eclesiástico.` },
      { id: 'E', type: 'text', value: `atender a demanda popular por padroeiros locais.` },
    ],
    correct: 'B',
    explanation: `A evangelização dos escravizados na América foi um processo complexo e multifacetado. A adoção de santos negros era uma parte importante desse processo, pois proporcionava uma conexão visual e cultural com a população escravizada. Ao passo que, a Igreja usava esses santos como uma maneira de promover o cristianismo e seus valores, ao mesmo tempo em que tentava suprimir as crenças e tradições africanas. Esse processo tinha como objetivo final consolidar o controle da Igreja e da sociedade colonial sobre os escravizados.`,
    subject: ['his'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Em 1935, o governo brasileiro começou a negar vistos 
a judeus. Posteriormente, durante o Estado Novo, uma 
circular secreta proibiu a concessão de vistos a “pessoas 
de origem semita”, inclusive turistas e negociantes, o que 
causou uma queda de 75% da imigração judaica ao longo 
daquele ano. Entretanto, mesmo com as imposições da 
lei, muitos judeus continuaram entrando ilegalmente no 
país durante a guerra e as ameaças de deportação em 
massa nunca foram concretizadas, apesar da extradição 
de alguns indivíduos por sua militância política. 
GRIMBERG, K. Nova língua interior: 500 anos de história dos judeus no Brasil. In: IBGE. 
Brasil : 500 anos de povoamento. Rio de Janeiro: IBGE, 2000 (adaptado). 
Uma razão para a adoção da política de imigração 
mencionada no texto foi o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `receio do controle sionista sobre a economia nacional.` },
      { id: 'B', type: 'text', value: `reserva de postos de trabalho para a mão de obra 
local.` },
      { id: 'C', type: 'text', value: `oposição do clero católico à expansão de novas 
religiões.` },
      { id: 'D', type: 'text', value: `apoio da diplomacia varguista às opiniões dos 
líderes árabes.` },
      { id: 'E', type: 'text', value: `simpatia de membros da burocracia pelo projeto 
totalitário alemão.` },
    ],
    correct: 'E',
    explanation: `Getúlio Vargas sofre grande influência Fascista, além de ter altos vínculos econômicos com a Alemanha Nazista. A nossa CLT foi claramente inspirada na Carta del Lavoro, de Benito Mussolini. O forte contato com estes domínios totalitários nos trás alguns reflexos, sendo um deles, a política de aversão a Judeus. Mas não pense que Getúlio ficava só com eles, pois, também tinha alto contato com os EUA. Vargas foi uma pessoa extremamente flexível em suas opiniões políticas.`,
    subject: ['his'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Pirro afirmava que nada é nobre nem vergonhoso, 
justo ou injusto; e que, da mesma maneira, nada existe do 
ponto de vista da verdade; que os homens agem apenas 
segundo a lei e o costume, nada sendo mais isto do que 
aquilo. Ele levou uma vida de acordo com esta doutrina, 
nada procurando evitar e não se desviando do que quer 
que fosse, suportando tudo, carroças, por exemplo, 
precipícios, cães, nada deixando ao arbítrio dos sentidos. 
LAÉRCIO, D. Vidas e sentenças dos filósofos ilustres . Brasília: Editora UnB, 1988. 
O ceticismo, conforme sugerido no texto, caracteriza-se por:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Desprezar quaisquer convenções e obrigações 
da sociedade.` },
      { id: 'B', type: 'text', value: `Atingir o verdadeiro prazer como o princípio e o 
fim da vida feliz.` },
      { id: 'C', type: 'text', value: `Defender a indiferença e a impossibilidade de 
obter alguma certeza.` },
      { id: 'D', type: 'text', value: `Aceitar o determinismo e ocupar-se com a 
esperança transcendente.` },
      { id: 'E', type: 'text', value: `Agir de forma virtuosa e sábia a fim de enaltecer o 
homem bom e belo.` },
    ],
    correct: 'C',
    explanation: `O ceticismo é uma corrente de conhecimento que defende que o homem não é capaz de alcançar nenhuma certeza sobre a verdade, o que causa uma dúvida constante e uma incapacidade de conhecer qualquer tema.`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O conceito de função social da cidade incorpora a 
organização do espaço físico como fruto da regulação 
social, isto é, a cidade deve contemplar todos os seus 
moradores e não somente aqueles que estão no mercado 
formal da produção capitalista da cidade. A tradição dos 
códigos de edificação, uso e ocupação do solo no Brasil 
sempre partiram do pressuposto de que a cidade não tem 
divisões entre os incluídos e os excluídos socialmente. 
QUINTO JR., L. P. Nova legislação urbana e os velhos fantasmas. 
Estudos Avançados (USP) , n. 47, 2003 (adaptado). 
Uma política governamental que contribui para viabilizar a 
função social da cidade, nos moldes indicados no texto, é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `qualificação 
de 
serviços 
públicos 
em 
bairros 
periféricos.` },
      { id: 'B', type: 'text', value: `implantação de centros comerciais em eixos 
rodoviários.` },
      { id: 'C', type: 'text', value: `proibição de construções residenciais em regiões 
íngremes.` },
      { id: 'D', type: 'text', value: `disseminação de equipamentos culturais em locais 
turísticos.` },
      { id: 'E', type: 'text', value: `desregulamentação do setor imobiliário em áreas 
favelizadas.` },
    ],
    correct: 'A',
    explanation: `A ideia central da questão fala em criar um espaço urbano que seja capaz de reduzir o efeito da desigualdade entre as populações com diferentes rendas e, com isso, a saída para se chegar a tal nível é conseguir garantir às periferias uma melhor condição de vida. A opção correta fala em melhorar a oferta de serviços em áreas periféricas.`,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O bioma Cerrado foi considerado recentemente 
um dos 25 hotspots de biodiversidade do mundo, 
segundo uma análise em escala mundial das regiões 
biogeográficas sobre áreas globais prioritárias para 
conservação. O conceito de hotspot foi criado tendo 
em vista a escassez de recursos direcionados para 
conservação, com o objetivo de apresentar os chamados 
“pontos quentes”, ou seja, locais para os quais existe 
maior necessidade de direcionamento de esforços, 
buscando evitar a extinção de muitas espécies que 
estão altamente ameaçadas por ações antrópicas. 
PINTO, P. P.; DINIZ-FILHO, J. A. F. In: ALMEIDA, M. G. (Org.). Tantos cerrados : 
múltiplas abordagens sobre a biogeodiversidade e singularidade cultural. 
Goiânia: Vieira, 2005 (adaptado). 
A necessidade desse tipo de ação na área mencionada 
tem como causa a`,
    alternatives: [
      { id: 'A', type: 'text', value: `intensificação da atividade turística.` },
      { id: 'B', type: 'text', value: `implantação de parques ecológicos.` },
      { id: 'C', type: 'text', value: `exploração dos recursos minerais.` },
      { id: 'D', type: 'text', value: `elevação do extrativismo vegetal.` },
      { id: 'E', type: 'text', value: `expansão da fronteira agrícola.` },
    ],
    correct: 'E',
    explanation: `O cerrado brasileiro (nosso bioma do tipo savana) vem passando por um intenso processo de desmatamento desde a segunda metade do século XX. A atividade que gerou tamanho impacto ambiental foi a chegada da soja ao Centro-Oeste, por isso, a opção que aponta corretamente a causa do desmatamento é a que aborda a expansão da fronteira agrícola.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Mais de 50 mil refugiados entraram no território 
húngaro apenas no primeiro semestre de 2015. 
Budapeste lançou os “trabalhos preparatórios” para a 
construção de um muro de quatro metros de altura e 
175 km ao longo de sua fronteira com a Sérvia, informou 
o ministro húngaro das Relações Exteriores. “Uma 
resposta comum da União Europeia a este desafio da 
imigração é muito demorada, e a Hungria não pode 
esperar. Temos que agir”, justificou o ministro. 
Disponível em: www.português.rfi.fr. Acesso em: 19 jun. 2015 (adaptado). 
TEXTO II 
O Alto Comissariado das Nações Unidas para 
Refugiados (ACNUR) critica as manifestações de 
xenofobia adotadas pelo governo da Hungria. O país foi 
invadido por cartazes nos quais o chefe do executivo insta 
os imigrantes a respeitarem as leis e a não “roubarem” 
os empregos dos húngaros. Para o ACNUR, a medida é 
surpreendente, pois a xenofobia costuma ser instigada 
por pequenos grupos radicais e não pelo próprio governo 
do país. 
Disponível em: http://pt.euronews.com. Acesso em: 19 jun. 2015 (adaptado). 
O posicionamento governamental citado nos textos é 
criticado pelo ACNUR por ser considerado um caminho 
para o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `alteração do regime político.` },
      { id: 'B', type: 'text', value: `fragilização da supremacia nacional.` },
      { id: 'C', type: 'text', value: `expansão dos domínios geográficos.` },
      { id: 'D', type: 'text', value: `cerceamento da liberdade de expressão.` },
      { id: 'E', type: 'text', value: `fortalecimento das práticas de discriminação.` },
    ],
    correct: 'E',
    explanation: `No contexto atual, a imigração dos refugiados tem sido uma grande questão, principalmente nos países europeus. Nesse sentido, alguns governos têm assumido uma postura contrária a entrada destes. A estratégia adotada pela Hungria na construção do muro institucionaliza o sentimento de xenofobia, que comumente é associado a uma pequena parcela da população.`,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A sociologia ainda não ultrapassou a era das 
construções e das sínteses filosóficas. Em vez de 
assumir a tarefa de lançar luz sobre uma parcela restrita 
do campo social, ela prefere buscar as brilhantes 
generalidades em que todas as questões são levantadas 
sem 
que 
nenhuma 
seja 
expressamente 
tratada. 
Não é com exames sumários e por meio de intuições 
rápidas que se pode chegar a descobrir as leis de uma 
realidade tão complexa. Sobretudo, generalizações às 
vezes tão amplas e tão apressadas não são suscetíveis 
de nenhum tipo de prova. 
DURKHEIM, E. O suicídio : estudo de sociologia. São Paulo: Martins Fontes, 2000. 
O texto expressa o esforço de Émile Durkheim em 
construir uma sociologia com base na`,
    alternatives: [
      { id: 'A', type: 'text', value: `vinculação com a filosofia como saber unificado.` },
      { id: 'B', type: 'text', value: `reunião de percepções intuitivas para demonstração.` },
      { id: 'C', type: 'text', value: `formulação de hipóteses subjetivas sobre a vida 
social.` },
      { id: 'D', type: 'text', value: `adesão aos padrões de investigação típicos das
ciências naturais.` },
      { id: 'E', type: 'text', value: `incorporação de um conhecimento alimentado pelo 
engajamento político.` },
    ],
    correct: 'D',
    explanation: `Durkheim, assim como os demais sociólogos de sua época, buscava fazer da sociologia uma disciplina científica, visto que seria através desta análise que o homem compreenderia melhor a sociedades e os impactos por ela sofridos. Esse pensamento foi inspirado na visão positivista de Auguste Comte em fazer da disciplina uma ciência.`,
    subject: ['fil'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Disponível em: www.imageforum-diffusion.afp.com. Acesso em: 6 jan. 2016. 
O regime do Apartheid adotado de 1948 a 1994 na 
África do Sul fundamentava-se em ações estatais de 
segregacionismo racial. Na imagem, fuzileiros navais 
fazem valer a “lei do passe” que regulamentava o(a)`,
    images: ['/enem/2016/images/enem_2016_d1_q33.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `concentração fundiária, impedindo os negros de 
tomar posse legítima do uso da terra.` },
      { id: 'B', type: 'text', value: `boicote econômico, proibindo os negros de consumir 
produtos ingleses sem resistência armada.` },
      { id: 'C', type: 'text', value: `sincretismo religioso, vetando os ritos sagrados dos 
negros nas cerimônias oficiais do Estado.` },
      { id: 'D', type: 'text', value: `controle sobre a movimentação, desautorizando 
os negros a transitar em determinadas áreas das 
cidades.` },
      { id: 'E', type: 'text', value: `exclusão do mercado de trabalho, negando à 
população negra o acesso aos bens de consumo.` },
    ],
    correct: 'D',
    explanation: `Tendo sido colônia holandesa e depois britânica durante a movimentação neocolonialista, a África do Sul mesmo após sua independência permanece com cicatrizes da visão etnocêntrica dos europeus. A Lei do passe proibia a circulação de negros em determinados locais frequentados por brancos.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A linhagem dos primeiros críticos ambientais 
brasileiros não praticou o elogio laudatório da beleza e 
da grandeza do meio natural brasileiro. O meio natural foi 
elogiado por sua riqueza e potencial econômico, sendo 
sua destruição interpretada como um signo de atraso, 
ignorância e falta de cuidado. 
PÁDUA, J. A. Um sopro de destruição : pensamento político e crítica ambiental no Brasil 
escravista (1786-1888). Rio de Janeiro: Zahar, 2002 (adaptado). 
Descrevendo a posição dos críticos ambientais brasileiros 
dos séculos XVIII e XIX, o autor demonstra que, via de 
regra, eles viam o meio natural como`,
    alternatives: [
      { id: 'A', type: 'text', value: `ferramenta essencial para o avanço da nação.` },
      { id: 'B', type: 'text', value: `dádiva divina para o desenvolvimento industrial.` },
      { id: 'C', type: 'text', value: `paisagem privilegiada para a valorização fundiária.` },
      { id: 'D', type: 'text', value: `limitação topográfica para a promoção da urbanização.` },
      { id: 'E', type: 'text', value: `obstáculo climático para o estabelecimento da 
civilização.` },
    ],
    correct: 'A',
    explanation: `A consciência ambiental é um pensamento relativamente novo, não só no Brasil, e a ideia de exploração da natureza era claramente associada ao ideal de crescimento econômico, como o texto abordou, portanto, a interpretação do texto permite associar a ideia de exploração da natureza com o avanço da nação.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O coronelismo era fruto de alteração na relação de forças entre os proprietários rurais e o governo, e significava o 
fortalecimento do poder do Estado antes que o predomínio do coronel. Nessa concepção, o coronelismo é, então, um 
sistema político nacional, com base em barganhas entre o governo e os coronéis. O coronel tem o controle dos cargos 
públicos, desde o delegado de polícia até a professora primária. O coronel hipoteca seu apoio ao governo, sobretudo 
na forma de voto. 
CARVALHO, J. M. Pontos e bordados : escritos de história política. Belo Horizonte: Editora UFMG, 1998 (adaptado). 
No contexto da Primeira República no Brasil, as relações politicas descritas baseavam-se na`,
    alternatives: [
      { id: 'A', type: 'text', value: `coação das milícias locais.` },
      { id: 'B', type: 'text', value: `estagnação da dinâmica urbana.` },
      { id: 'C', type: 'text', value: `valorização do proselitismo partidário.` },
      { id: 'D', type: 'text', value: `disseminação de práticas clientelistas.` },
      { id: 'E', type: 'text', value: `centralização de decisões administrativas.` },
    ],
    correct: 'D',
    explanation: `A prática Clientelista orienta-se na concessão de &#8220;privilégios&#8221; a população que, em troca, concedia seus votos. Neste sistema o estado deixava de agir regionalmente, deixando para o Coronel o controle de determinada localidade (extra-oficialmente). A população, obsoleta de direitos, contava com a &#8220;ajuda&#8221; de seu &#8220;padrinho&#8221;, o Coronel, e em troca lhe garantia ao menos o voto em seu candidato ofertado.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Dessalinização das águas 
Capacidade total de dessalinização das águas salobras ou salinas (por país em metros cúbicos por dia) 
Espanha 
2 588 658 
Estados Unidos 
5 653 941 
Capacidade instalada (m³/dia): 
5 001 a 50 000 
50 001 a 500 000 
500 001 a 1 000 000 
acima de 1 000 000 
Conforme a análise do documento cartográfico, a área de concentração das usinas de dessalinização é 
explicada pelo(a)`,
    images: ['/enem/2016/images/enem_2016_d1_q36.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `pioneirismo tecnológico.` },
      { id: 'B', type: 'text', value: `condição hidropedológica.` },
      { id: 'C', type: 'text', value: `escassez de água potável.` },
      { id: 'D', type: 'text', value: `efeito das mudanças climáticas.` },
      { id: 'E', type: 'text', value: `busca da sustentabilidade ambiental. Japão 1 054 274 Emirados Árabes Unidos 6 228 017 Arábia Saudita 6 879 869 Kuwait 2 111 558 EUA.` },
    ],
    correct: 'C',
    explanation: `A questão pede que se destaque o espaço do globo que apresenta a maior ocorrência do processo de dessalinização. A análise do mapa indica que o Oriente Médio, Norte da África e parte da Europa apresentam os níveis mais altos. Nesse sentido, a região do mundo com maior ocorrência do processo é aquela que apresenta escassez de água potável, uma vez que a maior parte das áreas que utilizam o processo são desérticas.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Vi os homens sumirem-se numa grande tristeza. 
Os melhores cansaram-se das suas obras. Proclamou-se 
uma doutrina e com ela circulou uma crença: Tudo é 
oco, tudo é igual, tudo passou! O nosso trabalho foi 
inútil; o nosso vinho tornou-se veneno; o mau olhado 
amareleceu-nos os campos e os corações. Secamos 
de todo, e se caísse fogo em cima de nós, as nossas 
cinzas voariam em pó. Sim; cansamos o próprio fogo. 
Todas as fontes secaram para nós, e o mar retirou-se. 
Todos os solos se querem abrir, mas os abismos não 
nos querem tragar! 
NIETZSCHE, F. Assim falou Zaratustra . Rio de Janeiro: Ediouro, 1977. 
O texto exprime uma construção alegórica, que traduz um 
entendimento da doutrina niilista, uma vez que`,
    alternatives: [
      { id: 'A', type: 'text', value: `reforça a liberdade do cidadão.` },
      { id: 'B', type: 'text', value: `desvela os valores do cotidiano.` },
      { id: 'C', type: 'text', value: `exorta as relações de produção.` },
      { id: 'D', type: 'text', value: `destaca a decadência da cultura.` },
      { id: 'E', type: 'text', value: `amplifica o sentimento de ansiedade.` },
    ],
    correct: 'D',
    explanation: `O pensamento niilista de Nietzsche faz parte de sua doutrina teórica que trata sobre uma visão negativa e pessimista sobre qualquer situação ou realidade. Consiste na negação de vários princípios, causando essa visão decadente sobre a sociedade na qual se está inserido.`,
    subject: ['fil'],
    topics: ['Filosofia Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O Cruzeiro , década de 1960. Disponível em: www.memoriaviva.com.br. 
Acesso em: 28 fev. 2012 (adaptado). 
No anúncio, há referências a algumas das transformações 
ocorridas no Brasil nos anos 1950 e 1960. No entanto, 
tais referências omitem transformações que impactaram 
segmentos da população, como a`,
    images: ['/enem/2016/images/enem_2016_d1_q38.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `exaltação da tradição colonial.` },
      { id: 'B', type: 'text', value: `redução da influência estrangeira.` },
      { id: 'C', type: 'text', value: `ampliação da imigração internacional.` },
      { id: 'D', type: 'text', value: `intensificação da desigualdade regional.` },
      { id: 'E', type: 'text', value: `desconcentração da produção industrial.` },
    ],
    correct: 'D',
    explanation: `Neste momento o Brasil vivia o tripé econômico, onde o capital estatal ficava para indústria de base, o capital privado estrangeiro era direcionado para os bens duráveis, enquanto o capital nacional fica para os bens de não-duráveis, os menos rentáveis. A grande verdade é que a economia está girando, porém, não há uma preocupação com distribuição de renda e a maior parte do lucro é direcionado a empresas estrangeiras. Além de Juscelino obter uma série de empréstimos internacionais.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Pesca industrial provoca destruição na África 
O 
súbito 
desaparecimento 
do 
bacalhau 
dos 
grandes cardumes da Terra Nova, no final do século XX 
- o que ninguém havia previsto -, teve o efeito de 
um eletrochoque planetário. Lançada pelos bascos 
no século XV, a pesca e depois a sobrepesca desse 
grande peixe de água fria levaram ao impensável. 
Ao Canadá o bacalhau nunca mais voltou. E o que 
ocorreu no Atlântico Norte está acontecendo em outros 
mares. Os maiores navios do mundo seguem agora 
em direção ao sul, até os limites da Antártida, para 
competir pelos estoques remanescentes. 
MORA, J. S. Disponível em: www.diplomatique.com.br. Acesso em: 14 jan. 2014. 
O problema exposto no texto jornalístico relaciona-se à`,
    alternatives: [
      { id: 'A', type: 'text', value: `insustentabilidade do modelo de produção e consumo.` },
      { id: 'B', type: 'text', value: `fragilidade ecológica de ecossistemas costeiros.` },
      { id: 'C', type: 'text', value: `inviabilidade comercial dos produtos marinhos.` },
      { id: 'D', type: 'text', value: `mudança natural nos oceanos e mares.` },
      { id: 'E', type: 'text', value: `vulnerabilidade social de áreas pobres.` },
    ],
    correct: 'A',
    explanation: `O modelo de consumo atual exige uma expansão da produção em níveis elevados que compromete a existência de recursos naturais para as gerações futuras.`,
    subject: ['geo'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A mundialização introduz o aumento da produtividade 
do trabalho sem acumulação de capital, justamente 
pelo caráter divisível da forma técnica molecular-digital 
do que resulta a permanência da má distribuição da 
renda: exemplificando mais uma vez, os vendedores 
de refrigerantes às portas dos estádios viram sua 
produtividade aumentada graças ao just in time dos 
fabricantes e distribuidores de bebidas, mas para realizar 
o valor de tais mercadorias, a forma do trabalho dos 
vendedores é a mais primitiva. Combinam-se, pois, 
acumulação molecular-digital com o puro uso da força 
de trabalho. 
OLIVEIRA, F. Crítica à razão dualista e o ornitorrinco . Campinas: Boitempo, 2003. 
Os aspectos destacados no texto afetam diretamente 
questões como emprego e renda, sendo possível explicar 
essas transformações pelo(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `crise bancária e o fortalecimento do capital industrial.` },
      { id: 'B', type: 'text', value: `inovação toyotista e a regularização do trabalho 
formal.` },
      { id: 'C', type: 'text', value: `impacto da tecnologia e as modificações na 
estrutura produtiva.` },
      { id: 'D', type: 'text', value: `emergência da globalização e a expansão do 
setor secundário.` },
      { id: 'E', type: 'text', value: `diminuição do tempo de trabalho e a necessidade de 
diploma superior.` },
    ],
    correct: 'C',
    explanation: `O texto fala sobre o processo de desenvolvimento de novas lógicas de tecnologia e de localização industrial, típica do toyotismo e da terceira revolução industrial. Outro ponto bastante claro no texto é o fato da modernização industrial não ter promovido uma distribuição de renda e nem uma alteração das formas de trabalho. O enunciado pede os processos que geraram a situação descrita, logo, o advento de novas tecnologias e a reestruturação da indústria e da forma de produzir, constantemente atendendo à demanda de mercado.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Ser moderno é encontrar-se em um ambiente 
que promete aventura, poder, alegria, crescimento, 
autotransformação e transformação das coisas em 
redor - mas ao mesmo tempo ameaça destruir tudo 
o que temos, tudo o que sabemos, tudo o que somos. 
A experiência ambiental da modernidade anula todas as 
fronteiras geográficas e raciais, de classe e nacionalidade: 
nesse sentido, pode-se dizer que a modernidade une a 
espécie humana. Porém, é uma unidade paradoxal, uma 
unidade de desunidade. 
BERMAN, M. Tudo que é sólido desmancha no ar : a aventura da modernidade. 
 São Paulo: Cia. das Letras, 1986 (adaptado). 
O texto apresenta uma interpretação da modernidade que 
a caracteriza como um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `dinâmica social contraditória.` },
      { id: 'B', type: 'text', value: `interação coletiva harmônica.` },
      { id: 'C', type: 'text', value: `fenômeno econômico estável.` },
      { id: 'D', type: 'text', value: `sistema internacional decadente.` },
      { id: 'E', type: 'text', value: `processo histórico homogeneizador.` },
    ],
    correct: 'A',
    explanation: `O texto expõe duas versões da modernidade: uma positiva e outra negativa. A positiva é associada a alegria e a transformação do sujeito e das coisas ao seu redor. A negativa é associada às destruições causadas pelo homem, a partir dessas transformações. Neste sentido, concluímos que a modernidade possui uma dinâmica social contraditória, na medida em que una a espécie humana, mas ao mesmo tempo em que a destrói.`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Não estou mais pensando como costumava pensar. 
Percebo isso de modo mais acentuado quando estou 
lendo. Mergulhar num livro, ou num longo artigo, 
costumava ser fácil. Isso raramente ocorre atualmente. 
Agora minha atenção começa a divagar depois de duas 
ou três páginas. Creio que sei o que está acontecendo. 
Por mais de uma década venho passando mais tempo 
on-line , procurando e surfando e algumas vezes 
acrescentando informação à grande biblioteca da 
internet. A internet tem sido uma dádiva para um escritor 
como eu. Pesquisas que antes exigiam dias de procura 
em jornais ou na biblioteca agora podem ser feitas em 
minutos. Como disse o teórico da comunicação Marshall 
McLuhan nos anos 60, a mídia não é apenas um canal 
passivo para o tráfego de informação. Ela fornece a 
matéria, mas também molda o processo de pensamento. 
E o que a net parece fazer é pulverizar minha capacidade 
de concentração e contemplação. 
CARR, N. Is Google making us stupid? Disponível em: www.theatlantic.com. 
Acesso em: 17 fev. 2013 (adaptado). 
Em relação à internet, a perspectiva defendida pelo autor 
ressalta um paradoxo que se caracteriza por`,
    alternatives: [
      { id: 'A', type: 'text', value: `associar uma experiência superficial à abundância 
de informações.` },
      { id: 'B', type: 'text', value: `condicionar 
uma 
capacidade 
individual 
à 
desorganização da rede.` },
      { id: 'C', type: 'text', value: `agregar uma tendência contemporânea à aceleração 
do tempo.` },
      { id: 'D', type: 'text', value: `aproximar uma mídia inovadora à passividade da 
recepção.` },
      { id: 'E', type: 'text', value: `equiparar uma ferramenta digital à tecnologia 
analógica.` },
    ],
    correct: 'A',
    explanation: `Na sociedade contemporânea, o indivíduo torna-se condicionado àquilo que lê e ao excesso de informação que recebe. Diante disso, há uma superficialidade quanto o que é absorvido. O paradoxo trata da dificuldade em conviver com a informação e com a superficialidade do que está sendo aprendido.`,
    subject: ['soc'],
    topics: ['Figuras de linguagem', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Uma scena franco-brazileira: “franco” - pelo local e os 
personagens, o local que é Paris e os personagens que 
são pessôas do povo da grande capital; “brazileira” pelo 
que ahi se está bebendo: café do Brazil. O Lettreiro diz 
a verdade apregoando que esse é o melhor de todos os 
cafés. (Essa página foi desenhada especialmente para 
A Illustração Brazileira pelo Sr. Tofani, desenhista do 
Je Sais Tout .) 
A Illustração Brazileira , n. 2, 15 jun. 1909 (adaptado). 
A página do periódico do início do século XX documenta 
um importante elemento da cultura francesa, que é 
revelador do papel do Brasil na economia mundial, 
indicado no seguinte aspecto:`,
    images: ['/enem/2016/images/enem_2016_d1_q43.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Prestador de serviços gerais.` },
      { id: 'B', type: 'text', value: `Exportador de bens industriais.` },
      { id: 'C', type: 'text', value: `Importador de padrões estéticos.` },
      { id: 'D', type: 'text', value: `Fornecedor de produtos agrícolas.` },
      { id: 'E', type: 'text', value: `Formador de padrões de consumo.` },
    ],
    correct: 'D',
    explanation: `A imagem destaca o café brasileiro em Paris. Devemos lembrar que após o declínio da exploração de ouro no Brasil, gradativamente o café torna-se nosso principal produto de exportação, tendo como principal cliente a Europa e o EUA. Até hoje o Brasil é um grande exportador deste produto.`,
    subject: ['fil'],
    topics: ['Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Participei de uma entrevista com o músico Renato Teixeira. Certa hora, alguém pediu para listar as 
diferenças entre a música sertaneja antiga e a atual. A resposta dele surpreendeu a todos: "Não há diferença 
alguma. A música caipira sempre foi a mesma. É uma música que espelha a vida do homem no campo, e a 
música não mente. O que mudou não foi a música, mas a vida no campo”. Faz todo sentido: a música caipira 
de raiz exalava uma solidão, um certo distanciamento do país “moderno”. Exigir o mesmo de uma música feita 
hoje, num interior conectado, globalizado e rico como o que temos, é impossível. Para o bem ou para o mal, a 
música reflete seu próprio tempo. 
BARCINSKI, A. Mudou a música ou mudaram os caipiras? Folha de São Paulo, 4 jun. 2012 (adaptado). 
A questão cultural indicada no texto ressalta o seguinte aspecto socioeconômico do atual campo brasileiro:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Crescimento do sistema de produção extensiva.` },
      { id: 'B', type: 'text', value: `Expansão de atividades das novas ruralidades.` },
      { id: 'C', type: 'text', value: `Persistência de relações de trabalho compulsório.` },
      { id: 'D', type: 'text', value: `Contenção da política de subsídios agrícolas.` },
      { id: 'E', type: 'text', value: `Fortalecimento do modelo de organização cooperativa.` },
    ],
    correct: 'B',
    explanation: `O texto procura retratar as transformações ocorridas no estilo musical (caipira &#8211; sertaneja) a partir das transformações no espaço rural. Portanto, se a música sertaneja mudou, o próprio meio rural mudou, agregando tecnologias e novas práticas. Essa ideia está expressa na opção que fala de novas ruralidades.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O número de filhos por casal diminui rapidamente. Para a maioria
dos economistas, isso representa um alerta para o futuro.
Taxa de fecundidade total (Brasil, China, Coreia do Sul, Portugal, EUA e Japão, 1970-2010)
Fontes: IBGE e OCDE.
Disponível em: http://epoca.globo.com. Acesso em: 20 out. 2015 (adaptado).
Uma consequência socioeconômica para os países que vivenciam o fenômeno demográfico ilustrado é a
diminuição da`,
    images: ['/enem/2016/images/enem_2016_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `oferta de mão de obra nacional.` },
      { id: 'B', type: 'text', value: `média de expectativa de vida.` },
      { id: 'C', type: 'text', value: `disponibilidade de serviços de saúde.` },
      { id: 'D', type: 'text', value: `despesa de natureza previdenciária.` },
      { id: 'E', type: 'text', value: `imigração de trabalhadores qualificados.` },
    ],
    correct: 'A',
    explanation: `O gráfico mostra a clara redução do número de filhos por mulher em idade ativa (taxa de fecundidade), chegando a taxas menores que 2, logo, não cobrindo a taxa de reposição média da população. Em um cenário desse, as consequências mais diretas são: redução da mão de obra e do mercado consumidor e a crise no setor previdenciário. Como o enunciado pergunta claramente, qual é o processo que está reduzindo, a resposta fala em redução da oferta da mão de obra.`,
    subject: ['geo'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Em sua formulação, o spray de pimenta contém 
porcentagens variadas de oleorresina de Capsicum , 
cujo princípio ativo é a capsaicina, e um solvente 
(um álcool como etanol ou isopropanol). Em contato 
com os olhos, pele ou vias respiratórias, a capsaicina 
causa um efeito infl amatório que gera uma sensação de 
dor e ardor, levando à cegueira temporária. O processo 
é desencadeado pela liberação de neuropeptídios das 
terminações nervosas. 
Como funciona o gás de pimenta . Disponível em: http://pessoas.hsw.uol.com.br. 
 Acesso em: 1 mar. 2012 (adaptado). 
Quando uma pessoa é atingida com o spray de pimenta 
nos olhos ou na pele, a lavagem da região atingida com 
água é ineﬁ caz porque a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `reação entre etanol e água libera calor, intensiﬁ cando 
o ardor.` },
      { id: 'B', type: 'text', value: `solubilidade do princípio ativo em água é muito baixa, 
diﬁ cultando a sua remoção.` },
      { id: 'C', type: 'text', value: `permeabilidade da água na pele é muito alta, não 
permitindo a remoção do princípio ativo.` },
      { id: 'D', type: 'text', value: `solubilização do óleo em água causa um maior 
espalhamento além das áreas atingidas.` },
      { id: 'E', type: 'text', value: `ardência faz evaporar rapidamente a água, não 
permitindo que haja contato entre o óleo e o solvente.` },
    ],
    correct: 'B',
    explanation: `Nesta questão o candidato deveria observar que o princípio ativo dos spray de pimenta apresentava caráter apolar, portanto baixa solubilidade em água (polar). &nbsp; &nbsp;`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A usina de Itaipu é uma das maiores hidrelétricas 
do mundo em geração de energia. Com 20 unidades 
geradoras e 14 000 MW de potência total instalada, 
apresenta uma queda de 118,4 m e vazão nominal de 
690 m³ /s por unidade geradora. O cálculo da potência 
teórica leva em conta a altura da massa de água represada 
pela barragem, a gravidade local (10 m/s² ) e a densidade 
da água (1 000 kg/m³ ). A diferença entre a potência teórica 
e a instalada é a potência não aproveitada. 
Disponível em: www.itaipu.gov.br. Acesso em: 11 maio 2013 (adaptado). 
Qual é a potência, em MW, não aproveitada em cada 
unidade geradora de Itaipu?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `1,18` },
      { id: 'C', type: 'text', value: `116,96` },
      { id: 'D', type: 'text', value: `816,96` },
      { id: 'E', type: 'text', value: `13 183,04` },
    ],
    correct: 'C',
    explanation: `A potência dissipada é descrita como: Pot dissipada = Pot total &#8211; Pot útil Logo, é necessário encontrar encontrar a Potência Total e a Potência Útil. Calculando a Potência Total gerada em cada turbina como: Pot total = d . Z . g . H Sendo: d = densidade Z = vazão g = aceleração da gravidade H = altura da queda Pot total = 1 . 10³ . 690 . 10 . 118,4 Pot total = 816,96 MW Calculando a Potência Útil em cada turbina como: Pot Útil = 14000 / 20 Pot Útil = 700 MW Logo: Pot dissipada = 816,96 &#8211; 700 Pot dissipada = 116,96 MW`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A coleta das fezes dos animais domésticos em sacolas 
plásticas e o seu descarte em lixeiras convencionais 
podem criar condições de degradação que geram 
produtos prejudiciais ao meio ambiente (Figura 1). 
Figura 1 
A Figura 2 ilustra o Projeto Park Spark, desenvolvido 
em Cambridge, MA (EUA), em que as fezes dos animais 
domésticos são recolhidas em sacolas biodegradáveis 
e jogadas em um biodigestor instalado em parques 
públicos; e os produtos são utilizados em equipamentos 
no próprio parque. 
Figura 2 
D isponível em: http://parksparkproject.com. Acesso em: 30 ago. 2013 (adaptado). 
Uma inovação desse projeto é possibilitar o(a)`,
    images: ['/enem/2016/images/enem_2016_d1_q48_1.jpg', '/enem/2016/images/enem_2016_d1_q48_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `queima de gás metano.` },
      { id: 'B', type: 'text', value: `armazenamento de gás carbônico.` },
      { id: 'C', type: 'text', value: `decomposição aeróbica das fezes.` },
      { id: 'D', type: 'text', value: `uso mais eﬁ ciente de combustíveis fósseis.` },
      { id: 'E', type: 'text', value: `ﬁ xação de carbono em moléculas orgânicas.` },
    ],
    correct: 'A',
    explanation: `Para diminuir a emissão de metano (CH4) para a atmosfera, o projeto Park Spark usa a queima do metano como fonte de energia para suprir as necessidades energéticas da própria localidade. O candidato deveria perceber que o gás formado na decomposição anaeróbica da matéria orgânica é o metano e que quando queimado fornece luminosidade nos postes.`,
    subject: ['bio'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Uma ambulância A em movimento retílineo e uniforme aproxima-se de um observador O , em repouso. A sirene emite um som de frequência constante f A . O desenho ilustra as frentes de onda do som emitido pela ambulância. O observador possui um detector que consegue registrar, no esboço de um gráfico, a frequência da onda sonora detectada em função do tempo f O (t) , antes e depois da passagem da ambulância por ele. Qual esboço gráfico representa a frequência f O (t) detectada pelo observador?`,
    images: ['/enem/2016/images/enem_2016_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `O efeito Doppler é a alteração da frequência percebida de uma fonte que se movimenta em relação a um dado observador. Na aproximação ocorre o aumento da frequência percebida, portanto ela se torna maior do que a frequência da fonte emissora; No afastamento ocorre a redução da frequência percebida, portanto se torna menor do que a frequência real da fonte.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O benzeno, um importante solvente para a industria química, e obtido industrialmente pela destilação do 
petróleo. Contudo, também pode ser sintetizado pela trimerizacao do acetileno catalisada por ferro metálico sob altas 
temperaturas, conforme a equação química: 
3 C₂ H₂ (g) → C₆ H₆ (l) 
A energia envolvida nesse processo pode ser calculada indiretamente pela variação de entalpia das reações de 
combustão das substâncias participantes, nas mesmas condicoes experimentais: 
I. 
C₂ H₂ (g) + 5 
2 
 O₂ (g) → 2 CO₂ (g) + H₂ O (l) 
∆ H c ° = − 310 kcal/mol 
II. C₆ H₆ (l) + 15 
2 
 O₂ (g) → 6 CO₂ (g) + 3 H₂ O (l) 
∆ H c ° = − 780 kcal/mol 
A variação de entalpia do processo de trimerização, em kcal, para a formação de um mol de benzeno e mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `− 1 090.` },
      { id: 'B', type: 'text', value: `− 150.` },
      { id: 'C', type: 'text', value: `− 50.` },
      { id: 'D', type: 'text', value: `+ 157.` },
      { id: 'E', type: 'text', value: `+ 470.` },
    ],
    correct: 'B',
    explanation: `Questão envolvendo cálculo de variação de entalpia por lei de Hess. O candidato com base na reação de síntese do benzeno teria que propor modificações na reação 1 (multiplicar por 3, multiplicando também o valor da entalpia) e na 2 (inverter, invertendo o sinal da entalpia). A resposta certa seria o somatório das duas entalpias (-150 kcal).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Em meados de 2003, mais de 20 pessoas morreram no Brasil após terem ingerido uma suspensão de sulfato 
de bário utilizada como contraste em exames radiológicos. O sulfato de bário é um sólido pouquíssimo solúvel em 
água, que não se dissolve mesmo na presença de ácidos. As mortes ocorreram porque um laboratório farmacêutico 
forneceu o produto contaminado com carbonato de bário, que é solúvel em meio ácido. Um simples teste para verificar 
a existência de íons bário solúveis poderia ter evitado a tragédia. Esse teste consiste em tratar a amostra com solução 
aquosa de HCl e, após filtrar para separar os compostos insolúveis de bário, adiciona-se solução aquosa de H₂ SO₄ 
sobre o filtrado e observa-se por 30 min. 
TUBINO, M.; SIMONI, J. A. Refletindo sobre o caso Celobar®. Química Nova , n. 2, 2007 (adaptado). 
A presença de íons bário solúveis na amostra é indicada pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `liberação de calor.` },
      { id: 'B', type: 'text', value: `alteração da cor para rosa.` },
      { id: 'C', type: 'text', value: `precipitação de um sólido branco.` },
      { id: 'D', type: 'text', value: `formação de gás hidrogênio.` },
      { id: 'E', type: 'text', value: `volatilização de gás cloro.` },
    ],
    correct: 'C',
    explanation: `A questão envolvia a descoberta da existência ou não de carbonato de bário em uma amostra através da solubilização em meio ácido. Para realizar o teste utiliza-se uma amostra contendo sulfato de bário e uma possível presença de carbonato de bário. Para tal, tratou a amostra com HCl originando a reação: BaCO 3(s) + 2HCl (aq) → BaCl 2(aq) + H₂ O (l) + CO₂(g) Após adição do ácido, a filtração separou um sólido (BaSO 4 ) e um sal solúvel (BaCl 2 ). A adição de ácido sulfúrico à solução formada indicou a existência de carbonato de bário na amostra inicial através da reação que gerou um precipitado branco: BaCl 2(aq) + H₂ SO₄(aq) → BaSO 4(s) + 2HCl (aq)`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os feromônios são substâncias utilizadas na comunicação entre indivíduos de uma espécie. O primeiro feromônio 
isolado de um inseto foi o bombicol, substância produzida pela mariposa do bicho-da-seda. 
OH 
Bombicol 
O uso de feromônios em ações de controle de insetos-praga está de acordo com o modelo preconizado para a 
agricultura do futuro. São agentes altamente específicos e seus compostos químicos podem ser empregados em 
determinados cultivos, conforme ilustrado no quadro. 
Substância 
Inseto 
Cultivo 
Milho 
Sitophilus spp 
OH 
O 
O 
NH 
Morango 
Anthonomus rubi 
OH 
Grapholita molesta 
OH 
Frutas 
OCOCH 3 
FERREIRA, J. T. B.; ZARBIN, P. H. G. Amor ao primeiro odor: a comunicação química entre os insetos. Química Nova na Escola , n. 7, maio 1998 (adaptado). 
Considerando essas estruturas químicas, o tipo de estereoisomeria apresentada pelo bombicol e também apresentada 
pelo feromônio utilizado no controle do inseto`,
    images: ['/enem/2016/images/enem_2016_d1_q52_1.jpg', '/enem/2016/images/enem_2016_d1_q52_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Sitophilus spp .` },
      { id: 'B', type: 'text', value: `Migdolus fryanus .` },
      { id: 'C', type: 'text', value: `Anthonomus rubi .` },
      { id: 'D', type: 'text', value: `Grapholita molesta .` },
      { id: 'E', type: 'text', value: `Scrobipalpuloides absoluta .` },
    ],
    correct: 'E',
    explanation: `questão envolvendo conteúdo de isomeria espacial geométrica, onde o candidato deveria identificar que o bombicol, por ter ligação dupla e apresentar os ligantes diferentes dos carbonos da dupla, apresenta esse tipo de isomeria. A única substância com as mesmas características é do inseto scrobipalpuloides absoluta.`,
    subject: ['qui'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O esquema representa, de maneira simplificada, o 
processo de produção de etanol utilizando milho como 
matéria-prima. 
Levedura 
CO 2 
Milho 
Etanol 
Água 
Hidrólise 
Fermentação 
A etapa de hidrólise na produção de etanol a partir do 
milho é fundamental para que`,
    images: ['/enem/2016/images/enem_2016_d1_q53.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a glicose seja convertida em sacarose.` },
      { id: 'B', type: 'text', value: `as enzimas dessa planta sejam ativadas.` },
      { id: 'C', type: 'text', value: `a maceração favoreça a solubilização em água.` },
      { id: 'D', type: 'text', value: `o amido seja transformado em substratos utilizáveis 
pela levedura.` },
      { id: 'E', type: 'text', value: `os grãos com diferentes composições químicas 
sejam padronizados.` },
    ],
    correct: 'D',
    explanation: `A hidrólise do milho corresponde a quebra do amido, um polissacarídeo, em monossacarídeos (por exemplo, glicose), que é utilizado pelas leveduras como reagente da fermentação alcoólica, que libera etanol e CO2.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Durante a primeira fase do projeto de uma usina de 
geração de energia elétrica, os engenheiros da equipe 
de avaliação de impactos ambientais procuram saber se 
esse projeto está de acordo com as normas ambientais. 
A nova planta estará localizada à beira de um rio, cuja 
temperatura média da água é de 25 °C, e usará a sua 
água somente para refrigeração. O projeto pretende que 
a usina opere com 1,0 MW de potência elétrica e, em 
razão de restrições técnicas, o dobro dessa potência será 
dissipada por seu sistema de arrefecimento, na forma de 
calor. Para atender a resolução número 430, de 13 de 
maio de 2011, do Conselho Nacional do Meio Ambiente, 
com uma ampla margem de segurança, os engenheiros 
determinaram que a água só poderá ser devolvida ao rio 
com um aumento de temperatura de, no máximo, 3 °C 
em relação à temperatura da água do rio captada pelo 
sistema de arrefecimento. Considere o calor específico da 
água igual a 4 kJ/(kg °C). 
Para atender essa determinação, o valor mínimo do fluxo 
de água, em kg/s, para a refrigeração da usina deve ser 
mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `42.` },
      { id: 'B', type: 'text', value: `84.` },
      { id: 'C', type: 'text', value: `167.` },
      { id: 'D', type: 'text', value: `250.` },
      { id: 'E', type: 'text', value: `500.` },
    ],
    correct: 'C',
    explanation: `P=Q/Δt = m.c.ΔT/Δt Ao se referir à relação de fluxo de água, o que se deseja é mΔt, logo: m/Δt = P/c.ΔT = 2.10^6/4.10^3.3 = 500/3 = 166,7 kg/s`,
    subject: ['fis'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A Figura 1 apresenta o gráfico da intensidade, 
em decibéis (dB), da onda sonora emitida por um 
alto-falante, que está em repouso, e medida por um 
microfone em função da frequência da onda para 
diferentes distâncias: 3 mm, 25 mm, 51 mm e 60 mm. 
A Figura 2 apresenta um diagrama com a indicação das 
diversas faixas do espectro de frequência sonora para o 
modelo de alto-falante utilizado neste experimento. 
Figura 1 
Resposta de Frequência 
+20 
3 mm 
+10 
25 mm 
51 mm 
0 
dB 
60 mm 
− 10 
− 20 
2 
3 4 5 6 7 9 
8 
2 
3 4 5 6 7 9 
8 
20 
50 
100 
1 000 
10 000 
20 000 
Hz 
Disponível em: www.batera.com.br. Acesso em: 8 fev. 2015. 
Figura 2 
Faixas do espectro de frequência sonora 
Subgrave 
Grave 
Média 
baixa 
Media 
Media 
alta 
Aguda 
20 Hz 
63 Hz 
250 Hz 
640 Hz 
2,5 kHz 
5 kHz 
20 kHz 
Disponível em: www.somsc.com.br. Acesso em: 2 abr. 2015. 
Relacionando as informações presentes nas figuras 1 e 2, 
como a intensidade sonora percebida é afetada pelo 
aumento da distância do microfone ao alto-falante?`,
    images: ['/enem/2016/images/enem_2016_d1_q55.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Aumenta na faixa das frequências médias.` },
      { id: 'B', type: 'text', value: `Diminui na faixa das frequências agudas.` },
      { id: 'C', type: 'text', value: `Diminui na faixa das frequências graves.` },
      { id: 'D', type: 'text', value: `Aumenta na faixa das frequências médias altas.` },
      { id: 'E', type: 'text', value: `Aumenta na faixa das frequências médias baixas.` },
    ],
    correct: 'C',
    explanation: `Essa questão não era de conhecimento prévio da matéria ondas, mas de interpretação de gráfico. Percebemos no gráfico que na região do grave, ao aumentar a distância o nível de intensidade diminui. Para: d=3mm, I=19dB d=25mm, I=9dB d=51mm, I=5dB d=60mm, I=-9dB`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `As proteínas de uma célula eucariótica possuem 
peptídeos sinais, que são sequências de aminoácidos 
responsáveis pelo seu endereçamento para as diferentes 
organelas, de acordo com suas funções. Um pesquisador 
desenvolveu uma nanopartícula capaz de carregar 
proteínas para dentro de tipos celulares específicos. 
Agora ele quer saber se uma nanopartícula carregada 
com uma proteína bloqueadora do ciclo de Krebs 
in vitro é capaz de exercer sua atividade em uma célula 
cancerosa, podendo cortar o aporte energético e destruir 
essas células. 
Ao escolher essa proteína bloqueadora para carregar as 
nanopartículas, o pesquisador deve levar em conta um 
peptídeo sinal de endereçamento para qual organela?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Núcleo.` },
      { id: 'B', type: 'text', value: `Mitocôndria.` },
      { id: 'C', type: 'text', value: `Peroxissomo.` },
      { id: 'D', type: 'text', value: `Complexo golgiense.` },
      { id: 'E', type: 'text', value: `Retículo endoplasmático.` },
    ],
    correct: 'B',
    explanation: `A utilização de nanopartículas bloqueadoras do Ciclo de Krebs que se comportam como sinalizadores age em mitocôndrias, pois o conjunto de reações do Ciclo de Krebs ocorre na matriz mitocondrial. Se este processo for bloqueado, as células cancerosas morrerão pela menor taxa energética produzida.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O morcego emite pulsos de curta duração de ondas 
ultrassônicas, os quais voltam na forma de ecos após 
atingirem objetos no ambiente, trazendo informações a 
respeito das suas dimensões, suas localizações e dos 
seus possíveis movimentos. Isso se dá em razão da 
sensibilidade do morcego em detectar o tempo gasto para 
os ecos voltarem, bem como das pequenas variações nas 
frequências e nas intensidades dos pulsos ultrassônicos. 
Essas características lhe permitem caçar pequenas 
presas mesmo quando estão em movimento em relação 
a si. Considere uma situação unidimensional em que uma 
mariposa se afasta, em movimento retilíneo e uniforme, 
de um morcego em repouso. 
A distância e velocidade da mariposa, na situação descrita, 
seriam detectadas pelo sistema de um morcego por quais 
alterações nas características dos pulsos ultrassônicos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Intensidade diminuída, o tempo de retorno aumentado 
e a frequência percebida diminuída.` },
      { id: 'B', type: 'text', value: `Intensidade aumentada, o tempo de retorno diminuído 
e a frequência percebida diminuída.` },
      { id: 'C', type: 'text', value: `Intensidade diminuída, o tempo de retorno diminuído 
e a frequência percebida aumentada.` },
      { id: 'D', type: 'text', value: `Intensidade diminuída, o tempo de retorno aumentado 
e a frequência percebida aumentada.` },
      { id: 'E', type: 'text', value: `Intensidade 
aumentada, 
o 
tempo 
de 
retorno 
aumentado e a frequência percebida aumentada.` },
    ],
    correct: 'A',
    explanation: `Intensidade=PA= P4πR², o que significa que ao aumentar a distância (R), a intensidade diminui. Ao aumentar a distância, mantendo-se a velocidade constante, o tempo de retorno também aumenta. No afastamento entre a fonte emissora e o objeto, ocorre o redução da frequência percebida (Efeito Doppler).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A minimização do tempo e custo de uma reação 
química, bem como o aumento na sua taxa de conversão, 
caracterizam a eficiência de um processo químico. Como 
consequência, produtos podem chegar ao consumidor 
mais baratos. Um dos parâmetros que mede a eficiência 
de uma reação química é o seu rendimento molar ( R , em %), 
definido como 
R = (n_produto / n_reagente limitante) × 100
em que n corresponde ao número de mols. O metanol
pode ser obtido pela reação entre brometo de metila e 
hidróxido de sódio, conforme a equação química: 
CH₃ Br + NaOH → CH₃ OH + NaBr 
As massas molares (em g/mol) desses elementos 
são: H = 1; C = 12; O = 16; Na = 23; Br = 80. 
O rendimento molar da reação, em que 32 g de metanol 
foram obtidos a partir de 142,5 g de brometo de metila e 
80 g de hidróxido de sódio, é mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `22%.` },
      { id: 'B', type: 'text', value: `40%.` },
      { id: 'C', type: 'text', value: `50%.` },
      { id: 'D', type: 'text', value: `67%.` },
      { id: 'E', type: 'text', value: `75%.` },
    ],
    correct: 'D',
    explanation: `Questão envolvendo dois casos especiais de estequiometria, reagente limitante/excesso e rendimento. O candidato deveria calcular o número de mol de cada participante, em seguida observar o reagente limitante e relacioná-lo com o produto obtido. Comprar essa quantidade teórica com a real(rendimento) e assim chegar na resposta. nCH3Br = 142,5/ 95 = 1,5 mol nNaOH = 80/ 40 = 2 mol CH3Br + NaOH → CH3OH + NaBr Início 1,5 mol 2 mol &#8211; &#8211; Reação 1,5 mol 1,5 mol 1,5 mol 1,5 mol Final 0 mol 0,5 mol 1,5 mol 1,5 mol 1 mol CH3OH &#8212;&#8212;&#8212; 32g 1,5 mol CH3OH &#8212;&#8212; X X= 48g 48g &#8212;&#8212;&#8212; 100% 32g &#8212;&#8212;&#8212; y y= 67%`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Por apresentar significativa resistividade elétrica, o 
grafite pode ser utilizado para simular resistores elétricos 
em circuitos desenhados no papel, com o uso de lápis e 
lapiseiras. Dependendo da espessura e do comprimento 
das linhas desenhadas, é possível determinar a resistência 
elétrica de cada traçado produzido. No esquema foram 
utilizados três tipos de lápis diferentes (2H, HB e 6B) para 
efetuar três traçados distintos. 
2H 
HB 
6B 
Munido dessas informações, um estudante pegou 
uma folha de papel e fez o desenho de um sorvete de 
casquinha utilizando-se desses traçados. Os valores 
encontrados nesse experimento, para as resistências 
elétricas (R), medidas com o auxílio de um ohmímetro 
ligado nas extremidades das resistências, são mostrados 
na figura. Verificou-se que os resistores obedeciam à 
Lei de Ohm. 
5 kΩ 
A 
B 
20 kΩ 
10 kΩ 
10 kΩ 
C 
Na sequência, conectou o ohmímetro nos terminais 
A e B do desenho e, em seguida, conectou-o nos terminais 
B e C, anotando as leituras R AB e R­ BC , respectivamente. 
R AB 
R BC 
, qual resultado o estudante 
Ao estabelecer a razão 
obteve?`,
    images: ['/enem/2016/images/enem_2016_d1_q59_1.jpg', '/enem/2016/images/enem_2016_d1_q59_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 
4` },
      { id: 'B', type: 'text', value: `7 
10` },
      { id: 'C', type: 'text', value: `27 
14` },
      { id: 'D', type: 'text', value: `81 
4` },
      { id: 'E', type: 'text', value: `81` },
    ],
    correct: 'B',
    explanation: `Com os terminais entre A e B, os resistores de 10Ω estão em série, e o equivalente está em paralelo com o resistor de 20Ω e o de 5Ω. Portanto: R eqAB =10/3. Com os terminais entre B e C, os resistores de 20Ω e de 5Ω estão, o que resulta numa req de 4Ω. O resistor calculado de 4 entrará em série com o de 10Ω (que se encontra entre A e C), totalizando 14Ω. Ao final, o resistor de 14Ω deve ser posicionado em paralelo com o de 10Ω que se encontra entre B e C. R eqBC = 35/6Ω R eqAB /R eqBC = 10/3 x 35/6 = 4/7`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O carvão ativado é um material que possui elevado 
teor de carbono, sendo muito utilizado para a remoção de 
compostos orgânicos voláteis do meio, como o benzeno. 
Para a remoção desses compostos, utiliza-se a adsorção. 
Esse fenômeno ocorre por meio de interações do tipo 
intermoleculares entre a superfície do carvão (adsorvente) 
e o benzeno (adsorvato, substância adsorvida). 
No caso apresentado, entre o adsorvente e a substância 
adsorvida ocorre a formação de:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ligações dissulfeto.` },
      { id: 'B', type: 'text', value: `Ligações covalentes.` },
      { id: 'C', type: 'text', value: `Ligações de hidrogênio.` },
      { id: 'D', type: 'text', value: `Interações dipolo induzido - dipolo induzido.` },
      { id: 'E', type: 'text', value: `Interações dipolo permanente - dipolo permanente.` },
    ],
    correct: 'D',
    explanation: `Carvão ativado e benzeno não apresentam grupos orgânicos polares em sua composição. Por isso, assim como qualquer hidrocarboneto, são compostos apolares. Dessa forma, realizam ligação dipolo induzido-dipolo induzido como principal forma de adsorção.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Um pesquisador investigou o papel da predação 
por peixes na densidade e tamanho das presas, como 
possível controle de populações de espécies exóticas 
em costões rochosos. No experimento colocou uma tela 
sobre uma área da comunidade, impedindo o acesso dos 
peixes ao alimento, e comparou o resultado com uma 
área adjacente na qual os peixes tinham acesso livre. 
O quadro apresenta os resultados encontrados após 
15 dias de experimento. 
 
O pesquisador concluiu corretamente que os peixes 
controlam a densidade dos(as)`,
    images: ['/enem/2016/images/enem_2016_d1_q61.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `algas, estimulando seu crescimento.` },
      { id: 'B', type: 'text', value: `cracas, predando especialmente animais pequenos.` },
      { id: 'C', type: 'text', value: `mexilhões, predando especialmente animais pequenos.` },
      { id: 'D', type: 'text', value: `quatro espécies testadas, predando indivíduos 
pequenos.` },
      { id: 'E', type: 'text', value: `ascídias, apesar de não representarem os menores 
organismos.` },
    ],
    correct: 'C',
    explanation: `Comparando a ação do peixe predador na área com tela e sem tela, nota-se a diminuição da quantidade de mexilhões por m² além da variação de tamanho, que passa de 3 cm para 6 cm. Isto significa que o peixe predador atuou em mexilhões de menor tamanho, tipificando uma seleção direcional, pois o fenótipo favorecido foi o de 6 cm.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Ao percorrer o trajeto de uma cadeia alimentar, o 
carbono, elemento essencial e majoritário da matéria 
orgânica que compõe os indivíduos, ora se encontra 
em sua forma inorgânica, ora se encontra em sua 
forma orgânica. Em uma cadeia alimentar composta por 
fitoplâncton, zooplâncton, moluscos, crustáceos e peixes 
ocorre a transição desse elemento da forma inorgânica 
para a orgânica. 
Em qual grupo de organismos ocorre essa transição?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Fitoplâncton.` },
      { id: 'B', type: 'text', value: `Zooplâncton.` },
      { id: 'C', type: 'text', value: `Moluscos.` },
      { id: 'D', type: 'text', value: `Crustáceos.` },
      { id: 'E', type: 'text', value: `Peixes.` },
    ],
    correct: 'A',
    explanation: `A transição do carbono inorgânico em carbono orgânico caracteriza um processo autotrófico, que só é realizado pelos produtores da cadeia, que neste caso corresponde ao fitoplâncton. Os outros indivíduos, zooplâncton, moluscos, crustáceos e peixes da referida cadeia são seres heterotróficos, logo, consumidores.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Dois veículos que trafegam com velocidade 
constante em uma estrada, na mesma direção e 
sentido, devem manter entre si uma distância mínima. 
Isso porque o movimento de um veículo, até que ele 
pare totalmente, ocorre em duas etapas, a partir do 
momento em que o motorista detecta um problema que 
exige uma freada brusca. A primeira etapa é associada 
à distância que o veículo percorre entre o intervalo de 
tempo da detecção do problema e o acionamento dos 
freios. Já a segunda se relaciona com a distância que 
o automóvel percorre enquanto os freios agem com 
desaceleração constante. 
Considerando a situação descrita, qual esboço gráfico 
representa a velocidade do automóvel em relação à 
distância percorrida até parar totalmente? 
Velocidade (m/s)`,
    images: ['/enem/2016/images/enem_2016_d1_q63_A.jpg', '/enem/2016/images/enem_2016_d1_q63_B.jpg', '/enem/2016/images/enem_2016_d1_q63_C.jpg', '/enem/2016/images/enem_2016_d1_q63_D.jpg', '/enem/2016/images/enem_2016_d1_q63_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `O tempo de reação é o tempo entre o motorista avistar o perigo e pisar o freio. Durante o tempo de reação, o veículo permanece com a mesma velocidade. Em seguida, o movimento retardado provoca uma redução de velocidade, mas que o alunos precisava perceber que o gráfico fazia relação V x d, que é dado pela equação de Torricelli. V²=Vo² + 2a𝞓s. Isso faz com que a relação entre velocidade e distância não seja linear, mas quadrática.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I 
Biocélulas 
combustíveis 
são 
uma 
alternativa 
tecnológica para substituição das baterias convencionais. 
Em uma biocélula microbiológica, bactérias catalisam 
reações de oxidação de substratos orgânicos. Liberam 
elétrons produzidos na respiração celular para um 
eletrodo, onde fluem por um circuito externo até o cátodo 
do sistema, produzindo corrente elétrica. Uma reação 
típica que ocorre em biocélulas microbiológicas utiliza o 
acetato como substrato. 
AQUINO NETO, S. Preparação e caracterização de bioanodos para biocélula a combustível 
etanol/O 2 . Disponível em: www.teses.usp.br. Acesso em: 23 jun. 2015 (adaptado). 
TEXTO II 
Em 
sistemas 
bioeletroquímicos, 
os 
potenciais 
padrão 
( E ° ’ ) 
apresentam 
valores 
característicos. 
Para as biocélulas de acetato, considere as seguintes 
semirreações de redução e seus respectivos potenciais: 
2 CO 2 + 7 H + + 8 e − → CH 3 COO − + 2 H 2 O 
E ° ’ = - 0,3 V 
O 2 + 4 H + + 4 e − → 2 H 2 O 
E ° ’ = 0,8 V 
SCOTT, K.; YU, E. H. Microbial electrochemical and fuel cells: fundamentals and 
applications. Woodhead Publishing Series in Energy , n. 88, 2016 (adaptado). 
Nessas condições, qual é o número mínimo de biocélulas 
de acetato, ligadas em série, necessárias para se obter 
uma diferença de potencial de 4,4 V?`,
    alternatives: [
      { id: 'A', type: 'text', value: `3` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `9` },
      { id: 'E', type: 'text', value: `15` },
    ],
    correct: 'B',
    explanation: `Questão envolvendo associação de pilhas em série, onde foi dado os potenciais de redução. O candidato deveria observar que a espécie a se reduzir deveria ser a detentora do maior potencial de redução, ou seja, o O2 . Já o CO2 oxidaria e o seu potencial teria o sinal invertido. A ddp seria então 1,1V (0,8V + 0,3V). Para fornecer a ddp de 4,4 teríamos que utilizar 4 pilhas em série.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A formação de coágulos sanguíneos em veias e 
artérias é um dos fatores responsáveis pela ocorrência 
de doenças cardiovasculares, como varizes, infarto 
e acidentes vasculares cerebrais. A prevenção e o 
tratamento dessas doenças podem ser feitos com drogas 
anticoagulantes. A indústria farmacêutica estimula a 
pesquisa de toxinas animais com essa propriedade. 
Considerando as adaptações relacionadas aos hábitos 
alimentares, os animais adequados ao propósito dessas 
pesquisas são os(as)`,
    alternatives: [
      { id: 'A', type: 'text', value: `moluscos fitófagos.` },
      { id: 'B', type: 'text', value: `moscas saprófagas.` },
      { id: 'C', type: 'text', value: `pássaros carnívoros.` },
      { id: 'D', type: 'text', value: `morcegos frugívoros.` },
      { id: 'E', type: 'text', value: `mosquitos hematófagos.` },
    ],
    correct: 'E',
    explanation: `Os mosquitos hematófagos, que se alimentam de sangue, ao picarem suas fontes de alimento lançam substâncias anestésicas e anticoagulantes, para que o consumo alimentar seja facilitado. Os anticoagulantes evitam o entupimento da probóscide (aparelho bucal sugador do mosquito) durante a alimentação dos mosquitos hematófagos. Logo, a indústria farmacêutica tem interesse na pesquisa dessas substâncias, para serem utilizadas em tratamentos médicos, evitando coágulos e, consequentemente, problemas cardiovasculares.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A invenção e o acoplamento entre engrenagens 
revolucionaram a ciência na época e propiciaram a 
invenção de várias tecnologias, como os relógios. 
Ao construir um pequeno cronômetro, um relojoeiro 
usa o sistema de engrenagens mostrado. De acordo 
com a figura, um motor é ligado ao eixo e movimenta 
as engrenagens fazendo o ponteiro girar. A frequência 
do motor é de 18 RPM, e o número de dentes das 
engrenagens está apresentado no quadro. 
 
A frequência de giro do ponteiro, em RPM, é`,
    images: ['/enem/2016/images/enem_2016_d1_q66_1.jpg', '/enem/2016/images/enem_2016_d1_q66_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `4.` },
      { id: 'D', type: 'text', value: `81.` },
      { id: 'E', type: 'text', value: `162.` },
    ],
    correct: 'B',
    explanation: `Para resolver essa questão, o aluno precisa de duas percepções: 1- A de que o tamanho da circunferência é proporcional ao número de dentes &#8211; 2πR ⩬ n° de dentes. 2- e que podemos ter basicamente dois tipos de transmissão de movimento &#8211; pelo centro (𝟂 1 =𝟂 2 ) e pela extremidade (V 1 =V 2 ). O motor está conectado ao eixo da engrenagem A, portanto: 𝟂 motor =𝟂 A , o que indica que a frequência de giro do motor é a mesma da engrenagem A (18rpm). O Contato entre as engrenagens A e B ocorre pela extremidade, portanto V A =V B , N°dentes A . f A = N° dentes B . f B . 24 x 18 = 72 x f B . Logo, f B =6 rpm. Entre B e C o contato é pelo centro, o que indica que f B =f C , portanto f C =6 rpm Entre C e D o contato volta ser feito pela extremidade V C =V D , N°dentes C . f C = N° dentes D . f D . 36 x 6 = 108 x f D . Logo, f D =2 rpm. Como a engrenagem D e o ponteiro possuem o mesmo eixo, f ponteiro =2 rpm.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Primeiro, em relação àquilo a que chamamos água, 
quando congela, parece-nos estar a olhar para algo 
que se tornou pedra ou terra, mas quando derrete e se 
dispersa, esta torna-se bafo e ar; o ar, quando é queimado, 
torna-se fogo; e, inversamente, o fogo, quando se contrai 
e se extingue, regressa à forma do ar; o ar, novamente 
concentrado e contraído, torna-se nuvem e nevoeiro, mas, 
a partir destes estados, se for ainda mais comprimido, 
torna-se água corrente, e de água torna-se novamente 
terra e pedras; e deste modo, como nos parece, dão 
geração uns aos outros de forma cíclica. 
PLATÃO. Timeu-Critias . Coimbra: CECH, 2011. 
Do ponto de vista da ciência moderna, os “quatro 
elementos” descritos por Platão correspondem, na 
verdade, às fases sólida, líquida, gasosa e plasma da 
matéria. As transições entre elas são hoje entendidas 
como consequências macroscópicas de transformações 
sofridas pela matéria em escala microscópica. 
Excetuando-se a fase de plasma, essas transformações 
sofridas pela matéria, em nível microscópico, estão 
associadas a uma`,
    alternatives: [
      { id: 'A', type: 'text', value: `troca de átomos entre as diferentes moléculas do 
material.` },
      { id: 'B', type: 'text', value: `transmutação nuclear dos elementos químicos do 
material.` },
      { id: 'C', type: 'text', value: `redistribuição de prótons entre os diferentes átomos 
do material.` },
      { id: 'D', type: 'text', value: `mudança na estrutura espacial formada pelos 
diferentes constituintes do material.` },
      { id: 'E', type: 'text', value: `alteração nas proporções dos diferentes isótopos de 
cada elemento presente no material.` },
    ],
    correct: 'D',
    explanation: `Mudança de estados físicos não altera a matéria, logo houve a alteração apenas da estrutura espacial formada.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Para cada litro de etanol produzido em uma 
indústria de cana-de-açúcar são gerados cerca de 18 L 
de vinhaça que é utilizada na irrigação das plantações 
de cana-de-açúcar, já que contém teores médios de 
nutrientes N, P e K iguais a 357 mg/L, 60 mg/L e 2 034 mg/L, 
respectivamente. 
SILVA, M. A. S.; GRIEBELER, N. P.; BORGES, L. C. Uso de vinhaça e impactos nas 
propriedades do solo e lençol freático. Revista Brasileira de Engenharia 
 Agrícola e Ambiental , n. 1, 2007 (adaptado). 
Na produção de 27 000 L de etanol, a quantidade total 
de fósforo, em kg, disponível na vinhaça será mais 
próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `29.` },
      { id: 'C', type: 'text', value: `60.` },
      { id: 'D', type: 'text', value: `170.` },
      { id: 'E', type: 'text', value: `1 000.` },
    ],
    correct: 'B',
    explanation: `Questão que envolve unidades de concentração. O candidato deveria inicialmente calcular o volume de vinhaça presente em 27000L de Etanol. Em seguida, utilizando a concentração de fósforo, calcular a massa deste elemento presente no volume anteriormente calculado. 1 L Etanol &#8212;&#8211; 18L vinhaça 27000L &#8212;&#8211; X X = 486000L 60mg P &#8212;&#8211; 1L Y &#8212;&#8211; 486000L Y = 29 kg`,
    subject: ['bio'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Recentemente um estudo feito em campos de trigo 
mostrou que níveis elevados de dióxido de carbono na 
atmosfera prejudicam a absorção de nitrato pelas plantas. 
Consequentemente, a qualidade nutricional desses 
alimentos pode diminuir à medida que os níveis de dióxido 
de carbono na atmosfera atingirem as estimativas para as 
próximas décadas. 
BLOOM, A. J. et al. Nitrate assimilation is inhibited by elevated CO 2 in field-grown wheat. 
Nature Climate Change , n. 4, abr. 2014 (adaptado). 
Nesse contexto, a qualidade nutricional do grão de trigo 
será modificada primariamente pela redução de`,
    alternatives: [
      { id: 'A', type: 'text', value: `amido.` },
      { id: 'B', type: 'text', value: `frutose.` },
      { id: 'C', type: 'text', value: `lipídeos.` },
      { id: 'D', type: 'text', value: `celulose.` },
      { id: 'E', type: 'text', value: `proteínas.` },
    ],
    correct: 'E',
    explanation: `Se o trigo está diante de uma elevada concentração de CO2, significa que a fixação de carbono pela fotossíntese já está saturada. Porém, a menor absorção de nitrato (NO3-) pelas raízes reduzirá a produção de compostos orgânicos nitrogenados, tais como proteínas e ácidos nucleicos. Conclui-se então que a produção de proteínas (formadas por aminoácidos) será prejudicada com a falta de NO3-.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Pesquisadores recuperaram DNA de ossos de 
mamute ( Mammuthus primigenius ) encontrados na 
Sibéria, que tiveram sua idade de cerca de 28 mil anos 
confirmada pela técnica do carbono-14. 
FAPESP. DNA de mamute é revelado . Disponível em: http://agencia.fapesp.br. 
Acesso em: 13 ago. 2012 (adaptado). 
A técnica de datação apresentada no texto só é possível 
devido à`,
    alternatives: [
      { id: 'A', type: 'text', value: `proporção conhecida entre carbono-14 e carbono-12 
na atmosfera ao longo dos anos.` },
      { id: 'B', type: 'text', value: `decomposição de todo o carbono-12 presente no 
organismo após a morte.` },
      { id: 'C', type: 'text', value: `fixação maior do carbono-14 nos tecidos de 
organismos após a morte.` },
      { id: 'D', type: 'text', value: `emissão de carbono-12 pelos tecidos de organismos 
após a morte.` },
      { id: 'E', type: 'text', value: `transformação do carbono-12 em carbono-14 ao 
longo dos anos.` },
    ],
    correct: 'A',
    explanation: `Quando um indivíduo morre dá-se início a redução da quantidade de carbono-14 por conta da sua transmutação natural. 6C14 → 7N14 + -1β0`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A vegetação apresenta adaptações ao ambiente, 
como plantas arbóreas e arbustivas com raízes que se 
expandem horizontalmente, permitindo forte ancoragem 
no substrato lamacento; raízes que se expandem 
verticalmente, por causa da baixa oxigenação do 
substrato; folhas que têm glândulas para eliminar o 
excesso de sais; folhas que podem apresentar cutícula 
espessa para reduzir a perda de água por evaporação. 
As características descritas referem-se a plantas 
adaptadas ao bioma:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Cerrado.` },
      { id: 'B', type: 'text', value: `Pampas.` },
      { id: 'C', type: 'text', value: `Pantanal.` },
      { id: 'D', type: 'text', value: `Manguezal.` },
      { id: 'E', type: 'text', value: `Mata de Cocais.` },
    ],
    correct: 'D',
    explanation: `De acordo com as características citadas da vegetação (raízes de ancoragem em solo lamacento e folhas com glândulas que eliminam excesso de sais), tipifica o bioma Manguezal, um ecótono formado por ambiente marinho, terrestre e dulcícola.`,
    subject: ['bio'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Uma pessoa é responsável pela manutenção de uma 
sauna úmida. Todos os dias cumpre o mesmo ritual: colhe 
folhas de capim-cidreira e algumas folhas de eucalipto. 
Em seguida, coloca as folhas na saída do vapor da sauna, 
aromatizando-a, conforme representado na figura. 
Parede 
Sauna úmida 
Gerador de vapor 
Folhas 
Saída do vapor 
Qual processo de separação é responsável pela 
aromatização promovida?`,
    images: ['/enem/2016/images/enem_2016_d1_q72.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Filtração simples.` },
      { id: 'B', type: 'text', value: `Destilação simples.` },
      { id: 'C', type: 'text', value: `Extração por arraste.` },
      { id: 'D', type: 'text', value: `Sublimação fracionada.` },
      { id: 'E', type: 'text', value: `Decantação sólido-líquido.` },
    ],
    correct: 'C',
    explanation: `O vapor d’água solubiliza os compostos presentes nas folhas, extraindo-os e expondo à sauna.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os ecossistemas degradados por intensa atividade 
agrícola apresentam, geralmente, diminuição de sua 
diversidade e perda de sua estabilidade. Nesse contexto, 
o uso integrado de árvores aos sistemas agrícolas 
(sistemas agroflorestais) pode cumprir um papel inovador 
ao buscar a aceleração do processo sucessional e, ao 
mesmo tempo, uma produção escalonada e diversificada. 
Disponível em: saf.cnpgc.embrapa.br. Acesso em: 21 jan. 2012 (adaptado). 
Essa é uma estratégia de conciliação entre recuperação 
ambiental e produção agrícola, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `substitui gradativamente as espécies cultiváveis por 
espécies arbóreas.` },
      { id: 'B', type: 'text', value: `intensifica a fertilização do solo com o uso de técnicas 
apropriadas e biocidas.` },
      { id: 'C', type: 'text', value: `promove maior diversidade de vida no solo com o 
aumento da matéria orgânica.` },
      { id: 'D', type: 'text', value: `favorece a dispersão das sementes cultivadas pela 
fauna residente nas áreas florestais.` },
      { id: 'E', type: 'text', value: `cria condições para o estabelecimento de espécies 
pioneiras com a diminuição da insolação sobre o solo.` },
    ],
    correct: 'C',
    explanation: `Sistemas agroflorestais aumentam a matéria orgânica do solo e, consequentemente, aumentam a diversidade da fauna associada à serrapilheira (folhiço), bem como aceleram a ciclagem de nutrientes.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Três lâmpadas idênticas foram ligadas no circuito
esquematizado. A bateria apresenta resistência interna
desprezível, e os fios possuem resistência nula.
Um técnico fez uma análise do circuito para prever a
corrente elétrica nos pontos: A, B, C, D e E; e rotulou
essas correntes de IA, IB, IC, ID e IE, respectivamente.
O técnico concluiu que as correntes que apresentam o
mesmo valor são`,
    images: ['/enem/2016/images/enem_2016_d1_q74.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `IA = IE e IC = ID.` },
      { id: 'B', type: 'text', value: `IA = IB = IE e IC = ID.` },
      { id: 'C', type: 'text', value: `IA = IB, apenas.` },
      { id: 'D', type: 'text', value: `IA = IB = IE, apenas.` },
      { id: 'E', type: 'text', value: `IC = IB, apenas.` },

    ],
    correct: 'A',
    explanation: `As correntes I A e I E correspondem à corrente total do circuito, portanto I A =I E . Como as lâmpadas são idênticas, a corrente que passa por elas tem o mesmo valor, logo I C =I D.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A figura ilustra o movimento da seiva xilêmica em uma planta. 
CORREIA, S. Teoria da tensão-coesão-adesão. Revista de Ciência Elementar , n. 1, 2014 (adaptado). 
Mesmo que essa planta viesse a sofrer ação contínua do vento e sua copa crescesse voltada para baixo, essa 
seiva continuaria naturalmente seu percurso. 
O que garante o transporte dessa seiva é a`,
    images: ['/enem/2016/images/enem_2016_d1_q75.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `gutação.` },
      { id: 'B', type: 'text', value: `gravidade.` },
      { id: 'C', type: 'text', value: `respiração.` },
      { id: 'D', type: 'text', value: `fotossíntese.` },
      { id: 'E', type: 'text', value: `transpiração.` },
    ],
    correct: 'E',
    explanation: `O transporte realizado pelo xilema é de seiva bruta (água e sais minerais), que ocorre no sentido raiz -&gt; folha, segundo a Teoria de Dixon, diretamente dependente da força de transpiração, realizada pelos estômatos foliares. O transporte de seiva independe do vento e da curvatura que este possa exercer sobre a planta.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Nucleófilos (Nu − ) são bases de Lewis que reagem com haletos de alquila, por meio de uma reação chamada 
substituição nucleofílica (Sₙ), como mostrado no esquema:
R-X + Nu⁻ → R-Nu + X⁻
(R = grupo alquila e X = halogênio)
A reação de Sₙ entre metóxido de sódio (Nu⁻ = CH₃O⁻) e brometo de metila fornece um composto orgânico pertencente
à função`,
    alternatives: [
      { id: 'A', type: 'text', value: `éter.` },
      { id: 'B', type: 'text', value: `éster.` },
      { id: 'C', type: 'text', value: `álcool.` },
      { id: 'D', type: 'text', value: `haleto.` },
      { id: 'E', type: 'text', value: `hidrocarboneto.` },
    ],
    correct: 'A',
    explanation: `Questão envolvendo reação de substituição nucleofílica, onde o candidato usaria o próprio modelo de reação dado, substituindo o R por metil(-CH₃ ) e o Nu &#8211; pelo CH₃ O &#8211; (também dado no problema), conforme a reação abaixo: CH₃ -Br + CH₃ O &#8211; → CH₃ -O-CH₃ (éter) + Br &#8211;`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O trilho de ar é um dispositivo utilizado em laboratórios de física para analisar movimentos em que corpos de prova 
(carrinhos) podem se mover com atrito desprezível. A figura ilustra um trilho horizontal com dois carrinhos (1 e 2) em 
que se realiza um experimento para obter a massa do carrinho 2. No instante em que o carrinho 1, de massa 150,0 g, 
passa a se mover com velocidade escalar constante, o carrinho 2 esta em repouso. No momento em que o carrinho 1 
se choca com o carrinho 2, ambos passam a se movimentar juntos com velocidade escalar constante. Os sensores 
eletrônicos distribuídos ao longo do trilho determinam as posições e registram os instantes associados a passagem de 
cada carrinho, gerando os dados do quadro. 
sensor 1 
sensor 2 
sensor 3 
sensor 4 
carrinho 1 
carrinho 2 
 
Com base nos dados experimentais, o valor da massa do carrinho 2 e igual a`,
    images: ['/enem/2016/images/enem_2016_d1_q77_1.jpg', '/enem/2016/images/enem_2016_d1_q77_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `50,0 g.` },
      { id: 'B', type: 'text', value: `250,0 g.` },
      { id: 'C', type: 'text', value: `300,0 g.` },
      { id: 'D', type: 'text', value: `450,0 g.` },
      { id: 'E', type: 'text', value: `600,0 g.` },
    ],
    correct: 'C',
    explanation: `A questão trata de uma colisão inelástica, afinal os corpos saem juntos após o contato. Em qualquer colisão, a quantidade de movimento se conserva. QA=QD m1V1=(m1+m2)V’ 150.15 = (m1+m2). 5 (m1+m2)=450g. Como o carrinho m1 possui massa de 150g, o carrinho 2 possui massa de 300g.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Após seu desgaste completo, os pneus podem ser queimados para a geração de energia. Dentre os gases gerados 
na combustão completa da borracha vulcanizada, alguns são poluentes e provocam a chuva ácida. Para evitar que 
escapem para a atmosfera, esses gases podem ser borbulhados em uma solução aquosa contendo uma substância 
adequada. Considere as informações das substâncias listadas no quadro. 
 
Dentre as substâncias listadas no quadro, aquela capaz de remover com maior eficiência os gases poluentes é o(a)`,
    images: ['/enem/2016/images/enem_2016_d1_q78.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fenol.` },
      { id: 'B', type: 'text', value: `piridina.` },
      { id: 'C', type: 'text', value: `metilamina.` },
      { id: 'D', type: 'text', value: `hidrogenofosfato de potássio.` },
      { id: 'E', type: 'text', value: `hidrogenosulfato de potássio.` },
    ],
    correct: 'D',
    explanation: `Aqui é importante entender que os gases que produzem a chuva ácida são os óxidos ácidos (exemplos: CO₂ e SO₃ ). Como eles são ácidos, faz -se necessário uma substância básica para neutralizar seus efeitos. Dentre as três substâncias básicas presentes na tabela (que liberam OH &#8211; como produto da reação), a que terá maior força para neutralizar a ação dos gases será a que apresentar maior valor de constante de equilíbrio, o hidrogenofosfato de potássio.`,
    subject: ['qui'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Vários métodos são empregados para prevenção de infecções por microrganismos. Dois desses métodos utilizam 
microrganismos vivos e são eles: as vacinas atenuadas, constituídas por patógenos avirulentos, e os probióticos que 
contêm bactérias benéficas. Na figura são apresentados cinco diferentes mecanismos de exclusão de patógenos pela 
ação dos probióticos no intestino de um animal. 
McALLISTER, T. A. et al. Review: The use of direct fed microbials to mitigate pathogens and enhance production in cattle. Can. J. Anim. Sci. , jan. 2011 (adaptado). 
Qual mecanismo de ação desses probióticos promove um efeito similar ao da vacina?`,
    images: ['/enem/2016/images/enem_2016_d1_q79.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `2` },
      { id: 'E', type: 'text', value: `1` },
    ],
    correct: 'B',
    explanation: `Para que os probióticos aplicados tenham efeito de vacina, é necessário contato com a célula, para que esta reaja, produzindo anticorpos (imunoglobulinas) e formando memória imunológica, um mecanismo de imunização ativa.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O Painel Intergovernamental de Mudanças Climáticas (na sigla em inglês, IPCC) prevê que nas próximas décadas 
o planeta passará por mudanças climáticas e propõe estrategias de mitigação e adaptação a elas. As estrategias de 
mitigação são direcionadas à causa dessas mudanças, procurando reduzir a concentração de gases de efeito estufa 
na atmosfera. As estratégias de adaptação , por sua vez, são direcionadas aos efeitos dessas mudanças, procurando 
preparar os sistemas humanos às mudanças climáticas já em andamento, de modo a reduzir seus efeitos negativos. 
IPCC, 2014. Climate Change 2014 : synthesis report. Disponível em: http://ar5-syr.ipcc.ch. Acesso em: 22 out. 2015 (adaptado). 
Considerando as informações do texto, qual ação representa uma estrategia de adaptação?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Construção de usinas eólicas.` },
      { id: 'B', type: 'text', value: `Tratamento de resíduos sólidos.` },
      { id: 'C', type: 'text', value: `Aumento da eficiência dos veículos.` },
      { id: 'D', type: 'text', value: `Adoção de agricultura sustentável de baixo carbono.` },
      { id: 'E', type: 'text', value: `Criação de diques de contenção em regiões costeiras.` },
    ],
    correct: 'E',
    explanation: `A adaptação é a ação consequente a mitigação, ou seja, a adaptação é a forma de evitar uma consequência já existente diante de um problema ambiental. Desta forma, a construção de diques em regiões costeiras é uma forma de evitar alagamentos na região, já que uma das consequências do efeito estufa é o aumento dos níveis de água nas regiões costeiras.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A lipofilia é um dos fatores fundamentais para o 
planejamento de um fármaco. Ela mede o grau de 
afinidade que a substância tem com ambientes apolares, 
podendo ser avaliada por seu coeficiente de partição. 
CH₃ 
X 
CH₃ 
H 
X = OH (Testosterona) 
X = H (Composto 1) 
X = CH₃ (Composto 2) 
H 
H 
O 
NOGUEIRA, L. J.; MONTANARI, C. A.; DONNICI, C. L. Histórico da evolução da química medicinal 
e a importância da lipofilia: de Hipócrates e Galeno a Paracelsus e as contribuições de Overton e 
de Hansch. Revista Virtual de Química , n. 3, 2009 (adaptado). 
Em relação ao coeficiente de partição da testosterona, as 
lipofilias dos compostos 1 e 2 são, respectivamente,`,
    images: ['/enem/2016/images/enem_2016_d1_q81.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `menor e menor que a lipofilia da testosterona.` },
      { id: 'B', type: 'text', value: `menor e maior que a lipofilia da testosterona.` },
      { id: 'C', type: 'text', value: `maior e menor que a lipofilia da testosterona.` },
      { id: 'D', type: 'text', value: `maior e maior que a lipofilia da testosterona.` },
      { id: 'E', type: 'text', value: `menor e igual à lipofilia da testosterona.` },
    ],
    correct: 'D',
    explanation: `Como a lipofilia mede a afinidade por compostos apolares, quando X for H ou CH₃ o caráter apolar da molécula será maior do que quando X for OH.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Uma invenção que significou um grande avanço 
tecnológico na Antiguidade, a polia composta ou a associação 
de polias, é atribuída a Arquimedes (287 a.C. a 212 a.C.). 
O aparato consiste em associar uma série de polias 
móveis a uma polia fixa. A figura exemplifica um arranjo 
possível para esse aparato. É relatado que Arquimedes 
teria demonstrado para o rei Hierão um outro arranjo 
desse aparato, movendo sozinho, sobre a areia da praia, 
um navio repleto de passageiros e cargas, algo que 
seria impossível sem a participação de muitos homens. 
Suponha que a massa do navio era de 3 000 kg, que o 
coeficiente de atrito estático entre o navio e a areia era 
de 0,8 e que Arquimedes tenha puxado o navio com uma 
força F 
→ 
, paralela à direção do movimento e de módulo 
igual a 400 N. Considere os fios e as polias ideais, a 
aceleração da gravidade igual a 10 m/s² e que a superfície 
da praia é perfeitamente horizontal. 
F 
Disponível em: www.histedbr.fae.unicamp.br. Acesso em: 28 fev. 2013 (adaptado). 
O número mínimo de polias móveis usadas, nessa 
situação, por Arquimedes foi`,
    images: ['/enem/2016/images/enem_2016_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3.` },
      { id: 'B', type: 'text', value: `6.` },
      { id: 'C', type: 'text', value: `7.` },
      { id: 'D', type: 'text', value: `8.` },
      { id: 'E', type: 'text', value: `10.` },
    ],
    correct: 'B',
    explanation: `Para que a caixa entre em iminência de movimento é necessário que a força de atrito (fat) estática assuma o seu valor máximo: fat=μ.N, sendo N=P. Se a massa do corpo vale 3000kg, o peso será 30.000N fat=0,8 x 30.000 = 24.000N. Em cada roldana, a força de tração é dividida por 2. O número de roldanas será indicado para que a força de tração ligada ao corpo seja maior que a fat max. Como a força aplicada é de 400N, a força após 1 roldana será de 800N, mais uma 1600N, colocando outra 3200N, mais uma 6400N, e a seguir 12.800N, dobrando mais uma vez a tração ao colocar outra roldana, teremos uma força de 25.600N, o que coloca o corpo em movimento, pois supera os 24.000N da fat máx.`,
    subject: ['fis'],
    topics: ['Leis de Newton', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O Brasil possui um grande número de espécies 
distintas entre animais, vegetais e microrganismos 
envoltos em uma imensa complexidade e distribuídas em 
uma grande variedade de ecossistemas. 
SANDES, A. R. R.; BLASI, G. Biodiversidade e diversidade química e genética . 
 Disponível em: http://novastecnologias.com.br. Acesso em: 22 set. 2015 (adaptado). 
O incremento da variabilidade ocorre em razão da 
permuta genética, a qual propicia a troca de segmentos 
entre cromátides não irmãs na meiose. 
Essa troca de segmentos é determinante na`,
    alternatives: [
      { id: 'A', type: 'text', value: `produção de indivíduos mais férteis.` },
      { id: 'B', type: 'text', value: `transmissão de novas características adquiridas.` },
      { id: 'C', type: 'text', value: `recombinação genética na formação dos gametas.` },
      { id: 'D', type: 'text', value: `ocorrência de mutações somáticas nos descendentes.` },
      { id: 'E', type: 'text', value: `variação do número de cromossomos característico 
da espécie.` },
    ],
    correct: 'C',
    explanation: `A troca de cromátides não-irmãs durante a meiose gera um processo de recombinação genética na formação dos gametas. Não caracteriza uma mutação, tendo em vista que o material genético continua íntegro. Ressalta-se que a meiose em outros taxa diferentes dos animais origina células distintas (ex. esporos em plantas).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Num experimento, um professor deixa duas bandejas 
de mesma massa, uma de plástico e outra de alumínio, 
sobre a mesa do laboratório. Após algumas horas, ele 
pede aos alunos que avaliem a temperatura das duas 
bandejas, usando para isso o tato. Seus alunos afirmam, 
categoricamente, que a bandeja de alumínio encontra-se 
numa temperatura mais baixa. Intrigado, ele propõe uma 
segunda atividade, em que coloca um cubo de gelo sobre 
cada uma das bandejas, que estão em equilíbrio térmico 
com o ambiente, e os questiona em qual delas a taxa de 
derretimento do gelo será maior. 
O aluno que responder corretamente ao questionamento 
do professor dirá que o derretimento ocorrerá`,
    alternatives: [
      { id: 'A', type: 'text', value: `mais rapidamente na bandeja de alumínio, pois 
ela tem uma maior condutividade térmica que a 
de plástico.` },
      { id: 'B', type: 'text', value: `mais rapidamente na bandeja de plástico, pois ela 
tem inicialmente uma temperatura mais alta que a 
de alumínio.` },
      { id: 'C', type: 'text', value: `mais rapidamente na bandeja de plástico, pois ela tem 
uma maior capacidade térmica que a de alumínio.` },
      { id: 'D', type: 'text', value: `mais rapidamente na bandeja de alumínio, pois ela 
tem um calor específico menor que a de plástico.` },
      { id: 'E', type: 'text', value: `com a mesma rapidez nas duas bandejas, pois 
apresentarão a mesma variação de temperatura.` },
    ],
    correct: 'A',
    explanation: `A questão trata de taxa de aquecimento do material e isso está relacionado à taxa de transferência de calor ou condutividade térmica determinada pela equação de Fourier. Se a questão quisesse qual material derrete mais gelo, a questão se preocuparia com a quantidade de calor, portanto a resposta seria baixo calor específico.`,
    subject: ['fis'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os tensoativos são compostos capazes de interagir com substancias polares e apolares. A parte iônica dos tensoativos interage com substâncias polares, e a parte lipofílica interage com as apolares. A estrutura orgânica de um tensoativo pode ser representada por: CH₂ C CH₂ CH₂ CH₂ CH₂ CH₂ CH₂ O H₃ C CH₂ CH₂ CH₂ CH₂ CH₂ CH₂ Ao adicionar um tensoativo sobre a água, suas moléculas formam um arranjo ordenado. Esse arranjo é representado esquematicamente por: A Nível da água B Nível da`,
    images: ['/enem/2016/images/enem_2016_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `O tensoativo em questão (molécula anfifílica &#8211; polar e apolar) tem a sua parte polar ligada a água e a parte apolar fora da mesma.`,
    subject: ['qui'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Um experimento para comprovar a natureza ondulatória da radiação de micro-ondas foi realizado da seguinte 
forma: anotou-se a frequência de operação de um forno de micro-ondas e, em seguida, retirou-se sua plataforma 
giratória. No seu lugar, colocou-se uma travessa refratária com uma camada grossa de manteiga. Depois disso, o 
forno foi ligado por alguns segundos. Ao se retirar a travessa refrataria do forno, observou-se que havia tres pontos 
de manteiga derretida alinhados sobre toda a travessa. Parte da onda estacionaria gerada no interior do forno e 
ilustrada na figura. 
I 
II 
III 
IV 
V 
De acordo com a figura, que posições correspondem a dois pontos consecutivos da manteiga derretida?`,
    images: ['/enem/2016/images/enem_2016_d1_q86.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I e III` },
      { id: 'B', type: 'text', value: `I e V` },
      { id: 'C', type: 'text', value: `II e III` },
      { id: 'D', type: 'text', value: `II e IV` },
      { id: 'E', type: 'text', value: `II e V` },

    ],
    correct: 'A',
    explanation: `O aquecimento ocorrerá nas regiões que tiverem maior intensidade (cristas e vales) e isso ficará evidenciado nos ventres das ondas.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Portadores de diabetes insipidus reclamam da 
confusão feita pelos profissionais da saúde quanto aos 
dois tipos de diabetes: mellitus e insipidus . Enquanto 
o primeiro tipo está associado aos níveis ou à ação da 
insulina, o segundo não está ligado à deficiência desse 
hormônio. O diabetes insipidus é caracterizado por um 
distúrbio na produção ou no funcionamento do hormônio 
antidiurético (na sigla em inglês, ADH), secretado pela 
neuro-hipófise para controlar a reabsorção de água pelos 
túbulos renais. 
Tendo em vista o papel funcional do ADH, qual é 
um sintoma clássico de um paciente acometido por 
diabetes insipidus ?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Alta taxa de glicose no sangue.` },
      { id: 'B', type: 'text', value: `Aumento da pressão arterial.` },
      { id: 'C', type: 'text', value: `Ganho de massa corporal.` },
      { id: 'D', type: 'text', value: `Anemia crônica.` },
      { id: 'E', type: 'text', value: `Desidratação.` },
    ],
    correct: 'E',
    explanation: `A falta de ADH ou sua não-atuação caracteriza a diabetes insipidus, cuja característica é a micção contínua e volumosa, pois o ADH é o hormônio responsável pela reabsorção de água nos néfrons, através da abertura das aquaporinas. Como a reabsorção é baixa, o volume urinário aumenta, caracterizando uma desidratação.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A magnetohipertermia é um procedimento terapêutico 
que se baseia na elevação da temperatura das células 
de uma região específica do corpo que estejam afetadas 
por um tumor. Nesse tipo de tratamento, nanopartículas 
magnéticas são fagocitadas pelas células tumorais, e 
um campo magnético alternado externo é utilizado para 
promover a agitação das nanopartículas e consequente 
aquecimento da célula. 
A elevação de temperatura descrita ocorre porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `o campo magnético gerado pela oscilação das 
nanopartículas é absorvido pelo tumor.` },
      { id: 'B', type: 'text', value: `o campo magnético alternado faz as nanopartículas 
girarem, transferindo calor por atrito.` },
      { id: 'C', type: 'text', value: `as nanopartículas interagem magneticamente com as 
células do corpo, transferindo calor.` },
      { id: 'D', type: 'text', value: `o campo magnético alternado fornece calor para as 
nanopartículas que o transfere às células do corpo.` },
      { id: 'E', type: 'text', value: `as nanopartículas são aceleradas em um único sentido 
em razão da interação com o campo magnético, 
fazendo-as colidir com as células e transferir calor.` },
    ],
    correct: 'B',
    explanation: `Após ser fagocitada, a nanopartícula é submetida a um campo magnético variável, o que provoca um torque na nanopartícula, transferindo calor.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O aquecimento de um material por irradiação com 
micro-ondas ocorre por causa da interação da onda 
eletromagnética com o dipolo elétrico da molécula. 
Um importante atributo do aquecimento por micro-ondas 
é a absorção direta da energia pelo material a ser 
aquecido. Assim, esse aquecimento é seletivo e 
dependerá, principalmente, da constante dielétrica e da 
frequência de relaxação do material. O gráfico mostra a 
taxa de aquecimento de cinco solventes sob irradiação 
de micro-ondas. 
Água 
Metanol 
Etanol 
Propanol 
n-Hexano 
100 
80 
Temperatura (°C) 
60 
40 
20 
0 10 20 30 40 50 60 70 80 
Tempo (s) 
BARBOZA, A. C. R. N. et al. Aquecimento em forno de micro-ondas. Desenvolvimento de 
alguns conceitos fundamentais. Química Nova , n. 6, 2001 (adaptado). 
No gráfico, qual solvente apresenta taxa média de 
aquecimento mais próxima de zero, no intervalo de 
0 s a 40 s?`,
    images: ['/enem/2016/images/enem_2016_d1_q89.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `H 2 O` },
      { id: 'B', type: 'text', value: `CH 3 OH` },
      { id: 'C', type: 'text', value: `CH 3 CH 2 OH` },
      { id: 'D', type: 'text', value: `CH 3 CH 2 CH 2 OH` },
      { id: 'E', type: 'text', value: `CH 3 CH 2 CH 2 CH 2 CH 2 CH 3` },
    ],
    correct: 'E',
    explanation: `Questão envolvendo análise gráfica e fórmula dos compostos orgânicos. O aluno observaria que a curva que apresenta a taxa média de aquecimento mais próxima de zero seria a do hexano, depois marcaria a opção que representa sua estrutura.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Apesar 
da 
grande 
diversidade 
biológica, 
a 
hipótese de que a vida na Terra tenha tido uma única 
origem comum é aceita pela comunidade científica. 
Uma evidência que apoia essa hipótese é a observação 
de processos biológicos comuns a todos os seres vivos 
atualmente existentes. 
Um exemplo de tal processo é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `desenvolvimento embrionário.` },
      { id: 'B', type: 'text', value: `reprodução sexuada.` },
      { id: 'C', type: 'text', value: `respiração aeróbica.` },
      { id: 'D', type: 'text', value: `excreção urinária.` },
      { id: 'E', type: 'text', value: `síntese proteica.` },
    ],
    correct: 'E',
    explanation: `Das reações citadas, a síntese de proteínas é a única observada em todos os seres vivos (inclusive procariontes, fungos, plantas etc). As proteínas exercem inúmeras funções vitais, tais como formação de estruturas, produção de enzimas, síntese de anticorpos e hormônios, etc.`,
    subject: ['bio'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
];

export default ENEM_2016_D1;
