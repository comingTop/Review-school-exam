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
    explanation: `Schopenhauer opõe a satisfação dos desejos, comparada à esmola que só adia a fome do mendigo, à resignação, comparada à fortuna herdada que liberta o herdeiro de preocupações. O trecho retoma a tradição filosófica ocidental segundo a qual a felicidade depende do domínio de si e da serenidade interior, e não da busca constante por bens exteriores, por isso a alternativa B, que aponta a administração da independência interior, é a correta. A busca de prazeres efêmeros (E) é justamente o que o autor critica, assim como a consagração de relacionamentos afetivos (A), que não aparece no texto. A fugacidade do conhecimento empírico (C) e a liberdade de expressão religiosa (D) tratam de temas estranhos à reflexão sobre a felicidade proposta pelo filósofo.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `representação do legislativo com a fórmula do bipartidarismo.` },
      { id: 'B', type: 'text', value: `detenção de lideranças populares por crimes de subversão.` },
      { id: 'C', type: 'text', value: `presença de políticos com trajetórias no regime autoritário.` },
      { id: 'D', type: 'text', value: `prorrogação das restrições advindas dos atos institucionais.` },
      { id: 'E', type: 'text', value: `estabilidade da economia com o congelamento anual de preços.` },
    ],
    correct: 'C',
    explanation: `O texto descreve a Nova República como um período de reencontro com os governos civis e a democracia, marcado por rupturas em relação ao regime anterior, mas também por continuidades. Uma dessas continuidades foi a permanência, nos cargos e na vida pública, de políticos cujas trajetórias haviam se formado durante o regime militar autoritário, por isso a alternativa C é a correta. O bipartidarismo (A) e as restrições dos atos institucionais (D) foram justamente superados com a redemocratização, caracterizando rupturas. A detenção de lideranças por subversão (B) pertencia ao período ditatorial, e o congelamento anual de preços (E) não garantiu estabilidade econômica, como o próprio texto indica ao citar inflação e hiperinflação.`,
    subject: ['his'],
    topics: ['Brasil República', 'Ditadura Militar no Brasil', 'Questões aleatórias'],
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
    explanation: `A proposta de moradias móveis em Andalsnes permitiria que o morador deslocasse a própria casa para perto do trabalho nos dias úteis e para o bosque nos fins de semana. Ao levar consigo a residência, elimina-se a necessidade de ir e voltar diariamente entre o local de moradia e o de trabalho, reduzindo a intensidade do movimento pendular, por isso a alternativa B é a correta. O êxodo rural (A) e a migração de retorno (C) referem-se a mudanças definitivas de residência, não ao vaivém diário. O deslocamento sazonal (D) liga-se a atividades específicas de certas épocas do ano, e a ocupação de áreas centrais (E) não é o processo diminuído pela proposta descrita.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
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
    explanation: `O texto mostra que o Rio de Janeiro exerce influência direta sobre cidades de vários estados, organizando uma rede urbana que inclui centros como Vitória, Juiz de Fora e Campos dos Goytacazes. Essa relação de comando e dependência funcional entre uma cidade polo e as áreas sob sua influência define o conceito de região polarizada, por isso a alternativa C é a correta. A frente pioneira (A) designa áreas de expansão da ocupação econômica, e a zona de transição (B) marca limites entre regiões distintas. A área de conurbação (D) exige a fusão física do tecido urbano de cidades vizinhas, e a periferia metropolitana (E) não traduz a hierarquia de influência descrita no texto.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `concepção idealizada do território, entendido como geograficamente indiferenciado.` },
      { id: 'B', type: 'text', value: `percepção corrente de uma ancestralidade comum às populações ameríndias.` },
      { id: 'C', type: 'text', value: `compreensão etnocêntrica acerca das populações dos territórios conquistados.` },
      { id: 'D', type: 'text', value: `transposição direta das categorias originadas no imaginário medieval.` },
      { id: 'E', type: 'text', value: `visão utópica configurada a partir de fantasias de riqueza.` },
    ],
    correct: 'C',
    explanation: `O Texto I mostra que os europeus designavam os indígenas por termos genéricos e econômicos, e o Texto II afirma que o conceito de índio foi construído pelos conquistadores, que, indiferentes à diversidade cultural, chamavam da mesma forma povos tão distintos quanto tupinambás e astecas. A comparação revela uma compreensão etnocêntrica, que julgava e nomeava as populações conquistadas a partir dos próprios referenciais europeus, por isso a alternativa C é a correta. A concepção idealizada do território (A) e a visão utópica de riqueza (E) não explicam a homogeneização dos povos nativos. A ancestralidade comum (B) não era reconhecida pelos europeus, e a transposição de categorias do imaginário medieval (D) não corresponde ao processo de generalização descrito.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
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
    explanation: `O solilóquio de Hamlet expressa a hesitação diante do viver e do morrer e a reflexão angustiada sobre a existência, antecipando temas caros ao existencialismo. Essa relação se estabelece pela ênfase na tensão entre a consciência de si, que leva a personagem a interrogar o próprio ser, e a angústia humana diante da incerteza e da ação, por isso a alternativa A é a correta. A inevitabilidade do destino (B) contraria a liberdade de deliberar que marca o texto. A relação entre personagem e ordem do mundo (C), a oposição entre racionalidade e loucura (D) e a dependência paterna (E) não traduzem o conflito interior entre autoconsciência e aflição que aproxima o trecho do existencialismo.`,
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
    explanation: `O anúncio de 1968 retrata a mulher associada à limpeza, inclusive projetando essa função para o futuro, enquanto a notícia de 2016 revela comentários machistas diante da presença feminina no corpo de astronautas da Nasa. A comparação evidencia que, apesar do intervalo de décadas, houve a manutenção de estereótipos de gênero que restringem o papel da mulher, por isso a alternativa D é a correta. A elitização da carreira científica (A) e a ambição das indústrias patrocinadoras (C) não são o foco da aproximação entre os textos. A qualificação da atividade doméstica (B) e a equiparação de papéis nas relações familiares (E) contrariam a persistência da desvalorização feminina mostrada nos dois momentos.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `restrição à realização do comércio ambulante por africanos escravizados e seus descendentes.` },
      { id: 'B', type: 'text', value: `convivência entre homens e mulheres livres, de diversas origens, no pequeno comércio.` },
      { id: 'C', type: 'text', value: `presença de mulheres negras no comércio de rua de diversos produtos e alimentos.` },
      { id: 'D', type: 'text', value: `dissolução dos hábitos culturais trazidos do continente de origem dos escravizados.` },
      { id: 'E', type: 'text', value: `entrada de imigrantes portugueses nas atividades ligadas ao pequeno comércio urbano.` },
    ],
    correct: 'C',
    explanation: `O texto descreve a atuação autônoma das mulheres comerciantes e vendedoras ambulantes na África Ocidental, traço que atravessou o Atlântico com o tráfico. Essa característica pode ser relacionada à presença marcante de mulheres negras no comércio de rua das cidades do Brasil escravista dos séculos XVIII e XIX, as chamadas negras de tabuleiro ou ganhadeiras, por isso a alternativa C é a correta. A restrição ao comércio ambulante por escravizados (A) contraria a realidade histórica desse pequeno comércio urbano. A convivência entre homens e mulheres livres (B) e a entrada de imigrantes portugueses (E) não traduzem a herança africana destacada, e a dissolução dos hábitos culturais de origem (D) opõe-se à continuidade apontada pelo autor.`,
    subject: ['his'],
    topics: ['Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Quanto mais complicada se tornou a produção industrial, mais
numerosos passaram a ser os elementos da indústria que exigiam
garantia de fornecimento. Três deles eram de importância
fundamental: o trabalho, a terra e o dinheiro. Numa sociedade
comercial, esse fornecimento só poderia ser organizado de uma
forma: tornando-os disponíveis à compra. Agora eles tinham que
ser organizados para a venda no mercado. Isso estava de acordo
com a exigência de um sistema de mercado. Sabemos que em um
sistema como esse, os lucros só podem ser assegurados se se
garante a autorregulação por meio de mercados competitivos
interdependentes. POLANYI, K. A grande transformação : as
origens de nossa época. Rio de Janeiro: Campus, 2000
(adaptado). A consequência do processo de transformação
socioeconômica abordado no texto é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `expansão das terras comunais.` },
      { id: 'B', type: 'text', value: `limitação do mercado como meio de especulação.` },
      { id: 'C', type: 'text', value: `consolidação da força de trabalho como mercadoria.` },
      { id: 'D', type: 'text', value: `diminuição do comércio como efeito da industrialização.` },
      { id: 'E', type: 'text', value: `adequação do dinheiro como elemento padrão das transações.` },
    ],
    correct: 'C',
    explanation: `Polanyi descreve a passagem para a sociedade de mercado, em que trabalho, terra e dinheiro passaram a ser organizados para a venda, tornando-se disponíveis à compra como qualquer outra mercadoria. A consequência central desse processo foi a consolidação da força de trabalho como mercadoria, submetida à lógica da oferta e da procura em um sistema autorregulável, por isso a alternativa C é a correta. A expansão das terras comunais (A) contraria a privatização característica da sociedade de mercado. A limitação do mercado como meio de especulação (B) e a diminuição do comércio (D) opõem-se à ampliação da mercantilização descrita, e a adequação do dinheiro como padrão das transações (E) não capta a transformação essencial, que é a mercantilização do próprio trabalho.`,
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
    explanation: `O texto compara a sedição da Bahia de 1798 à Inconfidência Mineira de 1789, mostrando que a revolta baiana, de caráter mais popular, avançou sobre a estrutura social da colônia, e não apenas sobre a condição de subordinação ao império. A diferença entre as duas residia na pretensão de abolir a escravidão africana, demanda presente entre os conjurados baianos, muitos deles pobres e negros, por isso a alternativa B é a correta. A eliminação da hierarquia militar (A) e a supressão da propriedade fundiária (D) não definem o projeto baiano. A anulação do domínio metropolitano (C) e a extinção do absolutismo (E) eram pretensões comuns às duas sedições, e não aquilo que as distinguia.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Escravidão e abolição', 'Questões aleatórias'],
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
    explanation: `A imagem mostra a fabricação de uma viola, e o Texto II defende que a escolha de novos bens patrimoniais permite a diferentes grupos sociais preservar aquilo que consideram próprio e identitário. O texto ressalta, portanto, a proteção de bens que se identificam como conhecimentos tradicionais, isto é, o saber fazer transmitido entre gerações, parte do patrimônio imaterial, por isso a alternativa E é a correta. Artefatos sagrados (A) e objetos arqueológicos (C) restringem o patrimônio a dimensões religiosa ou material específica. As heranças materiais (B) desconsideram justamente o caráter imaterial do saber, e as peças comercializáveis (D) contrariam o sentido cultural, e não mercantil, da valorização proposta.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
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
    explanation: `A instalação da plataforma petrolífera chinesa em águas disputadas do Mar da China Meridional gerou tensões com o Vietnã e as Filipinas, que reivindicam a mesma área. A ação chinesa evidencia um conflito centrado na jurisdição da soberania territorial, ou seja, na disputa pelo direito de controlar e explorar aquele espaço marítimo, por isso a alternativa D é a correta. A distribuição de zonas econômicas especiais (A) e o embargo da produção industrial (E) não correspondem ao litígio descrito. O monopólio de inovações tecnológicas extrativas (B) e a dinamização da atividade comercial (C) não explicam a imposição de controle sobre águas contestadas, que é uma questão de soberania e fronteiras.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Conflitos internacionais', 'Questões aleatórias'],
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
    explanation: `A Operação Condor articulou as ditaduras civis-militares do Cone Sul, fundamentadas na Doutrina de Segurança Nacional e no anticomunismo, na definição de fronteiras ideológicas e na identificação de um inimigo interno. Nesse contexto, a operação tinha como objetivo coordenar a repressão de ativistas oposicionistas, perseguindo além das fronteiras nacionais militantes considerados subversivos, por isso a alternativa D é a correta. A modificação de limites territoriais (A) e a implantação de governos nacionalistas (E) não eram metas da articulação repressiva. A sobrevivência de oficiais exilados (B) inverte a lógica da operação, voltada contra exilados, e a interferência de potências mundiais (C) não define o objetivo de cooperação entre as ditaduras.`,
    subject: ['his'],
    topics: ['Ditadura Militar no Brasil', 'Guerra Fria', 'Questões aleatórias'],
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
    explanation: `O texto situa a criação da Justiça do Trabalho entre a Constituição de 1934 e a consolidação no Estado Novo, em 1937, período de forte intervenção estatal nas relações entre capital e trabalho. A instituição foi criada para ordenar os conflitos laborais, enquadrando as disputas entre patrões e empregados em um aparato regulado e controlado pelo Estado, por isso a alternativa B é a correta. Legitimar os protestos fabris (A) contraria o caráter disciplinador e tutelar da medida. A oficialização de sindicatos plurais (C) opõe-se ao sindicalismo único e atrelado ao Estado, enquanto assegurar princípios liberais (D) e unificar salários (E) não correspondem ao objetivo de institucionalizar e conter os conflitos trabalhistas.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
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
    explanation: `Adorno e Horkheimer sustentam que, na indústria cultural, a liberdade de escolha apenas reflete a coerção econômica, pois o indivíduo é livre para escolher sempre a mesma coisa, padronizada e imposta pelo mercado. A liberdade de escolha na civilização ocidental é, assim, uma ilusão da contemporaneidade, uma aparência de autonomia que esconde a determinação do consumo, por isso a alternativa E é a correta. Caracterizá-la como legado social (A), patrimônio político (B) ou conquista da humanidade (D) contraria a crítica dos autores, que denunciam a falsidade dessa liberdade. Considerá-la produto da moralidade (C) também não traduz o argumento, centrado na coerção econômica da indústria cultural.`,
    subject: ['fil'],
    topics: ['Filosofia Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Parceria Transpacífica Japão Vietnã Cingapura Brunei
Darussalam Malásia Austrália Nova Zelândia Dentro das atuais
redes produtivas, o referido bloco apresenta composição
estratégica por se tratar de um conjunto de países com`,
    images: ['/enem/2016/images/enem_2016_d1_q16.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elevado padrão social.` },
      { id: 'B', type: 'text', value: `sistema monetário integrado.` },
      { id: 'C', type: 'text', value: `alto desenvolvimento tecnológico.` },
      { id: 'D', type: 'text', value: `identidades culturais semelhantes.` },
      { id: 'E', type: 'text', value: `vantagens locacionais complementares.` },
    ],
    correct: 'E',
    explanation: `O mapa apresenta os países da Parceria Transpacífica, que reúne economias muito distintas em dois lados do oceano Pacífico, de desenvolvimento, porte e localização variados. A composição estratégica do bloco explica-se por reunir países com vantagens locacionais complementares, combinando fornecedores de matérias-primas, polos tecnológicos e grandes mercados consumidores nas redes produtivas globais, por isso a alternativa E é a correta. O elevado padrão social (A) e o alto desenvolvimento tecnológico (C) não são comuns a todos os integrantes. O sistema monetário integrado (B) não existe no bloco, e as identidades culturais semelhantes (D) inexistem entre países tão diversos como Japão, Peru e Nova Zelândia.`,
    subject: ['geo'],
    topics: ['Globalização', 'Indústria e comércio', 'Questões aleatórias'],
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
      { id: 'A', type: 'image', value: `/enem/2016/images/enem_2016_d1_q17_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2016/images/enem_2016_d1_q17_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2016/images/enem_2016_d1_q17_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2016/images/enem_2016_d1_q17_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2016/images/enem_2016_d1_q17_E.jpg` },
    ],
    correct: 'A',
    explanation: `O logotipo da ONU representa a Terra vista a partir do Polo Norte, com os continentes dispostos em círculos concêntricos ao redor desse ponto central. Essa representação corresponde ao modelo da projeção azimutal ou plana, em que a superfície do globo é projetada sobre um plano tangente a um polo, por isso a alternativa A, que ilustra o plano tocando a esfera, é a correta. As demais figuras representam projeções distintas: a superfície cônica (B) corresponde à projeção cônica, e as superfícies cilíndricas (C, D e E) correspondem às projeções cilíndricas, que não reproduzem a visão polar centrada do emblema da ONU.`,
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
      { id: 'E', type: 'text', value: `decréscimo dos índices de desenvolvimento econômico.` },
    ],
    correct: 'D',
    explanation: `O texto expõe o mecanismo de compensação definido no Protocolo de Quioto, pelo qual países ou empresas que reduzem suas emissões abaixo das metas podem vender créditos a quem não consegue cumpri-las. As posições contrárias a essa estratégia apontam que ela promove a desigualdade na distribuição do impacto ecológico, pois permite que os maiores poluidores continuem emitindo ao comprar créditos, por isso a alternativa D é a correta. A retração nos níveis de consumo (A) e o decréscimo do desenvolvimento econômico (E) não são o foco da crítica. O surgimento de conflitos diplomáticos (B) e a diminuição dos lucros na produção de energia (C) não traduzem a objeção central, que recai sobre a transferência desigual da responsabilidade ambiental.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
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
    explanation: `O texto mostra que países periféricos dependem cada vez mais das remessas de dinheiro enviadas por seus emigrantes que trabalham em países centrais, como ocorre com Índia, México e Filipinas. Um aspecto do mundo globalizado que facilitou esse processo na virada do século XX para o XXI foi o avanço técnico das comunicações, que tornou rápidas e seguras as transferências internacionais de recursos, por isso a alternativa B é a correta. A integração de culturas distintas (A) não viabiliza o envio de divisas. A quebra de barreiras alfandegárias (C) e a flexibilização de regras trabalhistas (D) referem-se a mercadorias e contratos, não ao fluxo de remessas, e a desconcentração espacial da produção (E) não explica o envio de dinheiro pelos imigrantes.`,
    subject: ['geo'],
    topics: ['Globalização', 'Demografia', 'Questões aleatórias'],
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
    explanation: `Descartes afirma que o verdadeiro saber não se alcança pela mera leitura dos raciocínios de Platão e Aristóteles, mas pela capacidade do próprio espírito de resolver os problemas e formular juízos sólidos. O conhecimento é, assim, resultado da autonomia do sujeito pensante, que deve examinar as questões por si mesmo em vez de repetir conclusões alheias, por isso a alternativa D é a correta. A investigação de natureza empírica (A) não corresponde ao racionalismo cartesiano, fundado na razão. A retomada da tradição intelectual (B) e a imposição de valores ortodoxos (C) contrariam a crítica ao saber apenas herdado, e a liberdade do agente moral (E) desloca o foco da teoria do conhecimento para a ação ética.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Teoria do conhecimento', 'Questões aleatórias'],
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
    explanation: `Políbio, escrevendo no século II a.C., admira-se de os romanos terem submetido quase todo o mundo habitado em pouco mais de cinquenta anos, fato que considera inédito. A experiência a que ele se refere é a concretização do desígnio imperialista romano, isto é, a expansão militar e política que levou Roma a dominar o Mediterrâneo, por isso a alternativa C é a correta. A ampliação do contingente de camponeses livres (A) e a libertação do domínio etrusco (E) não correspondem ao processo de conquista descrito. A consolidação das falanges hoplitas (B) remete à organização militar grega, e a adoção do monoteísmo cristão (D) é anacrônica para o período em questão.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
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
    explanation: `Em Persépolis, Marjane Satrapi recupera suas memórias de infância ligando a Revolução Islâmica de 1979 à imposição do véu obrigatório nas escolas a partir de 1980. A narrativa estabelece a relação entre transformação política e modificação de costumes, mostrando como a mudança de regime alterou diretamente o cotidiano e os hábitos das pessoas, por isso a alternativa E é a correta. O conflito trabalhista e o engajamento sindical (A) não aparecem na cena recordada. A organização familiar e a proteção à infância (B), a centralização econômica e a pregação religiosa (C) e a desigualdade de renda (D) não traduzem o vínculo entre a revolução e a imposição de novos costumes retratado pela autora.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
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
    explanation: `O Texto I, de Heráclito, afirma que tudo flui e se transforma, como o rio em que não se pode banhar duas vezes, enquanto o Texto II, de Parmênides, sustenta que o ser é uno, imutável e indestrutível. Essa oposição entre o devir e a permanência insere-se no campo das discussões de base ontológica, isto é, da reflexão sobre a natureza do ser, por isso a alternativa C é a correta. As investigações do pensamento sistemático (A) e as habilidades da retórica sofística (D) não correspondem ao debate metafísico dos pré-socráticos. As preocupações do período mitológico (B) são superadas pela explicação racional, e as verdades do mundo sensível (E) não captam a oposição propriamente ontológica entre ser e mudança.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Questões aleatórias'],
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
      { id: 'E', type: 'text', value: `a imposição de resistência e o monitoramento da liberdade.` },
    ],
    correct: 'C',
    explanation: `O texto de Iris Marion Young distingue a democracia deliberativa, que confia no debate racional para chegar a acordos satisfatórios a todos, da democracia ativista, que desconfia desses acordos por entender que as desigualdades favorecem os mais poderosos. As duas concepções tratam como imprescindíveis, respectivamente, a obtenção do consenso e a mobilização das minorias por meio da oposição crítica, por isso a alternativa C é a correta. A decisão da maioria e a uniformização de direitos (A) não expressam o núcleo de cada concepção. A organização de eleições e o anarquismo (B), a fragmentação da participação e a desobediência civil (D) e a imposição de resistência e o monitoramento da liberdade (E) não correspondem à relação entre consenso deliberado e mobilização ativista descrita.`,
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
    explanation: `Hans Jonas alerta que a tecnologia moderna, ao estender seu poder sobre a própria natureza do homem, converteu-se em ameaça e tornou a teoria ética uma terra de ninguém diante dos novos riscos. As implicações éticas dessa situação impõem um novo padrão de comportamento cujo objetivo é garantir a sobrevivência das gerações futuras, responsabilizando o presente pelo futuro da humanidade, por isso a alternativa B é a correta. O pragmatismo da escolha individual (A) contraria a dimensão coletiva e de longo prazo dessa ética. O fortalecimento de políticas liberais (C), a valorização de múltiplas etnias (D) e a promoção da inclusão social (E) não correspondem ao princípio de responsabilidade voltado à continuidade da vida defendido pelo autor.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Filosofia Contemporânea', 'Questões aleatórias'],
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
    explanation: `A imagem de São Benedito, santo negro, e o Texto II mostram que os santos eram usados pela Igreja para atrair devotos e transmitir ensinamentos a serem imitados pelos escravizados, muitos com crenças próprias. Ressignificados em irmandades, o ícone e a devoção estiveram, desde o século XVII, ligados ao esforço da Igreja Católica para cristianizar a população afro-brasileira, por isso a alternativa B é a correta. Reduzir o poder das confrarias (A) contraria o papel das irmandades na difusão da fé. Espoliar recursos materiais dos cativos (C), recrutar libertos para o clero (D) e atender à demanda por padroeiros locais (E) não correspondem ao objetivo de conversão religiosa dos africanos e seus descendentes.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Escravidão e abolição', 'Questões aleatórias'],
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
      { id: 'B', type: 'text', value: `reserva de postos de trabalho para a mão de obra local.` },
      { id: 'C', type: 'text', value: `oposição do clero católico à expansão de novas religiões.` },
      { id: 'D', type: 'text', value: `apoio da diplomacia varguista às opiniões dos líderes árabes.` },
      { id: 'E', type: 'text', value: `simpatia de membros da burocracia pelo projeto totalitário alemão.` },
    ],
    correct: 'E',
    explanation: `O texto relata que, a partir de 1935 e durante o Estado Novo, o governo brasileiro dificultou a entrada de judeus, chegando a proibir vistos a pessoas de origem semita por meio de circular secreta. Uma razão para essa política foi a simpatia de membros da burocracia pelo projeto totalitário alemão, cujo antissemitismo influenciava setores do Estado varguista, por isso a alternativa E é a correta. O receio do controle sionista sobre a economia (A) e o apoio da diplomacia a líderes árabes (D) não explicam a medida discriminatória. A reserva de postos de trabalho para a mão de obra local (B) e a oposição do clero católico a novas religiões (C) não correspondem ao motivo apontado, ligado à adesão a ideias nazistas.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `Desprezar quaisquer convenções e obrigações da sociedade.` },
      { id: 'B', type: 'text', value: `Atingir o verdadeiro prazer como o princípio e o fim da vida feliz.` },
      { id: 'C', type: 'text', value: `Defender a indiferença e a impossibilidade de obter alguma certeza.` },
      { id: 'D', type: 'text', value: `Aceitar o determinismo e ocupar-se com a esperança transcendente.` },
      { id: 'E', type: 'text', value: `Agir de forma virtuosa e sábia a fim de enaltecer o homem bom e belo.` },
    ],
    correct: 'C',
    explanation: `O texto atribui a Pirro a tese de que nada é nobre ou vergonhoso, justo ou injusto em si, pois os homens agem apenas segundo a lei e o costume, sem poder afirmar que algo seja mais isto do que aquilo. O ceticismo caracteriza-se, assim, por defender a indiferença diante das coisas e a impossibilidade de obter alguma certeza, suspendendo o juízo sobre a verdade, por isso a alternativa C é a correta. Desprezar quaisquer convenções sociais (A) contraria a aceitação da lei e do costume como guias práticos. Atingir o verdadeiro prazer (B) corresponde ao epicurismo, aceitar o determinismo e a esperança transcendente (D) a outras correntes, e agir virtuosamente para enaltecer o homem belo e bom (E) a ideais que o cético não assume.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Teoria do conhecimento', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `qualificação de serviços públicos em bairros periféricos.` },
      { id: 'B', type: 'text', value: `implantação de centros comerciais em eixos rodoviários.` },
      { id: 'C', type: 'text', value: `proibição de construções residenciais em regiões íngremes.` },
      { id: 'D', type: 'text', value: `disseminação de equipamentos culturais em locais turísticos.` },
      { id: 'E', type: 'text', value: `desregulamentação do setor imobiliário em áreas favelizadas.` },
    ],
    correct: 'A',
    explanation: `O texto define a função social da cidade como a organização do espaço que contempla todos os moradores, e não apenas os incluídos no mercado formal, rompendo com a tradição de divisão entre incluídos e excluídos. Uma política que viabiliza essa função é a qualificação de serviços públicos em bairros periféricos, pois leva infraestrutura e direitos às áreas historicamente excluídas, por isso a alternativa A é a correta. A implantação de centros comerciais em eixos rodoviários (B) e a disseminação de equipamentos culturais em locais turísticos (D) privilegiam a lógica do mercado. A proibição de construções em regiões íngremes (C) e a desregulamentação imobiliária em áreas favelizadas (E) não promovem a inclusão social defendida no texto.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
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
    explanation: `O texto classifica o Cerrado como um dos hotspots mundiais de biodiversidade, isto é, áreas prioritárias para conservação por abrigarem muitas espécies ameaçadas por ações antrópicas. A necessidade desse tipo de ação no bioma tem como causa a expansão da fronteira agrícola, pois o avanço da agropecuária sobre o Cerrado é o principal fator de destruição de seus ambientes naturais, por isso a alternativa E é a correta. A intensificação da atividade turística (A) e a elevação do extrativismo vegetal (D) não são as principais pressões sobre o bioma. A implantação de parques ecológicos (B) seria uma medida de proteção, não uma causa da ameaça, e a exploração de recursos minerais (C) tem impacto menor que o da ocupação agrícola.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Agricultura e pecuária', 'Questões aleatórias'],
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
    explanation: `Os textos relatam que a Hungria ergueu um muro na fronteira com a Sérvia e adotou cartazes pedindo aos imigrantes que respeitassem as leis e não roubassem empregos, posturas criticadas pelo ACNUR como xenófobas. O posicionamento governamental é condenado por ser considerado um caminho para o fortalecimento das práticas de discriminação contra refugiados e migrantes, por isso a alternativa E é a correta. A alteração do regime político (A) e a expansão dos domínios geográficos (C) não decorrem das medidas descritas. A fragilização da supremacia nacional (B) contraria o discurso nacionalista do governo, e o cerceamento da liberdade de expressão (D) não é o alvo da crítica do ACNUR, centrada na xenofobia.`,
    subject: ['geo'],
    topics: ['Demografia', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A sociologia ainda não ultrapassou a era das construções e das
sínteses filosóficas. Em vez de assumir a tarefa de lançar luz
sobre uma parcela restrita do campo social, ela prefere buscar
as brilhantes generalidades em que todas as questões são
levantadas sem que nenhuma seja expressamente tratada. Não é
com exames sumários e por meio de intuições rápidas que se
pode chegar a descobrir as leis de uma realidade tão complexa.
Sobretudo, generalizações às vezes tão amplas e tão apressadas
não são suscetíveis de nenhum tipo de prova. DURKHEIM, E. O
suicídio : estudo de sociologia. São Paulo: Martins Fontes,
2000. O texto expressa o esforço de Émile Durkheim em
construir uma sociologia com base na`,
    alternatives: [
      { id: 'A', type: 'text', value: `vinculação com a filosofia como saber unificado.` },
      { id: 'B', type: 'text', value: `reunião de percepções intuitivas para demonstração.` },
      { id: 'C', type: 'text', value: `formulação de hipóteses subjetivas sobre a vida social.` },
      { id: 'D', type: 'text', value: `adesão aos padrões de investigação típicos das ciências naturais.` },
      { id: 'E', type: 'text', value: `incorporação de um conhecimento alimentado pelo engajamento político.` },
    ],
    correct: 'D',
    explanation: `Durkheim critica a sociologia ainda presa a construções e sínteses filosóficas, que se contentam com generalidades e intuições rápidas em vez de tratar de modo rigoroso parcelas restritas da realidade social. Seu esforço é construir uma sociologia baseada na adesão aos padrões de investigação típicos das ciências naturais, com observação metódica e análise objetiva dos fatos sociais, por isso a alternativa D é a correta. A vinculação com a filosofia como saber unificado (A) é justamente o que ele quer superar. A reunião de percepções intuitivas (B) e a formulação de hipóteses subjetivas (C) opõem-se ao rigor pretendido, e a incorporação de conhecimento ligado ao engajamento político (E) contraria a objetividade científica defendida.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `concentração fundiária, impedindo os negros de tomar posse legítima do uso da terra.` },
      { id: 'B', type: 'text', value: `boicote econômico, proibindo os negros de consumir produtos ingleses sem resistência armada.` },
      { id: 'C', type: 'text', value: `sincretismo religioso, vetando os ritos sagrados dos negros nas cerimônias oficiais do Estado.` },
      { id: 'D', type: 'text', value: `controle sobre a movimentação, desautorizando os negros a transitar em determinadas áreas das cidades.` },
      { id: 'E', type: 'text', value: `exclusão do mercado de trabalho, negando à população negra o acesso aos bens de consumo.` },
    ],
    correct: 'D',
    explanation: `A imagem mostra fuzileiros navais aplicando a lei do passe, instrumento do regime de segregação racial do Apartheid sul-africano, vigente entre 1948 e 1994. Essa lei regulamentava o controle sobre a movimentação da população negra, exigindo documentos que a impediam de transitar livremente por determinadas áreas das cidades, por isso a alternativa D é a correta. A concentração fundiária (A) e a exclusão do mercado de trabalho (E) resultavam de outras medidas do regime, não da lei do passe. O boicote econômico (B) e o sincretismo religioso (C) não correspondem à função de restringir o deslocamento dos negros no espaço urbano, que é o objeto dessa legislação.`,
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
      { id: 'E', type: 'text', value: `obstáculo climático para o estabelecimento da civilização.` },
    ],
    correct: 'A',
    explanation: `O texto de Pádua mostra que os críticos ambientais brasileiros dos séculos XVIII e XIX não louvavam a beleza da natureza por si mesma, mas a valorizavam por seu potencial econômico, interpretando sua destruição como atraso e ignorância. Eles viam o meio natural, portanto, como ferramenta essencial para o avanço da nação, isto é, um recurso a ser bem aproveitado para o progresso do país, por isso a alternativa A é a correta. A dádiva divina para o desenvolvimento industrial (B) e a paisagem para a valorização fundiária (C) não traduzem esse pragmatismo nacional. Vê-lo como limitação topográfica à urbanização (D) ou obstáculo climático à civilização (E) contraria a valorização do meio natural como potencial a ser explorado.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Brasil Império', 'Questões aleatórias'],
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
    explanation: `O texto define o coronelismo como um sistema político nacional baseado em barganhas entre o governo e os coronéis, que controlavam cargos públicos e hipotecavam seu apoio, sobretudo pelo voto. No contexto da Primeira República, essas relações baseavam-se na disseminação de práticas clientelistas, em que favores e cargos eram trocados por lealdade política e votos, por isso a alternativa D é a correta. A coação das milícias locais (A) é apenas um aspecto, não o fundamento das relações descritas. A estagnação da dinâmica urbana (B), a valorização do proselitismo partidário (C) e a centralização de decisões administrativas (E) não correspondem à lógica de trocas pessoais entre governo e coronéis que sustentava o sistema.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
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
    explanation: `O mapa indica que a capacidade de dessalinização concentra-se sobretudo em países do Oriente Médio, como Arábia Saudita, Emirados Árabes Unidos e Kuwait, além de outras áreas secas. Essa concentração é explicada pela escassez de água potável, pois regiões áridas, com poucos recursos hídricos superficiais, recorrem à dessalinização da água do mar para o abastecimento, por isso a alternativa C é a correta. O pioneirismo tecnológico (A) e a busca da sustentabilidade ambiental (E) não explicam a localização observada. A condição hidropedológica (B) e o efeito das mudanças climáticas (D) não correspondem ao fator decisivo, que é a falta natural de água doce nessas regiões de clima seco.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Energia e recursos naturais', 'Questões aleatórias'],
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
    explanation: `No trecho de Assim falou Zaratustra, Nietzsche constrói uma alegoria da tristeza e do esgotamento, em que tudo se mostra oco, igual e passado, e todas as fontes secaram. Essa construção traduz a doutrina niilista ao destacar a decadência da cultura, isto é, o esvaziamento de sentido e de valores que marcaria o mundo moderno, por isso a alternativa D é a correta. Reforçar a liberdade do cidadão (A) e desvelar os valores do cotidiano (B) contrariam o tom de dissolução do texto. Exortar as relações de produção (C) desloca o foco para a economia, e amplificar o sentimento de ansiedade (E) não corresponde ao diagnóstico de esgotamento dos valores que caracteriza o niilismo.`,
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
    explanation: `O anúncio do Simca Chambord, ambientado na moderna paisagem brasileira dos anos 1950 e 1960, associa o automóvel ao desenvolvimentismo e à modernização simbolizada por Brasília. No entanto, essas referências omitem transformações que atingiram parte da população, como a intensificação da desigualdade regional, já que o progresso se concentrou em certas áreas em detrimento de outras, por isso a alternativa D é a correta. A exaltação da tradição colonial (A) e a redução da influência estrangeira (B) contrariam o espírito modernizador e internacionalizado do período. A ampliação da imigração internacional (C) não marca essa fase, e a desconcentração da produção industrial (E) opõe-se à concentração econômica característica do desenvolvimentismo.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Pesca industrial provoca destruição na África O súbito
desaparecimento do bacalhau dos grandes cardumes da Terra
Nova, no final do século XX - o que ninguém havia previsto -,
teve o efeito de um eletrochoque planetário. Lançada pelos
bascos no século XV, a pesca e depois a sobrepesca desse
grande peixe de água fria levaram ao impensável. Ao Canadá o
bacalhau nunca mais voltou. E o que ocorreu no Atlântico Norte
está acontecendo em outros mares. Os maiores navios do mundo
seguem agora em direção ao sul, até os limites da Antártida,
para competir pelos estoques remanescentes. MORA, J. S.
Disponível em: www.diplomatique.com.br. Acesso em: 14 jan.
2014. O problema exposto no texto jornalístico relaciona-se à`,
    alternatives: [
      { id: 'A', type: 'text', value: `insustentabilidade do modelo de produção e consumo.` },
      { id: 'B', type: 'text', value: `fragilidade ecológica de ecossistemas costeiros.` },
      { id: 'C', type: 'text', value: `inviabilidade comercial dos produtos marinhos.` },
      { id: 'D', type: 'text', value: `mudança natural nos oceanos e mares.` },
      { id: 'E', type: 'text', value: `vulnerabilidade social de áreas pobres.` },
    ],
    correct: 'A',
    explanation: `O texto jornalístico relata que a sobrepesca levou ao desaparecimento do bacalhau na Terra Nova e que os maiores navios se deslocam para outros mares em busca dos estoques remanescentes. O problema exposto relaciona-se à insustentabilidade do modelo de produção e consumo, pois a exploração predatória esgota os recursos pesqueiros em escala planetária, por isso a alternativa A é a correta. A fragilidade ecológica de ecossistemas costeiros (B) e a vulnerabilidade social de áreas pobres (E) são aspectos secundários diante da lógica de exploração descrita. A inviabilidade comercial dos produtos marinhos (C) e a mudança natural nos oceanos (D) contrariam o texto, que atribui a crise à ação humana, e não a causas naturais.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
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
      { id: 'B', type: 'text', value: `inovação toyotista e a regularização do trabalho formal.` },
      { id: 'C', type: 'text', value: `impacto da tecnologia e as modificações na estrutura produtiva.` },
      { id: 'D', type: 'text', value: `emergência da globalização e a expansão do setor secundário.` },
      { id: 'E', type: 'text', value: `diminuição do tempo de trabalho e a necessidade de diploma superior.` },
    ],
    correct: 'C',
    explanation: `Francisco de Oliveira descreve como a mundialização aumentou a produtividade do trabalho a partir da forma técnica molecular-digital, mantendo, porém, a má distribuição de renda e combinando tecnologia avançada com o uso puro da força de trabalho. É possível explicar essas transformações no emprego e na renda pelo impacto da tecnologia e as modificações na estrutura produtiva, que elevam a produtividade sem necessariamente melhorar as condições de trabalho, por isso a alternativa C é a correta. A crise bancária e o fortalecimento do capital industrial (A) não constam do argumento. A inovação toyotista com regularização do trabalho formal (B), a expansão do setor secundário (D) e a diminuição do tempo de trabalho com exigência de diploma (E) contrariam o quadro de precarização descrito.`,
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
    explanation: `Marshall Berman interpreta a modernidade como uma experiência que promete aventura, poder e transformação, mas ao mesmo tempo ameaça destruir tudo o que se tem, constituindo uma unidade paradoxal, uma unidade de desunidade. Essa leitura caracteriza a modernidade como uma dinâmica social contraditória, que une a humanidade justamente pela tensão entre criação e destruição, por isso a alternativa A é a correta. A interação coletiva harmônica (B) contraria o caráter paradoxal apontado. O fenômeno econômico estável (C), o sistema internacional decadente (D) e o processo histórico homogeneizador (E) não traduzem a contradição interna que, segundo o autor, define a vivência moderna.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `associar uma experiência superficial à abundância de informações.` },
      { id: 'B', type: 'text', value: `condicionar uma capacidade individual à desorganização da rede.` },
      { id: 'C', type: 'text', value: `agregar uma tendência contemporânea à aceleração do tempo.` },
      { id: 'D', type: 'text', value: `aproximar uma mídia inovadora à passividade da recepção.` },
      { id: 'E', type: 'text', value: `equiparar uma ferramenta digital à tecnologia analógica.` },
    ],
    correct: 'A',
    explanation: `Nicholas Carr observa que, apesar de a internet oferecer acesso rápido a uma vasta quantidade de informações, ele próprio perdeu a capacidade de concentração e de leitura prolongada, dispersando-se após poucas páginas. O paradoxo que o autor ressalta consiste em associar uma experiência superficial à abundância de informações, já que o excesso de dados disponíveis vem acompanhado de leitura mais rasa e fragmentada, por isso a alternativa A é a correta. Condicionar a capacidade individual à desorganização da rede (B) não corresponde à crítica, pois a rede é eficiente. Agregar a aceleração do tempo (C), aproximar a mídia inovadora da passividade (D) e equiparar o digital ao analógico (E) não captam a oposição entre abundância e superficialidade.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
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
    explanation: `A ilustração de 1909 retrata uma cena em Paris em que se vende café do Brasil, apresentado como o melhor de todos, documentando a presença do produto brasileiro no cotidiano francês. Essa imagem revela o papel do Brasil na economia mundial do início do século XX como fornecedor de produtos agrícolas, especialmente o café, base da economia agroexportadora da Primeira República, por isso a alternativa D é a correta. Prestador de serviços gerais (A) e exportador de bens industriais (B) não correspondem ao perfil econômico do país no período. Importador de padrões estéticos (C) e formador de padrões de consumo (E) invertem a relação, pois o Brasil figurava como exportador de matéria-prima, e não como centro definidor de gostos.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
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
    explanation: `No texto, o músico observa que a música caipira de raiz expressava a solidão e o distanciamento do campo em relação ao país moderno, realidade hoje alterada por um interior conectado, globalizado e rico. Essa mudança cultural ressalta a expansão de atividades das novas ruralidades, isto é, a diversificação do campo brasileiro, agora integrado às dinâmicas urbanas e globais, por isso a alternativa B é a correta. O crescimento da produção extensiva (A) e a persistência de relações de trabalho compulsório (C) não traduzem a modernização descrita. A contenção da política de subsídios agrícolas (D) e o fortalecimento do cooperativismo (E) não correspondem à transformação sociocultural do campo indicada no texto.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
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
    explanation: `O gráfico mostra a queda acentuada da taxa de fecundidade em diversos países entre 1970 e 2010, com menos filhos por casal e envelhecimento da população. Uma consequência socioeconômica desse fenômeno é a diminuição da oferta de mão de obra nacional, pois a redução no número de nascimentos tende a diminuir, no futuro, a população em idade produtiva, por isso a alternativa A é a correta. A média de expectativa de vida (B) tende a aumentar, não a diminuir. A disponibilidade de serviços de saúde (C) e a imigração de trabalhadores qualificados (E) não decorrem diretamente da queda da fecundidade, e a despesa previdenciária (D) tende a crescer com o envelhecimento, contrariando a alternativa.`,
    subject: ['geo'],
    topics: ['Demografia', 'Questões aleatórias'],
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
causa um efeito inflamatório que gera uma sensação de 
dor e ardor, levando à cegueira temporária. O processo 
é desencadeado pela liberação de neuropeptídios das 
terminações nervosas. 
Como funciona o gás de pimenta . Disponível em: http://pessoas.hsw.uol.com.br. 
 Acesso em: 1 mar. 2012 (adaptado). 
Quando uma pessoa é atingida com o spray de pimenta 
nos olhos ou na pele, a lavagem da região atingida com 
água é ineficaz porque a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `reação entre etanol e água libera calor, intensificando o ardor.` },
      { id: 'B', type: 'text', value: `solubilidade do princípio ativo em água é muito baixa, dificultando a sua remoção.` },
      { id: 'C', type: 'text', value: `permeabilidade da água na pele é muito alta, não permitindo a remoção do princípio ativo.` },
      { id: 'D', type: 'text', value: `solubilização do óleo em água causa um maior espalhamento além das áreas atingidas.` },
      { id: 'E', type: 'text', value: `ardência faz evaporar rapidamente a água, não permitindo que haja contato entre o óleo e o solvente.` },
    ],
    correct: 'B',
    explanation: `A capsaicina, princípio ativo da pimenta, é uma molécula de baixa polaridade (lipofílica), enquanto a água é um solvente polar. Pelo princípio "semelhante dissolve semelhante", solventes polares dissolvem mal substâncias apolares, de modo que a solubilidade da capsaicina em água é muito baixa. Por isso a lavagem com água não consegue remover eficazmente o princípio ativo da pele ou dos olhos, e o ardor persiste. Portanto, a lavagem é ineficaz porque a solubilidade do princípio ativo em água é muito baixa, dificultando sua remoção (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
    explanation: `A potência teórica de cada unidade é P = ρ·g·Q·h, com ρ = 1 000 kg/m³, g = 10 m/s², Q = 690 m³/s e h = 118,4 m, resultando P = 1 000 × 10 × 690 × 118,4 = 816 960 000 W ≈ 816,96 MW. A potência instalada por unidade é 14 000 MW ÷ 20 = 700 MW. A potência não aproveitada é a diferença entre a teórica e a instalada: 816,96 − 700 = 116,96 MW. Portanto, a resposta é a alternativa C.`,
    subject: ['fis'],
    topics: ['Hidrodinâmica', 'Questões aleatórias'],
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
      { id: 'D', type: 'text', value: `uso mais eficiente de combustíveis fósseis.` },
      { id: 'E', type: 'text', value: `fixação de carbono em moléculas orgânicas.` },
    ],
    correct: 'A',
    explanation: `No biodigestor, as fezes dos animais sofrem decomposição anaeróbica realizada por microrganismos, processo que gera biogás, rico em gás metano (CH₄). No Projeto Park Spark, esse metano é captado e aproveitado como combustível nos equipamentos do parque, em vez de ser liberado na atmosfera. A inovação do projeto está justamente em possibilitar a queima desse gás metano, convertendo o resíduo em energia útil. Portanto, a resposta é a alternativa A.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Uma ambulância A em movimento retílineo e uniforme aproxima-se de um observador O , em repouso. A sirene emite um som de frequência constante f A . O desenho ilustra as frentes de onda do som emitido pela ambulância. O observador possui um detector que consegue registrar, no esboço de um gráfico, a frequência da onda sonora detectada em função do tempo f O (t) , antes e depois da passagem da ambulância por ele. Qual esboço gráfico representa a frequência f O (t) detectada pelo observador?`,
    images: ['/enem/2016/images/enem_2016_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2016/images/enem_2016_d1_q49_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2016/images/enem_2016_d1_q49_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2016/images/enem_2016_d1_q49_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2016/images/enem_2016_d1_q49_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2016/images/enem_2016_d1_q49_E.jpg` },
    ],
    correct: 'D',
    explanation: `Como a ambulância se aproxima do observador com velocidade constante, pelo efeito Doppler o observador detecta uma frequência maior que fA e aproximadamente constante durante toda a aproximação. No instante em que a fonte passa pelo observador, a frequência cai bruscamente e, com a fonte se afastando, passa a ser menor que fA e novamente constante. O gráfico que mostra um patamar acima de fA seguido de uma queda até um patamar abaixo de fA é o da alternativa D. Portanto, a resposta é a alternativa D.`,
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
    explanation: `A entalpia da trimerização é obtida pela lei de Hess a partir das entalpias de combustão: ΔH = Σ ΔHc(reagentes) − Σ ΔHc(produtos). Os reagentes são 3 C₂H₂, com combustão total de 3 × (−310) = −930 kcal, e o produto é 1 C₆H₆, com combustão de −780 kcal. Logo, ΔH = −930 − (−780) = −150 kcal para a formação de um mol de benzeno. Portanto, a variação de entalpia é mais próxima de −150 kcal (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
    explanation: `Para detectar íons bário solúveis, adiciona-se ao filtrado uma solução aquosa de ácido sulfúrico (H₂SO₄). Os íons Ba²⁺ reagem com os íons sulfato formando sulfato de bário (BaSO₄), sólido branco altamente insolúvel que se separa da solução. O surgimento desse precipitado branco, observado ao longo dos 30 minutos, indica a presença dos íons bário solúveis. Portanto, a presença é indicada pela precipitação de um sólido branco (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os feromônios são substâncias utilizadas na comunicação entre
indivíduos de uma espécie. O primeiro feromônio isolado de um
inseto foi o bombicol, substância produzida pela mariposa do
bicho-da-seda. OH Bombicol O uso de feromônios em ações de
controle de insetos-praga está de acordo com o modelo
preconizado para a agricultura do futuro. São agentes
altamente específicos e seus compostos químicos podem ser
empregados em determinados cultivos, conforme ilustrado no
quadro. Substância Inseto Cultivo Milho Sitophilus spp OH O O
NH Morango Anthonomus rubi OH Grapholita molesta OH Frutas
OCOCH₃ FERREIRA, J. T. B.; ZARBIN, P. H. G. Amor ao primeiro
odor: a comunicação química entre os insetos. Química Nova na
Escola , n. 7, maio 1998 (adaptado). Considerando essas
estruturas químicas, o tipo de estereoisomeria apresentada
pelo bombicol e também apresentada pelo feromônio utilizado no
controle do inseto`,
    images: ['/enem/2016/images/enem_2016_d1_q52_1.jpg', '/enem/2016/images/enem_2016_d1_q52_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Sitophilus spp .` },
      { id: 'B', type: 'text', value: `Migdolus fryanus .` },
      { id: 'C', type: 'text', value: `Anthonomus rubi .` },
      { id: 'D', type: 'text', value: `Grapholita molesta .` },
      { id: 'E', type: 'text', value: `Scrobipalpuloides absoluta .` },
    ],
    correct: 'E',
    explanation: `O bombicol possui uma dupla ligação C=C entre carbonos que têm ligantes diferentes de cada lado, apresentando isomeria geométrica (cis-trans). Para exibir o mesmo tipo de estereoisomeria, outro feromônio precisa ter também uma dupla ligação entre carbonos com ligantes distintos. Entre as estruturas do quadro, isso ocorre no feromônio do Scrobipalpuloides absoluta, que apresenta duplas ligações internas na cadeia capazes de gerar isomeria geométrica. Portanto, a resposta é a alternativa E.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O esquema representa, de maneira simplificada, o processo de
produção de etanol utilizando milho como matéria-prima.
Levedura CO₂ Milho Etanol Água Hidrólise Fermentação A etapa
de hidrólise na produção de etanol a partir do milho é
fundamental para que`,
    images: ['/enem/2016/images/enem_2016_d1_q53.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a glicose seja convertida em sacarose.` },
      { id: 'B', type: 'text', value: `as enzimas dessa planta sejam ativadas.` },
      { id: 'C', type: 'text', value: `a maceração favoreça a solubilização em água.` },
      { id: 'D', type: 'text', value: `o amido seja transformado em substratos utilizáveis pela levedura.` },
      { id: 'E', type: 'text', value: `os grãos com diferentes composições químicas sejam padronizados.` },
    ],
    correct: 'D',
    explanation: `O milho armazena energia na forma de amido, um polissacarídeo que a levedura não fermenta diretamente. A etapa de hidrólise quebra o amido em moléculas menores, como a glicose, que são os substratos efetivamente aproveitados pela levedura na fermentação. Sem essa transformação, a levedura não teria açúcares disponíveis para converter em etanol e gás carbônico. Portanto, a hidrólise é fundamental para que o amido seja transformado em substratos utilizáveis pela levedura (alternativa D).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
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
    explanation: `O calor a ser dissipado corresponde ao dobro da potência elétrica: 2 × 1,0 MW = 2,0 MW = 2 000 kJ/s. Esse calor pode elevar a temperatura da água em no máximo 3 °C, com calor específico de 4 kJ/(kg·°C). De P = (vazão) × c × ΔT, a vazão mínima é vazão = P/(c·ΔT) = 2 000 ÷ (4 × 3) = 2 000 ÷ 12 ≈ 166,7 kg/s. Portanto, o valor mínimo é mais próximo de 167 kg/s (alternativa C).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A Figura 1 apresenta o gráfico da intensidade, em decibéis
(dB), da onda sonora emitida por um alto-falante, que está em
repouso, e medida por um microfone em função da frequência da
onda para diferentes distâncias: 3 mm, 25 mm, 51 mm e 60 mm. A
Figura 2 apresenta um diagrama com a indicação das diversas
faixas do espectro de frequência sonora para o modelo de
alto-falante utilizado neste experimento. Figura 1 Resposta de
Frequência +20 3 mm +10 25 mm 51 mm 0 dB 60 mm − 10 − 20 2 3 4
5 6 7 9 8 2 3 4 5 6 7 9 8 20 50 100 1 000 10 000 20 000 Hz
Disponível em: www.batera.com.br. Acesso em: 8 fev. 2015.
Figura 2 Faixas do espectro de frequência sonora Subgrave
Grave Média baixa Media Media alta Aguda 20 Hz 63 Hz 250 Hz
640 Hz 2,5 kHz 5 kHz 20 kHz Disponível em: www.somsc.com.br.
Acesso em: 2 abr. 2015. Relacionando as informações presentes
nas figuras 1 e 2, como a intensidade sonora percebida é
afetada pelo aumento da distância do microfone ao
alto-falante?`,
    images: ['/enem/2016/images/enem_2016_d1_q55.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Aumenta na faixa das frequências médias.` },
      { id: 'B', type: 'text', value: `Diminui na faixa das frequências agudas.` },
      { id: 'C', type: 'text', value: `Diminui na faixa das frequências graves.` },
      { id: 'D', type: 'text', value: `Aumenta na faixa das frequências médias altas.` },
      { id: 'E', type: 'text', value: `Aumenta na faixa das frequências médias baixas.` },
    ],
    correct: 'C',
    explanation: `Na Figura 1, nas frequências baixas (região dos graves, à esquerda) o nível em decibéis é maior para a menor distância (3 mm) e diminui progressivamente conforme a distância aumenta até 60 mm. Nas frequências médias e agudas as curvas ficam muito próximas, variando pouco com a distância. Logo, o aumento da distância do microfone ao alto-falante reduz a intensidade sonora principalmente na faixa dos graves. Portanto, a resposta é a alternativa C.`,
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
    explanation: `O ciclo de Krebs é uma etapa da respiração celular que ocorre na matriz da mitocôndria, organela responsável pela maior parte da produção de ATP (o aporte energético) da célula. Para bloquear o ciclo de Krebs no local correto, a nanopartícula com a proteína bloqueadora precisa ser endereçada a essa organela. Assim, o peptídeo sinal deve direcionar a nanopartícula para a mitocôndria, de modo a cortar o fornecimento de energia e destruir a célula cancerosa. Portanto, a resposta é a alternativa B.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `Intensidade diminuída, o tempo de retorno aumentado e a frequência percebida diminuída.` },
      { id: 'B', type: 'text', value: `Intensidade aumentada, o tempo de retorno diminuído e a frequência percebida diminuída.` },
      { id: 'C', type: 'text', value: `Intensidade diminuída, o tempo de retorno diminuído e a frequência percebida aumentada.` },
      { id: 'D', type: 'text', value: `Intensidade diminuída, o tempo de retorno aumentado e a frequência percebida aumentada.` },
      { id: 'E', type: 'text', value: `Intensidade aumentada, o tempo de retorno aumentado e a frequência percebida aumentada.` },
    ],
    correct: 'A',
    explanation: `Como a mariposa se afasta do morcego, cada pulso percorre um caminho de ida e volta cada vez maior, de modo que o tempo de retorno dos ecos aumenta. A energia sonora se espalha por uma área maior ao percorrer distâncias maiores, fazendo a intensidade do eco detectado diminuir. Além disso, pelo efeito Doppler, o afastamento do refletor reduz a frequência percebida nos ecos. Portanto, o morcego detecta intensidade diminuída, tempo de retorno aumentado e frequência percebida diminuída (alternativa A).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
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
    explanation: `A massa molar do brometo de metila (CH₃Br) é 12 + 3 + 80 = 95 g/mol, então 142,5 g correspondem a 142,5 ÷ 95 = 1,5 mol. A do NaOH é 40 g/mol, então 80 g equivalem a 2 mol; como a proporção é 1:1, o reagente limitante é o CH₃Br, com 1,5 mol. O metanol obtido, 32 g de massa molar 32 g/mol, corresponde a 1 mol. O rendimento é R = (n_produto ÷ n_reagente limitante) × 100 = (1 ÷ 1,5) × 100 ≈ 67%. Portanto, a resposta é a alternativa D.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Por apresentar significativa resistividade elétrica, o grafite
pode ser utilizado para simular resistores elétricos em
circuitos desenhados no papel, com o uso de lápis e
lapiseiras. Dependendo da espessura e do comprimento das
linhas desenhadas, é possível determinar a resistência
elétrica de cada traçado produzido. No esquema foram
utilizados três tipos de lápis diferentes (2H, HB e 6B) para
efetuar três traçados distintos. 2H HB 6B Munido dessas
informações, um estudante pegou uma folha de papel e fez o
desenho de um sorvete de casquinha utilizando-se desses
traçados. Os valores encontrados nesse experimento, para as
resistências elétricas (R), medidas com o auxílio de um
ohmímetro ligado nas extremidades das resistências, são
mostrados na figura. Verificou-se que os resistores obedeciam
à Lei de Ohm. 5 kΩ A B 20 kΩ 10 kΩ 10 kΩ C Na sequência,
conectou o ohmímetro nos terminais A e B do desenho e, em
seguida, conectou-o nos terminais B e C, anotando as leituras
R AB e R­ BC , respectivamente. R AB R BC , qual resultado o
estudante Ao estabelecer a razão obteve?`,
    images: ['/enem/2016/images/enem_2016_d1_q59_1.jpg', '/enem/2016/images/enem_2016_d1_q59_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `4/7` },
      { id: 'C', type: 'text', value: `10/27` },
      { id: 'D', type: 'text', value: `14/81` },
      { id: 'E', type: 'text', value: `4/81` },
    ],
    correct: 'B',
    explanation: `Entre A e B há dois resistores em paralelo, o de 5 kΩ e o de 20 kΩ, cuja associação vale (5 × 20)/(5 + 20) = 4 kΩ; esse conjunto está em paralelo com o caminho A–C–B (10 + 10 = 20 kΩ), dando R_AB = (4 × 20)/(4 + 20) = 10/3 kΩ. Para R_BC, o resistor direto de 10 kΩ fica em paralelo com o caminho B–A–C (4 + 10 = 14 kΩ), resultando R_BC = (10 × 14)/(10 + 14) = 35/6 kΩ. A razão é R_AB/R_BC = (10/3) ÷ (35/6) = 60/105 = 4/7. Portanto, a resposta é a alternativa B.`,
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
    explanation: `Tanto o carvão ativado (superfície de carbono) quanto o benzeno são substâncias apolares. Entre moléculas apolares, as interações intermoleculares são as forças de dispersão de London, do tipo dipolo induzido–dipolo induzido. São essas interações fracas que promovem a adsorção do benzeno sobre a superfície do carvão. Portanto, entre o adsorvente e a substância adsorvida ocorrem interações dipolo induzido–dipolo induzido (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
      { id: 'D', type: 'text', value: `quatro espécies testadas, predando indivíduos pequenos.` },
      { id: 'E', type: 'text', value: `ascídias, apesar de não representarem os menores organismos.` },
    ],
    correct: 'C',
    explanation: `Comparando os dados, a densidade de mexilhões caiu de 380 (área com tela, sem acesso dos peixes) para 200 indivíduos/m² (área sem tela, com peixes), enquanto o tamanho médio subiu de 3 cm para 6 cm. A queda da densidade acompanhada do aumento do tamanho médio indica que os peixes retiraram preferencialmente os indivíduos menores. Assim, os peixes controlam a densidade dos mexilhões predando especialmente os animais pequenos. Portanto, a resposta é a alternativa C.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
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
    explanation: `O carbono passa da forma inorgânica (CO₂) para a forma orgânica quando é fixado em moléculas pela fotossíntese, processo realizado pelos produtores. Na cadeia descrita (fitoplâncton → zooplâncton → moluscos → crustáceos → peixes), os organismos fotossintetizantes são os fitoplânctons. São eles que incorporam o carbono inorgânico transformando-o em matéria orgânica, posteriormente transferida aos demais níveis tróficos. Portanto, essa transição ocorre no grupo dos fitoplânctons (alternativa A).`,
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
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2016/images/enem_2016_d1_q63_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2016/images/enem_2016_d1_q63_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2016/images/enem_2016_d1_q63_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2016/images/enem_2016_d1_q63_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2016/images/enem_2016_d1_q63_E.jpg` },
    ],
    correct: 'D',
    explanation: `O movimento tem duas fases. Na primeira, correspondente ao tempo de reação, a velocidade é constante enquanto o carro percorre certa distância, o que no gráfico v × d é um trecho horizontal. Na segunda, a frenagem com desaceleração constante obedece à equação de Torricelli v² = v₀² − 2a·d, de modo que v = √(v₀² − 2a·d) decresce de forma curva (não linear) até zero. O gráfico com um patamar horizontal seguido de uma queda curva até parar é o da alternativa D. Portanto, a resposta é a alternativa D.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `TEXTO I Biocélulas combustíveis são uma alternativa
tecnológica para substituição das baterias convencionais. Em
uma biocélula microbiológica, bactérias catalisam reações de
oxidação de substratos orgânicos. Liberam elétrons produzidos
na respiração celular para um eletrodo, onde fluem por um
circuito externo até o cátodo do sistema, produzindo corrente
elétrica. Uma reação típica que ocorre em biocélulas
microbiológicas utiliza o acetato como substrato. AQUINO NETO,
S. Preparação e caracterização de bioanodos para biocélula a
combustível etanol/O 2 . Disponível em: www.teses.usp.br.
Acesso em: 23 jun. 2015 (adaptado). TEXTO II Em sistemas
bioeletroquímicos, os potenciais padrão ( E ° ’ ) apresentam
valores característicos. Para as biocélulas de acetato,
considere as seguintes semirreações de redução e seus
respectivos potenciais: 2 CO₂ + 7 H + + 8 e − → CH₃ COO − +
2 H₂O E ° ’ = - 0,3 V O 2 + 4 H + + 4 e − → 2 H₂O E ° ’ =
0,8 V SCOTT, K.; YU, E. H. Microbial electrochemical and fuel
cells: fundamentals and applications. Woodhead Publishing
Series in Energy , n. 88, 2016 (adaptado). Nessas condições,
qual é o número mínimo de biocélulas de acetato, ligadas em
série, necessárias para se obter uma diferença de potencial de
4,4 V?`,
    alternatives: [
      { id: 'A', type: 'text', value: `3` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `9` },
      { id: 'E', type: 'text', value: `15` },
    ],
    correct: 'B',
    explanation: `A diferença de potencial de cada biocélula é a diferença entre os potenciais das semirreações: E = E(cátodo) − E(ânodo) = 0,8 − (−0,3) = 1,1 V. Ligando biocélulas iguais em série, as tensões se somam. Para obter 4,4 V são necessárias 4,4 ÷ 1,1 = 4 biocélulas. Portanto, o número mínimo é 4 (alternativa B).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
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
    explanation: `Anticoagulantes impedem a coagulação do sangue, e os animais naturalmente adaptados a produzir essas substâncias são os hematófagos, que se alimentam de sangue. Para sugar o sangue sem que ele coagule, esses animais produzem em sua saliva toxinas com ação anticoagulante. Entre as opções, os mosquitos hematófagos têm exatamente esse hábito alimentar, sendo adequados à pesquisa de drogas anticoagulantes. Portanto, a resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
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
    explanation: `O motor, a 18 RPM, gira a engrenagem A (24 dentes), que se acopla à engrenagem B (72 dentes); a rotação de B é 18 × (24/72) = 6 RPM. A engrenagem B está no mesmo eixo da engrenagem C (36 dentes), que aciona a engrenagem D (108 dentes) ligada ao ponteiro; a rotação de D é 6 × (36/108) = 2 RPM. Assim, o ponteiro gira a 18 × (24/72) × (36/108) = 2 RPM. Portanto, a resposta é a alternativa B.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `troca de átomos entre as diferentes moléculas do material.` },
      { id: 'B', type: 'text', value: `transmutação nuclear dos elementos químicos do material.` },
      { id: 'C', type: 'text', value: `redistribuição de prótons entre os diferentes átomos do material.` },
      { id: 'D', type: 'text', value: `mudança na estrutura espacial formada pelos diferentes constituintes do material.` },
      { id: 'E', type: 'text', value: `alteração nas proporções dos diferentes isótopos de cada elemento presente no material.` },
    ],
    correct: 'D',
    explanation: `Os "quatro elementos" de Platão correspondem aos estados sólido, líquido, gasoso e plasma. Excetuando o plasma, as transições entre os demais estados (mudanças de fase) não alteram a identidade dos átomos nem seus núcleos, mas apenas o modo como as partículas estão organizadas e se afastam umas das outras. Microscopicamente, portanto, essas transformações estão associadas à mudança na estrutura espacial formada pelos constituintes do material. Portanto, a resposta é a alternativa D.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `Cada litro de etanol gera cerca de 18 L de vinhaça, então 27 000 L de etanol produzem 27 000 × 18 = 486 000 L de vinhaça. Como o teor de fósforo na vinhaça é de 60 mg/L, a massa total de fósforo é 486 000 × 60 = 29 160 000 mg. Convertendo para quilogramas, 29 160 000 mg = 29 160 g ≈ 29 kg. Portanto, a quantidade total de fósforo é mais próxima de 29 kg (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
BLOOM, A. J. et al. Nitrate assimilation is inhibited by elevated CO₂ in field-grown wheat. 
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
    explanation: `O nitrogênio absorvido na forma de nitrato é essencial para a síntese de aminoácidos e, por consequência, de proteínas pela planta. Com os níveis elevados de CO₂ reduzindo a absorção de nitrato, a planta sintetiza menos proteínas, e o grão de trigo torna-se mais pobre nesse nutriente. Assim, a qualidade nutricional é comprometida primariamente pela redução do teor de proteínas. Portanto, a resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `proporção conhecida entre carbono-14 e carbono-12 na atmosfera ao longo dos anos.` },
      { id: 'B', type: 'text', value: `decomposição de todo o carbono-12 presente no organismo após a morte.` },
      { id: 'C', type: 'text', value: `fixação maior do carbono-14 nos tecidos de organismos após a morte.` },
      { id: 'D', type: 'text', value: `emissão de carbono-12 pelos tecidos de organismos após a morte.` },
      { id: 'E', type: 'text', value: `transformação do carbono-12 em carbono-14 ao longo dos anos.` },
    ],
    correct: 'A',
    explanation: `A datação por carbono-14 baseia-se no fato de que a proporção entre ¹⁴C e ¹²C na atmosfera se mantém aproximadamente constante e conhecida ao longo do tempo, sendo incorporada pelos seres vivos enquanto vivem. Após a morte, o organismo deixa de absorver carbono, e o ¹⁴C, radioativo, decai a uma taxa conhecida, enquanto o ¹²C permanece. Comparando quanto ¹⁴C restou em relação ao ¹²C com a proporção atmosférica original, estima-se a idade do material. Portanto, a técnica é possível devido à proporção conhecida entre carbono-14 e carbono-12 na atmosfera ao longo dos anos (alternativa A).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
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
    explanation: `As características descritas — raízes de ancoragem em substrato lamacento, raízes que crescem verticalmente para captar oxigênio diante da baixa oxigenação, glândulas para eliminar o excesso de sais e cutícula espessa para reduzir a perda de água — são adaptações típicas das plantas de mangue. Esse conjunto permite a sobrevivência em solo encharcado, salino e pobre em oxigênio, condições próprias do manguezal. Portanto, a resposta é a alternativa D.`,
    subject: ['bio'],
    topics: ['Biomas do Brasil', 'Questões aleatórias'],
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
    explanation: `As folhas aromáticas são colocadas na saída do vapor da sauna, e o vapor de água, ao atravessá-las, arrasta consigo os compostos voláteis responsáveis pelo aroma. Esse processo, em que o vapor transporta as substâncias voláteis de um material, é a extração por arraste a vapor. Portanto, o processo de separação responsável pela aromatização é a extração por arraste (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `substitui gradativamente as espécies cultiváveis por espécies arbóreas.` },
      { id: 'B', type: 'text', value: `intensifica a fertilização do solo com o uso de técnicas apropriadas e biocidas.` },
      { id: 'C', type: 'text', value: `promove maior diversidade de vida no solo com o aumento da matéria orgânica.` },
      { id: 'D', type: 'text', value: `favorece a dispersão das sementes cultivadas pela fauna residente nas áreas florestais.` },
      { id: 'E', type: 'text', value: `cria condições para o estabelecimento de espécies pioneiras com a diminuição da insolação sobre o solo.` },
    ],
    correct: 'C',
    explanation: `Nos sistemas agroflorestais, a introdução de árvores junto às culturas aumenta o aporte de matéria orgânica ao solo (folhas, galhos e raízes), favorecendo a atividade e a diversidade dos organismos que ali vivem. Esse enriquecimento acelera a sucessão ecológica e recupera a fertilidade e a estabilidade do ecossistema degradado, conciliando recuperação ambiental com produção diversificada. Portanto, a estratégia funciona porque promove maior diversidade de vida no solo com o aumento da matéria orgânica (alternativa C).`,
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
    explanation: `A bateria fornece uma única corrente ao circuito, que sai por um polo e retorna pelo outro; por isso a corrente no ponto A (saída) é igual à do ponto E (retorno à bateria): I_A = I_E. Como as lâmpadas são idênticas e estão associadas em paralelo, os ramos de L1 e L2 são equivalentes, de modo que as correntes registradas em suas saídas, nos pontos C e D, são iguais: I_C = I_D. Portanto, as correntes de mesmo valor são I_A = I_E e I_C = I_D (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
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
    explanation: `A seiva xilêmica (água e sais) sobe da raiz às folhas principalmente por causa da transpiração: a perda de vapor de água pelos estômatos cria uma tensão (sucção) que puxa a coluna de água para cima. Pela teoria da tensão-coesão-adesão, as moléculas de água, coesas entre si e aderidas às paredes dos vasos, sobem de forma contínua. Por isso o transporte ocorre mesmo contra a gravidade e independentemente da orientação da copa. Portanto, o que garante o transporte da seiva é a transpiração (alternativa E).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
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
    explanation: `Na substituição nucleofílica, o nucleófilo metóxido (CH₃O⁻) substitui o bromo do brometo de metila (CH₃Br), formando CH₃–O–CH₃ e liberando o íon Br⁻. O produto CH₃–O–CH₃ possui um átomo de oxigênio ligado a dois grupos carbônicos (R–O–R'), o que caracteriza a função éter. Portanto, o composto orgânico formado pertence à função éter (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O trilho de ar é um dispositivo utilizado em laboratórios de
física para analisar movimentos em que corpos de prova
(carrinhos) podem se mover com atrito desprezível. A figura
ilustra um trilho horizontal com dois carrinhos (1 e 2) em que
se realiza um experimento para obter a massa do carrinho 2. No
instante em que o carrinho 1, de massa 150,0 g, passa a se
mover com velocidade escalar constante, o carrinho 2 esta em
repouso. No momento em que o carrinho 1 se choca com o
carrinho 2, ambos passam a se movimentar juntos com velocidade
escalar constante. Os sensores eletrônicos distribuídos ao
longo do trilho determinam as posições e registram os
instantes associados a passagem de cada carrinho, gerando os
dados do quadro. sensor 1 sensor 2 sensor 3 sensor 4 carrinho
1 carrinho 2

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
    explanation: `Antes da colisão, o carrinho 1 percorre de 15,0 a 30,0 cm em 1,0 s, com velocidade de 15 cm/s, enquanto o carrinho 2 está em repouso. Depois de se moverem juntos, de 8,0 a 11,0 s percorrem de 75,0 a 90,0 cm, ou seja, 15 cm em 3 s, com velocidade comum de 5 cm/s. Pela conservação da quantidade de movimento, m₁·v₁ = (m₁ + m₂)·v: 150 × 15 = (150 + m₂) × 5, logo 2 250 = 750 + 5·m₂ e m₂ = 300 g. Portanto, a massa do carrinho 2 é 300,0 g (alternativa C).`,
    subject: ['fis'],
    topics: ['Impulso e quantidade de movimento', 'Questões aleatórias'],
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
    explanation: `Para neutralizar gases de caráter ácido (que provocam chuva ácida), a solução deve ser a mais básica possível. Descartam-se o fenol e o hidrogenossulfato de potássio, que são ácidos (liberam H₃O⁺). Entre as substâncias básicas (que liberam OH⁻), a mais eficiente é a de maior constante de equilíbrio: o hidrogenofosfato de potássio, com K = 2,8×10⁻², valor superior ao da metilamina (4,4×10⁻⁴) e da piridina (1,7×10⁻⁹). Portanto, a substância capaz de remover os gases com maior eficiência é o hidrogenofosfato de potássio (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
    explanation: `As vacinas atuam estimulando o sistema imunológico a produzir anticorpos (imunoglobulinas) específicos contra um patógeno. Entre os mecanismos dos probióticos, o que produz efeito semelhante ao da vacina é o estímulo à produção de imunoglobulinas (mecanismo 4), pois também ativa a resposta imune específica do hospedeiro. Os demais mecanismos agem por competição, antagonismo ou barreira física, sem envolver a produção de anticorpos. Portanto, a resposta é a alternativa B.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
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
    explanation: `As estratégias de mitigação buscam reduzir a emissão e a concentração de gases de efeito estufa, como ocorre com usinas eólicas, maior eficiência dos veículos, agricultura de baixo carbono e tratamento de resíduos. Já as estratégias de adaptação visam preparar os sistemas humanos para as mudanças climáticas já em curso, reduzindo seus efeitos negativos. A criação de diques de contenção em regiões costeiras não reduz a emissão de gases, mas protege as populações da elevação do nível do mar, caracterizando uma medida de adaptação. Portanto, a resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `A lipofilia é um dos fatores fundamentais para o planejamento
de um fármaco. Ela mede o grau de afinidade que a substância
tem com ambientes apolares, podendo ser avaliada por seu
coeficiente de partição. CH₃ X CH₃ H X = OH (Testosterona) X =
H (Composto 1) X = CH₃ (Composto 2) H H O NOGUEIRA, L. J.;
MONTANARI, C. A.; DONNICI, C. L. Histórico da evolução da
química medicinal e a importância da lipofilia: de Hipócrates
e Galeno a Paracelsus e as contribuições de Overton e de
Hansch. Revista Virtual de Química , n. 3, 2009 (adaptado). Em
relação ao coeficiente de partição da testosterona, as
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
    explanation: `A lipofilia aumenta com grupos apolares e diminui com grupos polares, como a hidroxila (–OH) presente na testosterona (X = OH). No Composto 1 (X = H), a substituição do –OH por –H elimina um grupo polar, tornando a molécula mais lipofílica que a testosterona. No Composto 2 (X = CH₃), o grupo metila é apolar, aumentando ainda mais a lipofilia em relação à testosterona. Assim, as lipofilias dos Compostos 1 e 2 são, respectivamente, maior e maior que a da testosterona. Portanto, a resposta é a alternativa D.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
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
    explanation: `A força necessária para arrastar o navio vence o atrito estático: F_atrito = μ·m·g = 0,8 × 3 000 × 10 = 24 000 N. Em uma associação de n polias móveis, a força aplicada é reduzida por um fator 2ⁿ, ou seja, F = 24 000 ÷ 2ⁿ. Para que essa força não ultrapasse os 400 N aplicados por Arquimedes, é preciso 2ⁿ ≥ 24 000 ÷ 400 = 60; como 2⁵ = 32 é insuficiente e 2⁶ = 64 já basta, o número mínimo de polias móveis é 6. Portanto, a resposta é a alternativa B.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
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
      { id: 'E', type: 'text', value: `variação do número de cromossomos característico da espécie.` },
    ],
    correct: 'C',
    explanation: `A permuta (crossing-over) é a troca de segmentos entre cromátides não irmãs de cromossomos homólogos, que ocorre durante a prófase I da meiose. Esse processo embaralha os alelos, gerando novas combinações gênicas nos gametas e aumentando a variabilidade genética. Portanto, essa troca de segmentos é determinante na recombinação genética na formação dos gametas (alternativa C).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `mais rapidamente na bandeja de alumínio, pois ela tem uma maior condutividade térmica que a de plástico.` },
      { id: 'B', type: 'text', value: `mais rapidamente na bandeja de plástico, pois ela tem inicialmente uma temperatura mais alta que a de alumínio.` },
      { id: 'C', type: 'text', value: `mais rapidamente na bandeja de plástico, pois ela tem uma maior capacidade térmica que a de alumínio.` },
      { id: 'D', type: 'text', value: `mais rapidamente na bandeja de alumínio, pois ela tem um calor específico menor que a de plástico.` },
      { id: 'E', type: 'text', value: `com a mesma rapidez nas duas bandejas, pois apresentarão a mesma variação de temperatura.` },
    ],
    correct: 'A',
    explanation: `As duas bandejas estão em equilíbrio térmico com o ambiente, ou seja, na mesma temperatura; a sensação de que o alumínio está mais frio ocorre porque ele conduz o calor da mão mais rapidamente. Colocado o gelo, a rapidez do derretimento depende da velocidade com que o calor do ambiente chega ao gelo através da bandeja. Como o alumínio tem condutividade térmica muito maior que a do plástico, ele transfere calor ao gelo mais depressa, derretendo-o mais rápido. Portanto, o derretimento ocorre mais rapidamente na bandeja de alumínio, por sua maior condutividade térmica (alternativa A).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Os tensoativos são compostos capazes de interagir com substancias polares e apolares. A parte iônica dos tensoativos interage com substâncias polares, e a parte lipofílica interage com as apolares. A estrutura orgânica de um tensoativo pode ser representada por: CH₂ C CH₂ CH₂ CH₂ CH₂ CH₂ CH₂ O H₃ C CH₂ CH₂ CH₂ CH₂ CH₂ CH₂ Ao adicionar um tensoativo sobre a água, suas moléculas formam um arranjo ordenado. Esse arranjo é representado esquematicamente por: A Nível da água B Nível da`,
    images: ['/enem/2016/images/enem_2016_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2016/images/enem_2016_d1_q85_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2016/images/enem_2016_d1_q85_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2016/images/enem_2016_d1_q85_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2016/images/enem_2016_d1_q85_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2016/images/enem_2016_d1_q85_E.jpg` },
    ],
    correct: 'C',
    explanation: `No tensoativo, a "cabeça" iônica é polar e interage com a água, enquanto a "cauda" lipofílica é apolar e é repelida por ela. Ao ser adicionado sobre a água, as moléculas se organizam na superfície com as cabeças polares voltadas para o líquido (no nível da água) e as caudas apolares projetadas para fora, em direção ao ar. O esquema que representa as cabeças alinhadas no nível da água e as caudas apontando para fora do líquido é o da alternativa C. Portanto, a resposta é a alternativa C.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Um experimento para comprovar a natureza ondulatória da
radiação de micro-ondas foi realizado da seguinte forma:
anotou-se a frequência de operação de um forno de micro-ondas
e, em seguida, retirou-se sua plataforma giratória. No seu
lugar, colocou-se uma travessa refratária com uma camada
grossa de manteiga. Depois disso, o forno foi ligado por
alguns segundos. Ao se retirar a travessa refrataria do forno,
observou-se que havia tres pontos de manteiga derretida
alinhados sobre toda a travessa. Parte da onda estacionaria
gerada no interior do forno e ilustrada na figura. I II III IV
V De acordo com a figura, que posições correspondem a dois
pontos consecutivos da manteiga derretida?`,
    images: ['/enem/2016/images/enem_2016_d1_q86.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I e III` },
      { id: 'B', type: 'text', value: `I e V` },
      { id: 'C', type: 'text', value: `II e III` },
      { id: 'D', type: 'text', value: `II e IV` },
      { id: 'E', type: 'text', value: `II e V` },

    ],
    correct: 'A',
    explanation: `A manteiga derrete nos pontos de maior vibração da onda estacionária, isto é, nos ventres (antinodos), onde a energia é máxima. Na figura, os ventres correspondem às posições centrais dos fusos (I, III e V), enquanto os nós ficam entre eles (II e IV), sem vibração. Dois pontos consecutivos de manteiga derretida correspondem, portanto, a dois ventres consecutivos: I e III. Portanto, a resposta é a alternativa A.`,
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
    explanation: `O hormônio antidiurético (ADH) promove a reabsorção de água nos túbulos renais. No diabetes insipidus há deficiência na produção ou na ação do ADH, de modo que os rins reabsorvem pouca água e eliminam grande volume de urina diluída (poliúria). Essa perda excessiva de água leva o paciente à desidratação, sintoma clássico da doença. Portanto, a resposta é a alternativa E.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `o campo magnético gerado pela oscilação das nanopartículas é absorvido pelo tumor.` },
      { id: 'B', type: 'text', value: `o campo magnético alternado faz as nanopartículas girarem, transferindo calor por atrito.` },
      { id: 'C', type: 'text', value: `as nanopartículas interagem magneticamente com as células do corpo, transferindo calor.` },
      { id: 'D', type: 'text', value: `o campo magnético alternado fornece calor para as nanopartículas que o transfere às células do corpo.` },
      { id: 'E', type: 'text', value: `as nanopartículas são aceleradas em um único sentido em razão da interação com o campo magnético, fazendo-as colidir com as células e transferir calor.` },
    ],
    correct: 'B',
    explanation: `No procedimento, as nanopartículas magnéticas captadas pelas células tumorais são submetidas a um campo magnético externo alternado. Esse campo faz as nanopartículas oscilarem e girarem continuamente, e o atrito desse movimento com o meio celular gera calor. O aquecimento resultante eleva a temperatura das células tumorais, danificando-as. Portanto, a elevação de temperatura ocorre porque o campo magnético alternado faz as nanopartículas girarem, transferindo calor por atrito (alternativa B).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `O aquecimento de um material por irradiação com micro-ondas
ocorre por causa da interação da onda eletromagnética com o
dipolo elétrico da molécula. Um importante atributo do
aquecimento por micro-ondas é a absorção direta da energia
pelo material a ser aquecido. Assim, esse aquecimento é
seletivo e dependerá, principalmente, da constante dielétrica
e da frequência de relaxação do material. O gráfico mostra a
taxa de aquecimento de cinco solventes sob irradiação de
micro-ondas. Água Metanol Etanol Propanol n-Hexano 100 80
Temperatura (°C) 60 40 20 0 10 20 30 40 50 60 70 80 Tempo (s)
BARBOZA, A. C. R. N. et al. Aquecimento em forno de
micro-ondas. Desenvolvimento de alguns conceitos fundamentais.
Química Nova , n. 6, 2001 (adaptado). No gráfico, qual
solvente apresenta taxa média de aquecimento mais próxima de
zero, no intervalo de 0 s a 40 s?`,
    images: ['/enem/2016/images/enem_2016_d1_q89.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `H₂O` },
      { id: 'B', type: 'text', value: `CH₃ OH` },
      { id: 'C', type: 'text', value: `CH₃ CH₂ OH` },
      { id: 'D', type: 'text', value: `CH₃ CH₂ CH₂ OH` },
      { id: 'E', type: 'text', value: `CH₃ CH₂ CH₂ CH₂ CH₂ CH₃` },
    ],
    correct: 'E',
    explanation: `O aquecimento por micro-ondas é tanto mais eficiente quanto mais polar (maior constante dielétrica) for a molécula do solvente, pois são as moléculas polares que absorvem bem essa radiação. Entre os solventes, o n-hexano (CH₃CH₂CH₂CH₂CH₂CH₃) é um hidrocarboneto apolar, que praticamente não absorve a energia das micro-ondas; por isso sua temperatura quase não varia e sua curva permanece quase plana. Assim, no intervalo de 0 a 40 s, é o n-hexano que apresenta taxa média de aquecimento mais próxima de zero. Portanto, a resposta é a alternativa E.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2016,
    day: 1,
    text: `Apesar da grande diversidade biológica, a hipótese de que a
vida na Terra tenha tido uma única origem comum é aceita pela
comunidade científica. Uma evidência que apoia essa hipótese é
a observação de processos biológicos comuns a todos os seres
vivos atualmente existentes. Um exemplo de tal processo é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `desenvolvimento embrionário.` },
      { id: 'B', type: 'text', value: `reprodução sexuada.` },
      { id: 'C', type: 'text', value: `respiração aeróbica.` },
      { id: 'D', type: 'text', value: `excreção urinária.` },
      { id: 'E', type: 'text', value: `síntese proteica.` },
    ],
    correct: 'E',
    explanation: `A hipótese de origem comum é sustentada por processos bioquímicos compartilhados por todos os seres vivos atuais. A síntese proteica, que emprega o mesmo código genético e o mesmo mecanismo de tradução (DNA → RNA → proteína) em bactérias, plantas, animais e demais organismos, é um exemplo desse processo universal. Características como reprodução sexuada, respiração aeróbica ou desenvolvimento embrionário não estão presentes em todos os seres vivos. Portanto, o exemplo de processo comum a todos é a síntese proteica (alternativa E).`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
];

export default ENEM_2016_D1;
