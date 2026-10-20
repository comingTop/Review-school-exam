import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2013_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Mapa 1 
Distribuição espacial atual da população brasileira 
THÉRY, H. As boas-novas sobre a população brasileira. Conhecimento Prático 
Geográfico , n. 41, jan. 2012 (adaptado). 
Os mapas representam distintos padrões de distribuição de processos socioespaciais. Nesse sentido, a menor 
incidência de disputas territoriais envolvendo povos indígenas se explica pela`,
    images: ['/enem/2013/images/enem_2013_d1_q1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fertilização natural dos solos.` },
      { id: 'B', type: 'text', value: `expansão da fronteira agrícola.` },
      { id: 'C', type: 'text', value: `intensificação da migração de retorno.` },
      { id: 'D', type: 'text', value: `homologação de reservas extrativistas.` },
      { id: 'E', type: 'text', value: `concentração histórica da urbanização.` },
    ],
    correct: 'E',
    explanation: `Os dois mapas mostram que a população brasileira se concentra, sobretudo, na faixa litorânea e na porção Centro-Sul, enquanto os conflitos em terras indígenas se concentram na Amazônia e no Centro-Oeste. A menor incidência de disputas territoriais com povos indígenas nas áreas mais povoadas resulta da concentração histórica da urbanização e da ocupação dessas regiões, que, desde o período colonial, reduziu drasticamente a presença indígena ali, por isso a alternativa E está correta. A e C (fertilização dos solos e migração de retorno) não explicam a sobreposição entre povoamento e ausência de conflitos. B (expansão da fronteira agrícola) descreve justamente onde os conflitos aumentam, e não onde diminuem, e D (homologação de reservas extrativistas) não corresponde ao padrão espacial representado.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Demografia', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Trata-se de um gigantesco movimento de construção de cidades, necessário para o assentamento residencial
dessa população, bem como de suas necessidades de trabalho, abastecimento, transportes, saúde, energia, água
etc. Ainda que o rumo tomado pelo crescimento urbano não tenha respondido satisfatoriamente a todas essas
necessidades, o território foi ocupado e foram construídas as condições para viver nesse espaço.
MARICATO, E. Brasil, cidades: alternativas para a crise urbana. Petrópolis: Vozes, 2001.
A dinâmica de transformação das cidades tende a apresentar como consequência a expansão das áreas
periféricas pelo(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `crescimento da população urbana e aumento da especulação imobiliária.` },
      { id: 'B', type: 'text', value: `direcionamento maior do fluxo de pessoas, devido à existência de um grande número de serviços.` },
      { id: 'C', type: 'text', value: `delimitação de áreas para uma ocupação organizada do espaço físico, melhorando a qualidade de vida.` },
      { id: 'D', type: 'text', value: `implantação de políticas públicas que promovem a moradia e o direito à cidade aos seus moradores.` },
      { id: 'E', type: 'text', value: `reurbanização de moradias nas áreas centrais, mantendo o trabalhador próximo ao seu emprego, diminuindo os deslocamentos para a periferia.` },

    ],
    correct: 'A',
    explanation: `O texto de Maricato associa o crescimento urbano à construção acelerada de moradias e de infraestrutura para uma população que se expande. A dinâmica de transformação das cidades tende a empurrar os mais pobres para as franjas urbanas em razão do crescimento da população urbana somado à especulação imobiliária, que encarece as áreas centrais e bem servidas, por isso a alternativa A está correta. B atribui a periferização ao fluxo em busca de serviços, que se concentram no centro, e C fala em ocupação organizada que melhoraria a qualidade de vida, oposto do que ocorre na periferização. D e E descrevem políticas de moradia e reurbanização central que conteriam, e não ampliariam, a expansão periférica.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `No dia 1º de julho de 2012, a cidade do Rio de Janeiro 
tornou-se a primeira do mundo a receber o título da 
Unesco de Patrimônio Mundial como Paisagem Cultural. 
A candidatura, apresentada pelo Instituto do Patrimônio 
Histórico e Artístico Nacional (Iphan), foi aprovada 
durante a 36ª Sessão do Comitê do Patrimônio Mundial. 
O presidente do Iphan explicou que “a paisagem carioca 
é a imagem mais explícita do que podemos chamar de 
civilização brasileira, com sua originalidade, desafios, 
contradições e possibilidades”. A partir de agora, os 
locais da cidade valorizados com o título da Unesco serão 
alvo de ações integradas visando a preservação da sua 
paisagem cultural. 
Disponível em: www.cultura.gov.br. Acesso em: 7 mar. 2013 (adaptado). 
O reconhecimento da paisagem em questão como 
patrimônio mundial deriva da`,
    alternatives: [
      { id: 'A', type: 'text', value: `presença do corpo artístico local.` },
      { id: 'B', type: 'text', value: `imagem internacional da metrópole.` },
      { id: 'C', type: 'text', value: `herança de prédios da ex-capital do país.` },
      { id: 'D', type: 'text', value: `diversidade de culturas presente na cidade.` },
      { id: 'E', type: 'text', value: `relação sociedade-natureza de caráter singular.` },
    ],
    correct: 'E',
    explanation: `O reconhecimento do Rio de Janeiro como Patrimônio Mundial na categoria Paisagem Cultural valoriza a maneira singular como a cidade se integra ao seu sítio natural, entre a montanha e o mar. Esse título deriva da relação sociedade-natureza de caráter singular, que combina o relevo, a vegetação e a baía com a ocupação humana, por isso a alternativa E está correta. A reduz o mérito à presença de um corpo artístico, enquanto B e C o atribuem à imagem internacional da metrópole e à herança arquitetônica da ex-capital, aspectos secundários. D aponta a diversidade cultural, que, embora exista, não é o que define a categoria de paisagem reconhecida.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Urbanização', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `TEXTO I 
Há já algum tempo eu me apercebi de que, desde 
meus primeiros anos, recebera muitas falsas opiniões 
como verdadeiras, e de que aquilo que depois eu fundei 
em princípios tão mal assegurados não podia ser senão 
mui duvidoso e incerto. Era necessário tentar seriamente, 
uma vez em minha vida, desfazer-me de todas as opiniões 
a que até então dera crédito, e começar tudo novamente 
a fim de estabelecer um saber firme e inabalável. 
DESCARTES, R. Meditações concernentes à Primeira Filosofia. 
São Paulo: Abril Cultural, 1973 (adaptado). 
TEXTO II 
É o caráter radical do que se procura que exige a 
radicalização do próprio processo de busca. Se todo o 
espaço for ocupado pela dúvida, qualquer certeza que 
aparecer a partir daí terá sido de alguma forma gerada 
pela própria dúvida, e não será seguramente nenhuma 
daquelas que foram anteriormente varridas por essa 
mesma dúvida. 
SILVA, F. L. Descartes : a metafísica da modernidade. São Paulo: Moderna, 2001 (adaptado). 
A exposição e a análise do projeto cartesiano indicam que, 
para viabilizar a reconstrução radical do conhecimento, 
deve-se`,
    alternatives: [
      { id: 'A', type: 'text', value: `retomar o método da tradição para edificar a ciência com legitimidade.` },
      { id: 'B', type: 'text', value: `questionar de forma ampla e profunda as antigas ideias e concepções.` },
      { id: 'C', type: 'text', value: `investigar os conteúdos da consciência dos homens menos esclarecidos.` },
      { id: 'D', type: 'text', value: `buscar uma via para eliminar da memória saberes antigos e ultrapassados.` },
      { id: 'E', type: 'text', value: `encontrar ideias e pensamentos evidentes que dispensam ser questionados.` },
    ],
    correct: 'B',
    explanation: `Os textos de Descartes e de seu comentador indicam que o projeto cartesiano busca um saber firme recomeçando do zero, livre das falsas opiniões aceitas desde a infância. Para reconstruir radicalmente o conhecimento, é preciso questionar de forma ampla e profunda as antigas ideias e concepções, submetendo-as à dúvida metódica, por isso a alternativa B está correta. A propõe retomar o método da tradição, justamente o que Descartes rejeita, e C restringe a dúvida à consciência dos menos esclarecidos. D a confunde com a simples eliminação da memória de saberes antigos, e E parte de ideias evidentes que dispensariam o questionamento, contrariando o caráter radical da busca.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `De ponta a ponta, é tudo praia-palma, muito chã e 
muito formosa. Pelo sertão nos pareceu, vista do mar, 
muito grande, porque, a estender olhos, não podíamos 
ver senão terra com arvoredos, que nos parecia muito 
longa. Nela, até agora, não pudemos saber que haja ouro, 
nem prata, nem coisa alguma de metal ou ferro; nem lho 
vimos. Porém a terra em si é de muito bons ares [...]. 
Porém o melhor fruto que dela se pode tirar me parece 
que será salvar esta gente. 
Carta de Pero Vaz de Caminha. In: MARQUES, A.; BERUTTI, F.; FARIA, R. 
História moderna através de textos. São Paulo: Contexto, 2001. 
A carta de Pero Vaz de Caminha permite entender o 
projeto colonizador para a nova terra. Nesse trecho, o 
relato enfatiza o seguinte objetivo:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Valorizar a catequese a ser realizada sobre os povos nativos.` },
      { id: 'B', type: 'text', value: `Descrever a cultura local para enaltecer a prosperidade portuguesa.` },
      { id: 'C', type: 'text', value: `Transmitir o conhecimento dos indígenas sobre o potencial econômico existente.` },
      { id: 'D', type: 'text', value: `Realçar a pobreza dos habitantes nativos para demarcar a superioridade europeia.` },
      { id: 'E', type: 'text', value: `Criticar o modo de vida dos povos autóctones para evidenciar a ausência de trabalho.` },
    ],
    correct: 'A',
    explanation: `Na Carta de Pero Vaz de Caminha, o escrivão observa que a nova terra não revelava, de imediato, ouro, prata ou metais, mas conclui que o melhor fruto a tirar dela seria salvar aquela gente. Esse trecho enfatiza o objetivo de valorizar a catequese a ser realizada sobre os povos nativos, central ao projeto colonizador português, por isso a alternativa A está correta. B e C falam em enaltecer a prosperidade portuguesa e em aproveitar o conhecimento econômico dos indígenas, ausentes no trecho. D realça a pobreza para afirmar a superioridade europeia, leitura que o texto não faz, e E critica o modo de vida dos nativos por falta de trabalho, o que não corresponde ao sentido religioso destacado.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O canto triste dos conquistados: 
os últimos dias de Tenochtitlán 
Nos caminhos jazem dardos quebrados; 
os cabelos estão espalhados. 
Destelhadas estão as casas, 
Vermelhas estão as águas, os rios, como se alguém 
as tivesse tingido, 
Nos escudos esteve nosso resguardo, 
mas os escudos não detêm a desolação... 
PINSKY, J. et al. História da América através de textos . 
São Paulo: Contexto, 2007 (fragmento).    
O texto é um registro asteca, cujo sentido está 
relacionado ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `tragédia causada pela destruição da cultura desse povo.` },
      { id: 'B', type: 'text', value: `tentativa frustrada de resistência a um poder considerado superior.` },
      { id: 'C', type: 'text', value: `extermínio das populações indígenas pelo Exército espanhol.` },
      { id: 'D', type: 'text', value: `dissolução da memória sobre os feitos de seus antepassados.` },
      { id: 'E', type: 'text', value: `profetização das consequências da colonização da América.` },
    ],
    correct: 'B',
    explanation: `O poema asteca descreve dardos quebrados, casas destelhadas, águas tingidas de vermelho e escudos que não detêm a desolação, retratando a derrota diante dos conquistadores espanhóis em Tenochtitlán. O sentido do texto está relacionado à tentativa frustrada de resistência a um poder considerado superior, pois os guerreiros astecas não conseguiram conter a invasão, por isso a alternativa B está correta. A enfatiza a tragédia da destruição cultural, que é consequência, mas não o foco da cena de combate, e C atribui o extermínio ao Exército espanhol de modo genérico. D fala em perda de memória dos antepassados e E em profecia da colonização, elementos que não traduzem o relato da resistência militar derrotada.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `IBGE. Censo demográfico 2010 : resultados gerais da amostra.
Disponível em: ftp://ftp.ibge.gov.br. Acesso em: 12 mar. 2013. O
processo registrado no gráfico gerou a seguinte consequência
demográfica:`,
    images: ['/enem/2013/images/enem_2013_d1_q7.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Decréscimo da população absoluta.` },
      { id: 'B', type: 'text', value: `Redução do crescimento vegetativo.` },
      { id: 'C', type: 'text', value: `Diminuição da proporção de adultos.` },
      { id: 'D', type: 'text', value: `Expansão de políticas de controle da natalidade.` },
      { id: 'E', type: 'text', value: `Aumento da renovação da população economicamente ativa.` },
    ],
    correct: 'B',
    explanation: `O gráfico mostra a queda contínua da taxa de fecundidade total no Brasil, de cerca de 6,16 filhos por mulher em 1940 para 1,90 em 2010. A consequência demográfica direta desse processo é a redução do crescimento vegetativo, pois menos nascimentos diminuem a diferença entre natalidade e mortalidade, por isso a alternativa B está correta. A, o decréscimo da população absoluta, não ocorre, já que a população ainda cresce, e C e E (diminuição da proporção de adultos e aumento da população economicamente ativa) contrariam o envelhecimento gerado pela baixa fecundidade. D inverte a relação, pois a queda da fecundidade é resultado, e não causa posterior, de políticas de controle da natalidade.`,
    subject: ['geo'],
    topics: ['Demografia', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `As Brigadas Internacionais foram unidades de combatentes
formadas por voluntários de 53 nacionalidades dispostos a
lutar em defesa da República espanhola. Estima-se que cerca de
60 mil cidadãos de várias partes do mundo - incluindo 40
brasileiros - tenham se incorporado a essas unidades. Apesar
de coordenadas pelos comunistas, as Brigadas contaram com
membros socialistas, liberais e de outras correntes
político-ideológicas. SOUZA, I. I. A Guerra Civil Europeia.
História Viva , n. 70, 2009 (fragmento). A Guerra Civil
Espanhola expressou as disputas em curso na Europa na década
de 1930. A perspectiva política comum que promoveu a
mobilização descrita foi o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `crítica ao stalinismo.` },
      { id: 'B', type: 'text', value: `combate ao fascismo.` },
      { id: 'C', type: 'text', value: `rejeição ao federalismo.` },
      { id: 'D', type: 'text', value: `apoio ao corporativismo.` },
      { id: 'E', type: 'text', value: `adesão ao anarquismo.` },
    ],
    correct: 'B',
    explanation: `As Brigadas Internacionais reuniram voluntários de dezenas de nacionalidades e de várias correntes, como comunistas, socialistas e liberais, para lutar em defesa da República espanhola. O elemento comum que uniu essas forças tão diversas foi o combate ao fascismo, representado pelos nacionalistas de Franco, apoiados por Hitler e Mussolini, por isso a alternativa B está correta. A restringe a mobilização à crítica ao stalinismo, que dividiria, e não uniria, as correntes de esquerda. C, D e E (rejeição ao federalismo, apoio ao corporativismo e adesão ao anarquismo) correspondem a pautas particulares que não explicam a convergência antifascista descrita.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `De todas as transformações impostas pelo meio 
técnico-científico-informacional à logística de transportes, 
interessa-nos mais de perto a intermodalidade. E por 
uma razão muito simples: o potencial que tal “ferramenta 
logística” ostenta permite que haja, de fato, um sistema de 
transportes condizente com a escala geográfica do Brasil. 
HUERTAS, D. M. O papel dos transportes na expansão recente da fronteira agrícola brasileira. 
Revista Transporte y Territorio , Universidade de Buenos Aires, n. 3, 2010 (adaptado).
A necessidade de modais de transporte interligados, no 
território brasileiro, justifica-se pela(s)`,
    alternatives: [
      { id: 'A', type: 'text', value: `variações climáticas no território, associadas à interiorização da produção.` },
      { id: 'B', type: 'text', value: `grandes distâncias e a busca da redução dos custos de transporte.` },
      { id: 'C', type: 'text', value: `formação geológica do país, que impede o uso de um único modal.` },
      { id: 'D', type: 'text', value: `proximidade entre a área de produção agrícola intensiva e os portos.` },
      { id: 'E', type: 'text', value: `diminuição dos fluxos materiais em detrimento de fluxos imateriais.` },
    ],
    correct: 'B',
    explanation: `O texto de Huertas destaca a importância da intermodalidade para dotar o Brasil de um sistema de transportes compatível com sua escala continental. A necessidade de modais interligados justifica-se pelas grandes distâncias do território e pela busca da redução dos custos de transporte, já que combinar diferentes modais barateia o deslocamento de cargas, por isso a alternativa B está correta. A e D atribuem a demanda a variações climáticas e à proximidade entre produção e portos, que não exigem intermodalidade. C fala em formação geológica que impediria um único modal, argumento não sustentado, e E opõe fluxos materiais e imateriais, alheio ao problema logístico tratado.`,
    subject: ['geo'],
    topics: ['Globalização', 'Indústria e comércio', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Nasce daqui uma questão: se vale mais ser amado 
que temido ou temido que amado. Responde-se que 
ambas as coisas seriam de desejar; mas porque é 
difícil juntá-las, é muito mais seguro ser temido que 
amado, quando haja de faltar uma das duas. Porque 
dos homens se pode dizer, duma maneira geral, que 
são ingratos, volúveis, simuladores, covardes e ávidos 
de lucro, e enquanto lhes fazes bem são inteiramente 
teus, oferecem-te o sangue, os bens, a vida e os filhos, 
quando, como acima disse, o perigo está longe; mas 
quando ele chega, revoltam-se. 
MAQUIAVEL, N. O príncipe . Rio de Janeiro: Bertrand, 1991. 
A partir da análise histórica do comportamento humano 
em suas relações sociais e políticas, Maquiavel define o 
homem como um ser`,
    alternatives: [
      { id: 'A', type: 'text', value: `munido de virtude, com disposição nata a praticar o bem a si e aos outros.` },
      { id: 'B', type: 'text', value: `possuidor de fortuna, valendo-se de riquezas para alcançar êxito na política.` },
      { id: 'C', type: 'text', value: `guiado por interesses, de modo que suas ações são imprevisíveis e inconstantes.` },
      { id: 'D', type: 'text', value: `naturalmente racional, vivendo em um estado pré-social e portando seus direitos naturais.` },
      { id: 'E', type: 'text', value: `sociável por natureza, mantendo relações pacíficas com seus pares.` },
    ],
    correct: 'C',
    explanation: `No trecho de O Príncipe, Maquiavel afirma que os homens são, de maneira geral, ingratos, volúveis, simuladores e ávidos de lucro, apoiando o governante enquanto o perigo está longe e voltando-se contra ele quando este se aproxima. A partir dessa leitura, Maquiavel define o homem como um ser guiado por interesses, cujas ações são imprevisíveis e inconstantes, por isso a alternativa C está correta. A e E o descrevem como naturalmente virtuoso ou sociável e pacífico, o oposto do texto. B o reduz ao possuidor de fortuna em busca de êxito político, e D o concebe como racional em estado pré-social, concepção contratualista que não corresponde ao realismo maquiavélico.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Nos estados, entretanto, se instalavam as oligarquias, 
de cujo perigo já nos advertia Saint-Hilaire, e sob o 
disfarce do que se chamou “a política dos governadores”. 
Em círculos concêntricos esse sistema vem cumular no 
próprio poder central que é o sol do nosso sistema. 
PRADO, P. Retrato do Brasil. Rio de Janeiro: José Olympio, 1972. 
A crítica presente no texto remete ao acordo que 
fundamentou o regime republicano brasileiro durante as 
três primeiras décadas do século XX e fortaleceu o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `poder militar, enquanto fiador da ordem econômica.` },
      { id: 'B', type: 'text', value: `presidencialismo, com o objetivo de limitar o poder dos coronéis.` },
      { id: 'C', type: 'text', value: `domínio de grupos regionais sobre a ordem federativa.` },
      { id: 'D', type: 'text', value: `intervenção nos estados, autorizada pelas normas constitucionais.` },
      { id: 'E', type: 'text', value: `isonomia do governo federal no tratamento das disputas locais.` },
    ],
    correct: 'C',
    explanation: `O texto de Paulo Prado critica a política dos governadores, acordo que sustentou a República Velha ao articular os interesses das oligarquias estaduais com o poder central. Esse pacto fortaleceu o domínio de grupos regionais sobre a ordem federativa, consolidando o mando das elites de alguns estados, por isso a alternativa C está correta. A atribui o arranjo ao poder militar e B ao presidencialismo voltado a limitar os coronéis. D fala em intervenção constitucional nos estados e E na isonomia do governo federal, interpretações que contrariam o caráter oligárquico e concentrador denunciado no texto.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `No final do século XIX, as Grandes Sociedades 
carnavalescas alcançaram ampla popularidade entre os 
foliões cariocas. Tais sociedades cultivavam um pretensioso 
objetivo em relação à comemoração carnavalesca em 
si mesma: com seus desfiles de carros enfeitados pelas 
principais ruas da cidade, pretendiam abolir o entrudo 
(brincadeira que consistia em jogar água nos foliões) e 
outras práticas difundidas entre a população desde os 
tempos coloniais, substituindo-os por formas de diversão 
que consideravam mais civilizadas, inspiradas nos 
carnavais de Veneza. Contudo, ninguém parecia disposto 
a abrir mão de suas diversões para assistir ao carnaval 
das sociedades. O entrudo, na visão dos seus animados 
praticantes, poderia coexistir perfeitamente com os desfiles. 
 PEREIRA, C. S. Os senhores da alegria: a presença das mulheres nas Grandes Sociedades 
carnavalescas cariocas em fins do século XIX. In: CUNHA, M. C. P. Carnavais e outras 
frestas : ensaios de história social da cultura. Campinas: Unicamp; Cecult, 2002 (adaptado). 
Manifestações culturais como o carnaval também têm 
sua própria história, sendo constantemente reinventadas 
ao longo do tempo. A atuação das Grandes Sociedades, 
descrita no texto, mostra que o carnaval representava um 
momento em que as`,
    alternatives: [
      { id: 'A', type: 'text', value: `distinções sociais eram deixadas de lado em nome da celebração.` },
      { id: 'B', type: 'text', value: `aspirações cosmopolitas da elite impediam a realização da festa fora dos clubes.` },
      { id: 'C', type: 'text', value: `liberdades individuais eram extintas pelas regras das autoridades públicas.` },
      { id: 'D', type: 'text', value: `tradições populares se transformavam em matéria de disputas sociais.` },
      { id: 'E', type: 'text', value: `perseguições policiais tinham caráter xenófobo por repudiarem tradições estrangeiras.` },
    ],
    correct: 'D',
    explanation: `O texto sobre as Grandes Sociedades carnavalescas mostra que, no fim do século XIX, a elite buscava civilizar o carnaval, substituindo o entrudo e outras práticas populares por desfiles inspirados em Veneza, sem que os foliões abrissem mão de suas diversões. Isso revela que o carnaval era um momento em que as tradições populares se transformavam em matéria de disputas sociais, opondo projetos culturais distintos, por isso a alternativa D está correta. A afirma que as distinções sociais eram deixadas de lado, o oposto da tensão descrita, e B e C supõem que a festa não saía dos clubes ou que as liberdades eram extintas. E atribui às práticas um caráter xenófobo, não indicado no texto.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `PEDERNEIRAS, R. Revista da Semana , ano 35, n. 40, 15 set. 1934. In: LEMOS, R. (Org.). 
Uma história do Brasil através das caricaturas (1840-2001) . 
Rio de Janeiro: Bom Texto; Letras e Expressões, 2001. 
Na imagem, da década de 1930, há uma crítica à conquista 
de um direito pelas mulheres, relacionado com a`,
    images: ['/enem/2013/images/enem_2013_d1_q13.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `redivisão do trabalho doméstico.` },
      { id: 'B', type: 'text', value: `liberdade de orientação sexual.` },
      { id: 'C', type: 'text', value: `garantia da equiparação salarial.` },
      { id: 'D', type: 'text', value: `aprovação do direito ao divórcio.` },
      { id: 'E', type: 'text', value: `obtenção da participação eleitoral.` },
    ],
    correct: 'E',
    explanation: `A charge de 1934, com a referência irônica ao partido Mulherista, critica a recente conquista de um direito pelas mulheres. No contexto, esse direito é a obtenção da participação eleitoral, garantida pelo Código Eleitoral de 1932, que assegurou o voto feminino, por isso a alternativa E está correta. A e C (redivisão do trabalho doméstico e equiparação salarial) não correspondem ao direito político satirizado. B (liberdade de orientação sexual) e D (direito ao divórcio) tratam de pautas alheias ao período e ao sentido da imagem, que associa a mulher ao ingresso na política.`,
    subject: ['his'],
    topics: ['Brasil República', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Então, a travessia das veredas sertanejas é mais exaustiva que
a de uma estepe nua. Nesta, ao menos, o viajante tem o
desafogo de um horizonte largo e a perspectiva das planuras
francas. Ao passo que a outra o afoga; abrevia-lhe o olhar;
agride-o e estonteia-o; enlaça-o na trama espinescente e não o
atrai; repulsa-o com as folhas urticantes, com o espinho, com
os gravetos estalados em lanças, e desdobra-se-lhe na frente
léguas e léguas, imutável no aspecto desolado; árvore sem
folhas, de galhos estorcidos e secos, revoltos, entrecruzados,
apontando rijamente no espaço ou estirando-se flexuosos pelo
solo, lembrando um bracejar imenso, de tortura, da flora
agonizante... CUNHA, E. Os sertões . Disponível em:
http://pt.scribd.com. Acesso em: 2 jun. 2012. Os elementos da
paisagem descritos no texto correspondem a aspectos
biogeográficos presentes na`,
    alternatives: [
      { id: 'A', type: 'text', value: `composição de vegetação xerófila.` },
      { id: 'B', type: 'text', value: `formação de florestas latifoliadas.` },
      { id: 'C', type: 'text', value: `transição para mata de grande porte.` },
      { id: 'D', type: 'text', value: `adaptação à elevada salinidade.` },
      { id: 'E', type: 'text', value: `homogeneização da cobertura perenifólia.` },
    ],
    correct: 'A',
    explanation: `O trecho de Os sertões, de Euclides da Cunha, descreve uma vegetação espinescente, de galhos retorcidos, secos e agonizantes, típica de um ambiente de aridez. Esses elementos correspondem à composição de vegetação xerófila, adaptada à escassez de água característica da caatinga do sertão, por isso a alternativa A está correta. B e C (florestas latifoliadas e mata de grande porte) descrevem formações úmidas, incompatíveis com a paisagem descrita. D associa a flora à salinidade, que não é o fator em questão, e E fala em cobertura perenifólia homogênea, oposto da vegetação caducifólia e esgalhada retratada.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Na produção social que os homens realizam, eles 
entram em determinadas relações indispensáveis e 
independentes de sua vontade; tais relações de produção 
correspondem a um estágio definido de desenvolvimento 
das suas forças materiais de produção. A totalidade 
dessas relações constitui a estrutura econômica da 
sociedade - fundamento real, sobre o qual se erguem as 
superestruturas política e jurídica, e ao qual correspondem 
determinadas formas de consciência social. 
MARX, K. Prefácio à Crítica da economia política . In: MARX, K.; ENGELS, F.
Textos 3 . São Paulo: Edições Sociais, 1977 (adaptado). 
Para o autor, a relação entre economia e política 
estabelecida no sistema capitalista faz com que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o proletariado seja contemplado pelo processo de mais-valia.` },
      { id: 'B', type: 'text', value: `o trabalho se constitua como o fundamento real da produção material.` },
      { id: 'C', type: 'text', value: `a consolidação das forças produtivas seja compatível com o progresso humano.` },
      { id: 'D', type: 'text', value: `a autonomia da sociedade civil seja proporcional ao desenvolvimento econômico.` },
      { id: 'E', type: 'text', value: `a burguesia revolucione o processo social de formação da consciência de classe.` },
    ],
    correct: 'B',
    explanation: `No prefácio à Crítica da economia política, Marx afirma que as relações de produção formam a estrutura econômica, base real sobre a qual se erguem as superestruturas política e jurídica. Para o autor, na relação entre economia e política do capitalismo, é o trabalho que se constitui como o fundamento real da produção material e de toda a vida social, por isso a alternativa B está correta. A reduz a questão à mais-valia do proletariado, e C e D supõem compatibilidade com o progresso humano e autonomia da sociedade civil. E atribui à burguesia a formação da consciência de classe, deslocamentos que não traduzem a tese marxista da determinação econômica.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Um trabalhador em tempo flexível controla o 
local do trabalho, mas não adquire maior controle 
sobre o processo em si. A essa altura, vários estudos 
sugerem que a supervisão do trabalho é muitas vezes 
maior para os ausentes do escritório do que para os 
presentes. O trabalho é fisicamente descentralizado e 
o poder sobre o trabalhador, mais direto. 
SENNETT, R. A corrosão do caráter : consequências pessoais do novo capitalismo. 
Rio de Janeiro: Record, 1999 (adaptado). 
Comparada à organização do trabalho característica do 
taylorismo e do fordismo, a concepção de tempo analisada 
no texto pressupõe que`,
    alternatives: [
      { id: 'A', type: 'text', value: `as tecnologias de informação sejam usadas para democratizar as relações laborais.` },
      { id: 'B', type: 'text', value: `as estruturas burocráticas sejam transferidas da empresa para o espaço doméstico.` },
      { id: 'C', type: 'text', value: `os procedimentos de terceirização sejam aprimorados pela qualificação profissional.` },
      { id: 'D', type: 'text', value: `as organizações sindicais sejam fortalecidas com a valorização da especialização funcional.` },
      { id: 'E', type: 'text', value: `os mecanismos de controle sejam deslocados dos processos para os resultados do trabalho.` },
    ],
    correct: 'E',
    explanation: `Sennett observa que o trabalhador em tempo flexível controla o local, mas não o processo do trabalho, e que a supervisão sobre os ausentes do escritório é, muitas vezes, maior que sobre os presentes. Comparada ao taylorismo e ao fordismo, essa concepção pressupõe que os mecanismos de controle sejam deslocados dos processos para os resultados do trabalho, já que se cobra o desempenho, e não a vigilância direta da execução, por isso a alternativa E está correta. A e C falam em democratizar relações e aprimorar a terceirização, e B em transferir a burocracia para o espaço doméstico. D menciona o fortalecimento dos sindicatos, aspectos que não decorrem da ideia de controle descentralizado e orientado por metas.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Sociologia', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Modelo 1 Fornecedor Estoque Produção Estoque Cliente Modelo 2
Requisição Requisição Entrega Entrega Cliente Produção
Fornecedor Disponível em: http://ensino.univates.br. Acesso
em: 11 maio 2013 (adaptado). Na imagem, estão representados
dois modelos de produção. A possibilidade de uma crise de
superprodução é distinta entre eles em função do seguinte
fator:`,
    images: ['/enem/2013/images/enem_2013_d1_q17.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Origem da matéria-prima.` },
      { id: 'B', type: 'text', value: `Qualificação da mão de obra.` },
      { id: 'C', type: 'text', value: `Velocidade de processamento.` },
      { id: 'D', type: 'text', value: `Necessidade de armazenamento.` },
      { id: 'E', type: 'text', value: `Amplitude do mercado consumidor.` },
    ],
    correct: 'D',
    explanation: `A imagem contrapõe o Modelo 1, em que a produção empurra os bens para estoques antes de chegar ao cliente, ao Modelo 2, puxado pela requisição do cliente, próprio da produção enxuta. A possibilidade de uma crise de superprodução distingue os dois modelos em função da necessidade de armazenamento, pois o primeiro acumula estoques e pode superproduzir, enquanto o segundo produz sob demanda, por isso a alternativa D está correta. A, B, C e E (origem da matéria-prima, qualificação da mão de obra, velocidade de processamento e amplitude do mercado) não são o fator que diferencia a formação de excedentes entre os dois esquemas representados.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A África também já serviu como ponto de partida para comédias
bem vulgares, mas de muito sucesso, como Um príncipe em Nova
York e Ace Ventura: um maluco na África ; em ambas, a África
parece um lugar cheio de tribos doidas e rituais de desenho
animado. A animação O rei Leão , da Disney, o mais
bem-sucedido filme americano ambientado na África, não chegava
a contar com elenco de seres humanos. LEIBOWITZ, E. Filmes de
Hollywood sobre África ficam no clichê . Disponível em:
http://notícias.uol.com.br. Acesso em: 17 abr. 2010. A
produção cinematográfica referida no texto contribui para a
constituição de uma memória sobre a África e seus habitantes.
Essa memória enfatiza e negligencia, respectivamente, os
seguintes aspectos do continente africano:`,
    alternatives: [
      { id: 'A', type: 'text', value: `A história e a natureza.` },
      { id: 'B', type: 'text', value: `O exotismo e as culturas.` },
      { id: 'C', type: 'text', value: `A sociedade e a economia.` },
      { id: 'D', type: 'text', value: `O comércio e o ambiente.` },
      { id: 'E', type: 'text', value: `A diversidade e a política.` },
    ],
    correct: 'B',
    explanation: `O texto critica a forma como o cinema hollywoodiano retrata a África como um lugar de tribos e rituais pitorescos, cheio de seres não humanos, como em comédias e animações. Essa produção constrói uma memória que enfatiza o exotismo e negligencia as culturas do continente, reduzindo-o a estereótipos, por isso a alternativa B está correta. As demais alternativas (história e natureza, sociedade e economia, comércio e ambiente, diversidade e política) não expressam o par exato, realce do exótico e apagamento da riqueza cultural, denunciado no texto.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Disneylândia Multinacionais japonesas instalam empresas em
Hong-Kong E produzem com matéria-prima brasileira Para
competir no mercado americano [...] Pilhas americanas
alimentam eletrodomésticos ingleses na Nova Guiné Gasolina
árabe alimenta automóveis americanos na África do Sul [...]
Crianças iraquianas fugidas da guerra Não obtêm visto no
consulado americano do Egito Para entrarem na Disneylândia
ANTUNES, A. Disponível em: www.radio.uol.com.br. Acesso em: 3
fev. 2013 (fragmento). Na canção, ressalta-se a coexistência,
no contexto internacional atual, das seguintes situações:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Acirramento do controle alfandegário e estímulo ao capital especulativo.` },
      { id: 'B', type: 'text', value: `Ampliação das trocas econômicas e seletividade dos fluxos populacionais.` },
      { id: 'C', type: 'text', value: `Intensificação do controle informacional e adoção de barreiras fitossanitárias.` },
      { id: 'D', type: 'text', value: `Aumento da circulação mercantil e desregulamentação do sistema financeiro.` },
      { id: 'E', type: 'text', value: `Expansão do protecionismo comercial e descaracterização de identidades nacionais.` },
    ],
    correct: 'B',
    explanation: `A canção Disneylândia descreve mercadorias e matérias-primas que circulam entre continentes, como pilhas americanas em eletrodomésticos ingleses e gasolina árabe em carros americanos, ao lado de pessoas, como as crianças iraquianas impedidas de entrar nos Estados Unidos. O texto ressalta a ampliação das trocas econômicas globais combinada à seletividade dos fluxos populacionais, que restringe a circulação de certas pessoas, por isso a alternativa B está correta. A fala em acirrar o controle alfandegário, C em barreiras fitossanitárias e D em desregulamentação financeira. E trata de protecionismo e perda de identidades nacionais, aspectos que não captam o contraste entre o livre fluxo de bens e o controle de pessoas.`,
    subject: ['geo'],
    topics: ['Globalização', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `PSD - PTB - UDN PSP - PDC - MTR PTN - PST - PSB PRP - PR - PL
- PRT Finados FORTUNA. Correio da Manhã , ano 65, n. 22 264, 2
nov. 1965. A imagem foi publicada no jornal Correio da Manhã ,
no dia de Finados de 1965. Sua relação com os direitos
políticos existentes no período revela a`,
    alternatives: [
      { id: 'A', type: 'text', value: `extinção dos partidos nanicos.` },
      { id: 'B', type: 'text', value: `retomada dos partidos estaduais.` },
      { id: 'C', type: 'text', value: `adoção do bipartidarismo regulado.` },
      { id: 'D', type: 'text', value: `superação do fisiologismo tradicional.` },
      { id: 'E', type: 'text', value: `valorização da representação parlamentar.` },
    ],
    correct: 'C',
    explanation: `A imagem, publicada no Dia de Finados de 1965, lista siglas de partidos sobre a palavra Finados, simbolizando sua morte após o Ato Institucional nº 2, que extinguiu os partidos existentes. Sua relação com os direitos políticos do período revela a adoção do bipartidarismo regulado, que reduziu a vida partidária a Arena e MDB, por isso a alternativa C está correta. A fala em extinção dos partidos nanicos e B em retomada dos partidos estaduais. D menciona a superação do fisiologismo e E a valorização da representação parlamentar, leituras que não correspondem ao enquadramento autoritário do sistema partidário pela ditadura militar.`,
    subject: ['his'],
    topics: ['Ditadura Militar no Brasil', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Um gigante da indústria da internet, em gesto 
simbólico, mudou o tratamento que conferia à sua 
página palestina. O site de buscas alterou sua página 
quando acessada da Cisjordânia. Em vez de “territórios 
palestinos”, a empresa escreve agora “Palestina” logo 
abaixo do logotipo. 
BERCITO, D. Google muda tratamento de territórios palestinos. 
Folha de S. Paulo , 4 maio 2013 (adaptado). 
O gesto simbólico sinalizado pela mudança no status dos 
territórios palestinos significa o`,
    alternatives: [
      { id: 'A', type: 'text', value: `surgimento de um país binacional.` },
      { id: 'B', type: 'text', value: `fortalecimento de movimentos antissemitas.` },
      { id: 'C', type: 'text', value: `esvaziamento de assentamentos judaicos.` },
      { id: 'D', type: 'text', value: `reconhecimento de uma autoridade jurídica.` },
      { id: 'E', type: 'text', value: `estabelecimento de fronteiras nacionais.` },
    ],
    correct: 'D',
    explanation: `O texto relata que o Google, ao ser acessado da Cisjordânia, substituiu territórios palestinos por Palestina sob o logotipo, em um gesto simbólico. Essa mudança de status significa o reconhecimento de uma autoridade jurídica, isto é, do estatuto da Palestina como entidade política reconhecida, por isso a alternativa D está correta. A (surgimento de país binacional), B (fortalecimento de movimentos antissemitas), C (esvaziamento de assentamentos judaicos) e E (estabelecimento de fronteiras nacionais) atribuem ao gesto efeitos concretos que a simples alteração de nomenclatura em um site não produz.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Conflitos internacionais', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Para que não haja abuso, é preciso organizar as 
coisas de maneira que o poder seja contido pelo poder. 
Tudo estaria perdido se o mesmo homem ou o mesmo 
corpo dos principais, ou dos nobres, ou do povo, 
exercesse esses três poderes: o de fazer leis, o de 
executar as resoluções públicas e o de julgar os crimes 
ou as divergências dos indivíduos. Assim, criam-se os 
poderes Legislativo, Executivo e Judiciário, atuando 
de forma independente para a efetivação da liberdade, 
sendo que esta não existe se uma mesma pessoa ou 
grupo exercer os referidos poderes concomitantemente. 
MONTESQUIEU, B. Do espírito das leis . São Paulo: Abril Cultural, 1979 (adaptado). 
A divisão e a independência entre os poderes são 
condições necessárias para que possa haver liberdade 
em um Estado. Isso pode ocorrer apenas sob um modelo 
político em que haja`,
    alternatives: [
      { id: 'A', type: 'text', value: `exercício de tutela sobre atividades jurídicas e políticas.` },
      { id: 'B', type: 'text', value: `consagração do poder político pela autoridade religiosa.` },
      { id: 'C', type: 'text', value: `concentração do poder nas mãos de elites técnico-cientifícas.` },
      { id: 'D', type: 'text', value: `estabelecimento de limites aos atores públicos e às instituições do governo.` },
      { id: 'E', type: 'text', value: `reunião das funções de legislar, julgar e executar nas mãos de um governante eleito.` },
    ],
    correct: 'D',
    explanation: `Montesquieu sustenta que, para evitar o abuso, é preciso que o poder contenha o poder, separando as funções de legislar, executar e julgar em órgãos independentes. A liberdade política só é possível em um modelo em que haja o estabelecimento de limites aos atores públicos e às instituições do governo, impedindo a concentração em uma mesma pessoa ou grupo, por isso a alternativa D está correta. A e C (tutela sobre atividades jurídicas e concentração em elites técnicas) e E (reunião das funções nas mãos de um governante) contrariam a separação proposta. B vincula o poder à autoridade religiosa, estranha ao argumento sobre divisão dos poderes.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Quando ninguém duvida da existência de um outro 
mundo, a morte é uma passagem que deve ser celebrada 
entre parentes e vizinhos. O homem da Idade Média tem a 
convicção de não desaparecer completamente, esperando 
a ressurreição. Pois nada se detém e tudo continua 
na eternidade. A perda contemporânea do sentimento 
religioso fez da morte uma provação aterrorizante, um 
trampolim para as trevas e o desconhecido. 
DUBY, G. Ano 1000 ano 2000 na pista dos nossos medos . 
São Paulo: Unesp, 1998 (adaptado). 
Ao comparar as maneiras com que as sociedades têm 
lidado com a morte, o autor considera que houve um 
processo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `mercantilização das crenças religiosas.` },
      { id: 'B', type: 'text', value: `transformação das representações sociais.` },
      { id: 'C', type: 'text', value: `disseminação do ateísmo nos países de maioria cristã.` },
      { id: 'D', type: 'text', value: `diminuição da distância entre saber científico e eclesiástico.` },
      { id: 'E', type: 'text', value: `amadurecimento da consciência ligada à civilização moderna.` },
    ],
    correct: 'B',
    explanation: `Georges Duby observa que, enquanto o homem medieval encarava a morte como passagem celebrada entre parentes, à espera da ressurreição, a perda contemporânea do sentimento religioso tornou a morte uma provação aterrorizante. Comparando essas atitudes, o autor identifica um processo de transformação das representações sociais sobre a morte ao longo do tempo, por isso a alternativa B está correta. A reduz a mudança à mercantilização das crenças, e C e D falam em disseminação do ateísmo e em aproximação entre ciência e religião. E menciona o amadurecimento da consciência moderna, interpretações que não traduzem a alteração cultural do modo de lidar com a morte descrita por Duby.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O edifício é circular. Os apartamentos dos prisioneiros 
ocupam a circunferência. Você pode chamá-los, se 
quiser, de celas . O apartamento do inspetor ocupa o 
centro; você pode chamá-lo, se quiser, de alojamento 
do inspetor . A moral reformada; a saúde preservada; a 
indústria revigorada; a instrução difundida; os encargos 
públicos aliviados; a economia assentada, como deve 
ser, sobre uma rocha; o nó górdio da Lei sobre os Pobres 
não cortado, mas desfeito - tudo por uma simples ideia 
de arquitetura! 
BENTHAM, J. O panóptico . Belo Horizonte: Autêntica, 2008.
Essa é a proposta de um sistema conhecido como 
panóptico, um modelo que mostra o poder da disciplina nas 
sociedades contemporâneas, exercido preferencialmente 
por mecanismos`,
    alternatives: [
      { id: 'A', type: 'text', value: `religiosos, que se constituem como um olho divino controlador que tudo vê.` },
      { id: 'B', type: 'text', value: `ideológicos, que estabelecem limites pela alienação, impedindo a visão da dominação sofrida.` },
      { id: 'C', type: 'text', value: `repressivos, que perpetuam as relações de dominação entre os homens por meio da tortura física.` },
      { id: 'D', type: 'text', value: `sutis, que adestram os corpos no espaço-tempo por meio do olhar como instrumento de controle.` },
      { id: 'E', type: 'text', value: `consensuais, que pactuam acordos com base na compreensão dos benefícios gerais de se ter as próprias ações controladas.` },
    ],
    correct: 'D',
    explanation: `O texto de Bentham descreve o panóptico como um edifício circular em que o inspetor, no centro, pode vigiar continuamente os prisioneiros, reformando a moral e disciplinando pela arquitetura. Esse modelo mostra que o poder disciplinar das sociedades contemporâneas é exercido por mecanismos sutis, que adestram os corpos no espaço-tempo por meio do olhar como instrumento de controle, por isso a alternativa D está correta. A e B atribuem o controle a um olho divino ou à alienação ideológica, e C o reduz à tortura física. E fala em consenso baseado nos benefícios do autocontrole, formas que não correspondem à vigilância discreta e permanente própria do panóptico.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Vida social sem internet? E NO MSN, NO MYSPACE E FACEBOOK? EM
TODOS! VOCE ESTA NO ORKUT? ESTOU ! VOCÊ ESTÁ EM TANTOS
LUGARES, POR ISSO RARAMENTE TE VEJO NO MUNDO REAL ! ATE NO
TWITTER? CLARO! Disponível em:
http://tv-video-edc.blogspot.com. Acesso em: 30 maio 2010. A
charge revela uma crítica aos meios de comunicação, em
especial à internet, porque`,
    images: ['/enem/2013/images/enem_2013_d1_q25.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `questiona a integração das pessoas nas redes virtuais de relacionamento.` },
      { id: 'B', type: 'text', value: `considera as relações sociais como menos importantes que as virtuais.` },
      { id: 'C', type: 'text', value: `enaltece a pretensão do homem de estar em todos os lugares ao mesmo tempo.` },
      { id: 'D', type: 'text', value: `descreve com precisão as sociedades humanas no mundo globalizado.` },
      { id: 'E', type: 'text', value: `concebe a rede de computadores como o espaço mais eficaz para a construção de relações sociais.` },
    ],
    correct: 'A',
    explanation: `Na charge, um blogueiro profissional só se relaciona com o outro por meio de redes como Orkut, MSN, Facebook e Twitter, a ponto de dizer que raramente o vê no mundo real. A crítica aos meios de comunicação se dá porque a imagem questiona a integração das pessoas nas redes virtuais de relacionamento, que substituiria o contato presencial, por isso a alternativa A está correta. B e E supõem que a charge valoriza as relações virtuais como mais importantes ou mais eficazes, o oposto de sua ironia. C enaltece a pretensão de estar em todos os lugares, e D afirma descrever com precisão as sociedades globalizadas, quando o tom é de crítica, e não de constatação neutra.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Durante a realeza, e nos primeiros anos republicanos, 
as leis eram transmitidas oralmente de uma geração para 
outra. A ausência de uma legislação escrita permitia aos 
patrícios manipular a justiça conforme seus interesses. 
Em 451 a.C., porém, os plebeus conseguiram eleger 
uma comissão de dez pessoas - os decênviros - para 
escrever as leis. Dois deles viajaram a Atenas, na Grécia, 
para estudar a legislação de Sólon. 
COULANGES, F. A cidade antiga . São Paulo: Martins Fontes, 2000. 
A superação da tradição jurídica oral no mundo antigo, 
descrita no texto, esteve relacionada à`,
    alternatives: [
      { id: 'A', type: 'text', value: `adoção do sufrágio universal masculino.` },
      { id: 'B', type: 'text', value: `extensão da cidadania aos homens livres.` },
      { id: 'C', type: 'text', value: `afirmação de instituições democráticas.` },
      { id: 'D', type: 'text', value: `implantação de direitos sociais.` },
      { id: 'E', type: 'text', value: `tripartição dos poderes políticos.` },
    ],
    correct: 'B',
    explanation: `O texto de Fustel de Coulanges relata que, em Roma, as leis eram transmitidas oralmente e manipuladas pelos patrícios até que, em 451 a.C., os plebeus conquistaram a eleição dos decênviros para redigi-las, originando a Lei das Doze Tábuas. A superação da tradição jurídica oral esteve relacionada à extensão da cidadania aos homens livres, pois o registro escrito tornou a lei acessível também aos plebeus, por isso a alternativa B está correta. A (sufrágio universal masculino), C (afirmação de instituições democráticas), D (direitos sociais) e E (tripartição dos poderes) são anacrônicas ou não correspondem ao ganho plebeu de igualdade perante leis públicas e escritas.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A felicidade é, portanto, a melhor, a mais nobre e a 
mais aprazível coisa do mundo, e esses atributos não 
devem estar separados como na inscrição existente 
em Delfos “das coisas, a mais nobre é a mais justa, 
e a melhor é a saúde; porém a mais doce é ter o que 
amamos”. Todos estes atributos estão presentes nas 
mais excelentes atividades, e entre essas a melhor, nós a 
identificamos como felicidade. 
ARISTÓTELES. A Política . São Paulo: Cia. das Letras, 2010.
Ao reconhecer na felicidade a reunião dos mais excelentes 
atributos, Aristóteles a identifica como`,
    alternatives: [
      { id: 'A', type: 'text', value: `busca por bens materiais e títulos de nobreza.` },
      { id: 'B', type: 'text', value: `plenitude espiritual e ascese pessoal.` },
      { id: 'C', type: 'text', value: `finalidade das ações e condutas humanas.` },
      { id: 'D', type: 'text', value: `conhecimento de verdades imutáveis e perfeitas.` },
      { id: 'E', type: 'text', value: `expressão do sucesso individual e reconhecimento público.` },
    ],
    correct: 'C',
    explanation: `No trecho de A Política, Aristóteles afirma que a felicidade reúne os atributos mais excelentes, o mais nobre, o mais justo e o mais aprazível, presentes nas melhores atividades humanas. Ao reconhecer na felicidade essa reunião, Aristóteles a identifica como finalidade das ações e condutas humanas, isto é, o bem supremo a que tudo se dirige, por isso a alternativa C está correta. A reduz a felicidade à busca de bens materiais e títulos, e B à ascese e à plenitude espiritual. D a associa ao conhecimento de verdades imutáveis, e E ao sucesso individual e ao reconhecimento público, concepções que não correspondem ao sentido de fim último da vida ética defendido por Aristóteles.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Disponível em: http://BP.blogspot.com. Acesso em: 24 ago. 2011. 
Na imagem, visualiza-se um método de cultivo e as 
transformações provocadas no espaço geográfico. 
O objetivo imediato da técnica agrícola utilizada é`,
    images: ['/enem/2013/images/enem_2013_d1_q28.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `controlar a erosão laminar.` },
      { id: 'B', type: 'text', value: `preservar as nascentes fluviais.` },
      { id: 'C', type: 'text', value: `diminuir a contaminação química.` },
      { id: 'D', type: 'text', value: `incentivar a produção transgênica.` },
      { id: 'E', type: 'text', value: `implantar a mecanização intensiva.` },
    ],
    correct: 'A',
    explanation: `A imagem mostra o cultivo em terraços, ou curvas de nível, em uma encosta, técnica que fragmenta a declividade em patamares. O objetivo imediato dessa prática agrícola é controlar a erosão laminar, pois os terraços reduzem a velocidade do escoamento superficial da água e a perda de solo, por isso a alternativa A está correta. B (preservar nascentes), C (diminuir a contaminação química), D (incentivar transgênicos) e E (implantar mecanização intensiva) não são efeitos diretos do terraceamento, que, inclusive, dificulta a mecanização em grande escala nas vertentes.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Seguiam-se vinte criados custosamente vestidos e 
montados em soberbos cavalos; depois destes, marchava 
o Embaixador do Rei do Congo magnificamente ornado 
de seda azul para anunciar ao Senado que a vinda do 
Rei estava destinada para o dia dezesseis. Em resposta 
obteve repetidas vivas do povo que concorreu alegre e 
admirado de tanta grandeza. 
Coroação do Rei do Congo em Santo Amaro, Bahia apud DEL PRIORE, M. Festas e utopias 
no Brasil colonial. In: CATELLI JR., R. Um olhar sobre as festas populares brasileiras . 
São Paulo: Brasiliense, 1994 (adaptado). 
Originária dos tempos coloniais, a festa da Coroação do 
Rei do Congo evidencia um processo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `exclusão social.` },
      { id: 'B', type: 'text', value: `imposição religiosa.` },
      { id: 'C', type: 'text', value: `acomodação política.` },
      { id: 'D', type: 'text', value: `supressão simbólica.` },
      { id: 'E', type: 'text', value: `ressignificação cultural.` },
    ],
    correct: 'E',
    explanation: `O texto descreve a festa da Coroação do Rei do Congo, realizada em Santo Amaro, na Bahia, com cortejo, cavalos e trajes suntuosos, originária dos tempos coloniais. Essa manifestação evidencia um processo de ressignificação cultural, pois os africanos escravizados reelaboraram, em território brasileiro, tradições políticas e religiosas de origem africana, por isso a alternativa E está correta. A e B a reduzem a exclusão social e a imposição religiosa, e C a interpreta como mera acomodação política. D a entende como supressão simbólica, leituras que ignoram a reinvenção criativa da cultura afro-brasileira expressa na festa.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `TEXTO I 
A nossa luta é pela democratização da propriedade 
da terra, cada vez mais concentrada em nosso país. 
Cerca de 1% de todos os proprietários controla 46% 
das terras. Fazemos pressão por meio da ocupação de 
latifúndios improdutivos e grandes propriedades, que não 
cumprem a função social, como determina a Constituição 
de 1988. Também ocupamos as fazendas que têm origem 
na grilagem de terras públicas. 
Disponível em: www.mst.org.br. Acesso em: 25 ago. 2011 (adaptado). 
TEXTO II 
O pequeno proprietário rural é igual a um pequeno 
proprietário de loja: quanto menor o negócio mais difícil 
de manter, pois tem de ser produtivo e os encargos são 
difíceis de arcar. Sou a favor de propriedades produtivas e 
sustentáveis e que gerem empregos. Apoiar uma empresa 
produtiva que gere emprego é muito mais barato e gera 
muito mais do que apoiar a reforma agrária. 
LESSA, C. Disponível em: www.observadorpolitico.org.br. Acesso em: 25 ago. 2011 (adaptado). 
Nos fragmentos dos textos, os posicionamentos em 
relação à reforma agrária se opõem. Isso acontece porque 
os autores associam a reforma agrária, respectivamente, à`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução do inchaço urbano e à crítica ao minifúndio camponês.` },
      { id: 'B', type: 'text', value: `ampliação da renda nacional e à prioridade ao mercado externo.` },
      { id: 'C', type: 'text', value: `contenção da mecanização agrícola e ao combate ao êxodo rural.` },
      { id: 'D', type: 'text', value: `privatização de empresas estatais e ao estímulo ao crescimento econômico.` },
      { id: 'E', type: 'text', value: `correção de distorções históricas e ao prejuízo ao agronegócio.` },
    ],
    correct: 'E',
    explanation: `O Texto I, do MST, defende a reforma agrária como forma de corrigir a concentração histórica da terra, em que cerca de 1% controla 46% das propriedades, ocupando latifúndios improdutivos, enquanto o Texto II a critica, alegando que apoiar empresas produtivas gera mais empregos. Os posicionamentos se opõem porque associam a reforma agrária, respectivamente, à correção de distorções históricas e ao prejuízo ao agronegócio, por isso a alternativa E está correta. As demais alternativas (redução do inchaço urbano e crítica ao minifúndio, ampliação da renda e prioridade ao mercado externo, contenção da mecanização, e privatização de estatais) não traduzem o par exato de visões contrapostas apresentado nos textos.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Tendo encarado a besta do passado olho no olho, 
tendo pedido e recebido perdão e tendo feito correções, 
viremos agora a página - não para esquecê-lo, 
mas para não deixá-lo aprisionar-nos para sempre. 
Avancemos em direção a um futuro glorioso de uma 
nova sociedade sul-africana, em que as pessoas valham 
não em razão de irrelevâncias biológicas ou de outros 
estranhos atributos, mas porque são pessoas de valor 
infinito criadas à imagem de Deus. 
Desmond Tutu, no encerramento da Comissão da Verdade na África do Sul. Disponível em: 
http://td.camara.leg.br. Acesso em: 17 dez. 2012 (adaptado).
No texto, relaciona-se a consolidação da democracia na 
África do Sul à superação de um legado`,
    alternatives: [
      { id: 'A', type: 'text', value: `populista, que favorecia a cooptação de dissidentes políticos.` },
      { id: 'B', type: 'text', value: `totalitarista, que bloqueava o diálogo com os movimentos sociais.` },
      { id: 'C', type: 'text', value: `segregacionista, que impedia a universalização da cidadania.` },
      { id: 'D', type: 'text', value: `estagnacionista, que disseminava a pauperização social.` },
      { id: 'E', type: 'text', value: `fundamentalista, que engendrava conflitos religiosos.` },
    ],
    correct: 'C',
    explanation: `No discurso de encerramento da Comissão da Verdade sul-africana, Desmond Tutu propõe superar um passado em que as pessoas eram tratadas segundo irrelevâncias biológicas, em favor de uma nova sociedade. A consolidação da democracia na África do Sul associa-se, assim, à superação de um legado segregacionista, que impedia a universalização da cidadania, isto é, o apartheid, por isso a alternativa C está correta. A, B, D e E (populista, totalitarista, estagnacionista e fundamentalista) não correspondem ao regime de segregação racial institucionalizada que marcou o país e que o texto busca deixar para trás.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Ninguém desconhece a necessidade que todos 
os fazendeiros têm de aumentar o número de seus 
trabalhadores. E como até há pouco supriam-se os 
fazendeiros dos braços necessários? As fazendas eram 
alimentadas pela aquisição de escravos, sem o menor 
auxílio pecuniário do governo. Ora, se os fazendeiros se 
supriam de braços à sua custa, e se é possível obtê-los 
ainda, posto que de outra qualidade, por que motivo não 
hão de procurar alcançá-los pela mesma maneira, isto é, 
à sua custa? 
Resposta de Manuel Felizardo de Sousa e Mello, diretor geral das Terras Públicas, 
ao Senador Vergueiro. In: ALENCASTRO, L. F. (Org.). História da vida privada no Brasil . 
São Paulo: Cia. das Letras, 1998 (adaptado). 
O fragmento do discurso dirigido ao parlamentar do 
Império refere-se às mudanças então em curso no campo 
brasileiro, que confrontaram o Estado e a elite agrária em 
torno do objetivo de`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `fomentar ações públicas para ocupação das terras do interior.` },
      { id: 'B', type: 'text', value: `adotar o regime assalariado para proteção da mão de obra estrangeira.` },
      { id: 'C', type: 'text', value: `definir uma política de subsídio governamental para o fomento da imigração.` },
      { id: 'D', type: 'text', value: `regulamentar o tráfico interprovincial de cativos para sobrevivência das fazendas.` },
      { id: 'E', type: 'text', value: `financiar a fixação de famílias camponesas para estímulo da agricultura de subsistência.` },
    ],
    correct: 'C',
    explanation: `O discurso de Manuel Felizardo, dirigido ao Senador Vergueiro, trata da necessidade de ampliar os braços nas fazendas, antes supridos pela escravidão com auxílio pecuniário do governo. O fragmento revela o objetivo de definir uma política de subsídio governamental para o fomento da imigração, substituindo a mão de obra escrava por trabalhadores livres estrangeiros, por isso a alternativa C está correta. A fala em ocupar terras do interior, e B em adotar o assalariamento como proteção da mão de obra estrangeira. D menciona a regulamentação do tráfico interprovincial, e E a fixação de famílias camponesas na subsistência, propostas que não correspondem ao subsídio à imigração defendido.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `MOREAUX, F. R. Proclamação da Independência . 
Disponível em: www.tvbrasil.org.br. Acesso em: 14 jun. 2010. 
 FERREZ, M. D. Pedro II . 
SCHWARCZ, L. M. As barbas do imperador : D. Pedro II, um monarca nos trópicos. 
São Paulo: Cia. das Letras, 1998. 
As imagens, que retratam D. Pedro I e D. Pedro II, procuram 
transmitir determinadas representações políticas acerca 
dos dois monarcas e seus contextos de atuação. A ideia 
que cada imagem evoca é, respectivamente:`,
    images: ['/enem/2013/images/enem_2013_d1_q33_1.jpg', '/enem/2013/images/enem_2013_d1_q33_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Habilidade militar - riqueza pessoal.` },
      { id: 'B', type: 'text', value: `Liderança popular - estabilidade política.` },
      { id: 'C', type: 'text', value: `Instabilidade econômica - herança europeia.` },
      { id: 'D', type: 'text', value: `Isolamento político - centralização do poder.` },
      { id: 'E', type: 'text', value: `Nacionalismo exacerbado - inovação administrativa.` },
    ],
    correct: 'B',
    explanation: `A pintura da Proclamação da Independência retrata D. Pedro I cercado por populares em clima heroico, enquanto a fotografia de D. Pedro II o mostra sentado, sóbrio e sereno, símbolo de um reinado longevo. As imagens procuram transmitir, respectivamente, as ideias de liderança popular e de estabilidade política, por isso a alternativa B está correta. A (habilidade militar e riqueza pessoal), C (instabilidade econômica e herança europeia), D (isolamento político e centralização) e E (nacionalismo exacerbado e inovação administrativa) não correspondem às representações construídas em cada retrato.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Embora haja dados comuns que dão unidade ao 
fenômeno da urbanização na África, na Ásia e na América 
Latina, os impactos são distintos em cada continente e 
mesmo dentro de cada país, ainda que as modernizações 
se deem com o mesmo conjunto de inovações. 
ELIAS, D. Fim do século e urbanização no Brasil. Revista Ciência Geográfica , 
ano IV, n. 11, set./dez. 1988. 
O texto aponta para a complexidade da urbanização 
nos diferentes contextos socioespaciais. Comparando 
a organização socioeconômica das regiões citadas, a 
unidade desse fenômeno é perceptível no aspecto`,
    alternatives: [
      { id: 'A', type: 'text', value: `espacial, em função do sistema integrado que envolve as cidades locais e globais.` },
      { id: 'B', type: 'text', value: `cultural, em função da semelhança histórica e da condição de modernização econômica e política.` },
      { id: 'C', type: 'text', value: `demográfico, em função da localização das maiores aglomerações urbanas e continuidade do fluxo campo-cidade.` },
      { id: 'D', type: 'text', value: `territorial, em função da estrutura de organização e planejamento das cidades que atravessam as fronteiras nacionais.` },
      { id: 'E', type: 'text', value: `econômico, em função da revolução agrícola que transformou o campo e a cidade e contribuiu para fixação do homem ao lugar.` },
    ],
    correct: 'C',
    explanation: `O texto de Elias ressalta que a urbanização ocorre em ritmos e contextos distintos na África, na Ásia e na América Latina, mas mantém traços comuns. A unidade do fenômeno é perceptível no aspecto demográfico, em função da concentração das maiores aglomerações urbanas nesses continentes e da continuidade do fluxo campo-cidade, por isso a alternativa C está correta. As demais alternativas (espacial pelas cidades globais, cultural pela modernização, territorial pelo planejamento e econômico pela revolução agrícola) destacam dimensões que não expressam o elemento comum enfatizado pelo autor, ligado ao peso populacional e à migração.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Demografia', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Rua Preciados, seis da tarde. Ao longe, a massa humana que
abarrota a Praça Puerta Del Sol, em Madri, se levanta. Um
grupo de garotas, ao ver a cena, corre em direção à multidão.
Milhares de pessoas fazem ressoar o slogan : “Que não, que
não, que não nos representem”. Um garoto fala pelo megafone:
“Demandamos submeter a referendo o resgate bancário”.
RODRÍGUEZ, O. Puerta Del Sol, o grande alto-falante. Brasil de
Fato , São Paulo, 26 maio-1 jun. 2011(adaptado). Em 2011, o
acampamento dos Indignados espanhóis expressou todo o
descontentamento político da juventude europeia. Que proposta
sintetiza o conjunto de reivindicações políticas destes
jovens?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Voto universal.` },
      { id: 'B', type: 'text', value: `Democracia direta.` },
      { id: 'C', type: 'text', value: `Pluralidade partidária.` },
      { id: 'D', type: 'text', value: `Autonomia legislativa.` },
      { id: 'E', type: 'text', value: `Imunidade parlamentar.` },
    ],
    correct: 'B',
    explanation: `O texto descreve o movimento dos Indignados espanhóis de 2011, que, insatisfeitos com a representação política tradicional, pediam submeter decisões, como o resgate bancário, a referendo. A proposta que sintetiza suas reivindicações é a democracia direta, com maior participação popular nas decisões, por isso a alternativa B está correta. A, o voto universal, já era uma realidade e não resumia a pauta. C (pluralidade partidária), D (autonomia legislativa) e E (imunidade parlamentar) tratam de mecanismos da democracia representativa, justamente o modelo que os manifestantes contestavam.`,
    subject: ['soc'],
    topics: ['Movimentos sociais', 'Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Até hoje admitia-se que nosso conhecimento se devia 
regular pelos objetos; porém, todas as tentativas para 
descobrir, mediante conceitos, algo que ampliasse nosso 
conhecimento, malogravam-se com esse pressuposto. 
Tentemos, pois, uma vez, experimentar se não se 
resolverão melhor as tarefas da metafísica, admitindo que 
os objetos se deveriam regular pelo nosso conhecimento. 
KANT, I. Crítica da razão pura . Lisboa: Calouste-Gulbenkian, 1994 (adaptado). 
O trecho em questão é uma referência ao que ficou 
conhecido como revolução copernicana na filosofia. Nele, 
confrontam-se duas posições filosóficas que`,
    alternatives: [
      { id: 'A', type: 'text', value: `assumem pontos de vista opostos acerca da natureza do conhecimento.` },
      { id: 'B', type: 'text', value: `defendem que o conhecimento é impossível, restando-nos somente o ceticismo.` },
      { id: 'C', type: 'text', value: `revelam a relação de interdependência entre os dados da experiência e a reflexão filosófica.` },
      { id: 'D', type: 'text', value: `apostam, no que diz respeito às tarefas da filosofia, na primazia das ideias em relação aos objetos.` },
      { id: 'E', type: 'text', value: `refutam-se mutuamente quanto à natureza do nosso conhecimento e são ambas recusadas por Kant.` },
    ],
    correct: 'A',
    explanation: `Kant propõe inverter a relação tradicional entre sujeito e objeto: em vez de o conhecimento se regular pelos objetos, são os objetos que devem se conformar ao nosso conhecimento, no que ficou conhecido como revolução copernicana da filosofia. Nesse confronto, as duas posições assumem pontos de vista opostos acerca da natureza do conhecimento, por isso a alternativa A está correta. B reduz a questão ao ceticismo, e C afirma a interdependência entre dados da experiência e reflexão. D situa a primazia das ideias sobre os objetos como tese kantiana, e E diz que as posições se refutam e são ambas recusadas por Kant, o que não corresponde à oposição descrita.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Nos últimos decênios, o território conhece grandes 
mudanças em função de acréscimos técnicos que 
renovam a sua materialidade, como resultado e condição, 
ao mesmo tempo, dos processos econômicos e sociais 
em curso. 
SANTOS, M.; SILVEIRA; M. L. O Brasil: território e sociedade no início do século XXI . 
Rio de Janeiro: Record, 2004 (adaptado). 
A partir da última década, verifica-se a ocorrência 
no Brasil de alterações significativas no território, 
ocasionando impactos sociais, culturais e econômicos 
sobre comunidades locais, e com maior intensidade, na 
Amazônia Legal, com a`,
    alternatives: [
      { id: 'A', type: 'text', value: `reforma e ampliação de aeroportos nas capitais dos estados.` },
      { id: 'B', type: 'text', value: `ampliação de estádios de futebol para a realização de eventos esportivos.` },
      { id: 'C', type: 'text', value: `construção de usinas hidrelétricas sobre os rios Tocantins, Xingu e Madeira.` },
      { id: 'D', type: 'text', value: `instalação de cabos para a formação de uma rede informatizada de comunicação.` },
      { id: 'E', type: 'text', value: `formação de uma infraestrutura de torres que permitem a comunicação móvel na região.` },
    ],
    correct: 'C',
    explanation: `O texto de Santos e Silveira trata das grandes mudanças recentes no território em função de acréscimos técnicos e de processos econômicos e sociais. Na Amazônia Legal, essas alterações, com maior intensidade, relacionam-se à construção de usinas hidrelétricas sobre os rios Tocantins, Xingu e Madeira, que provocam impactos sociais e ambientais sobre comunidades locais, por isso a alternativa C está correta. As demais alternativas (ampliação de aeroportos, construção de estádios de futebol, instalação de redes informatizadas e de torres de telefonia móvel) descrevem intervenções que não correspondem às transformações de maior impacto citadas para a região amazônica.`,
    subject: ['geo'],
    topics: ['Energia e recursos naturais', 'Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A recuperação da herança cultural africana deve 
levar em conta o que é próprio do processo cultural: seu 
movimento, pluralidade e complexidade. Não se trata, 
portanto, do resgate ingênuo do passado nem do seu 
cultivo nostálgico, mas de procurar perceber o próprio 
rosto cultural brasileiro. O que se quer é captar seu 
movimento para melhor compreendê-lo historicamente. 
MINAS GERAIS. Cadernos do Arquivo 1: Escravidão em Minas Gerais. 
Belo Horizonte: Arquivo Público Mineiro, 1988. 
Com base no texto, a análise de manifestações culturais 
de origem africana, como a capoeira ou o candomblé, 
deve considerar que elas`,
    alternatives: [
      { id: 'A', type: 'text', value: `permanecem como reprodução dos valores e costumes africanos.` },
      { id: 'B', type: 'text', value: `perderam a relação com o seu passado histórico.` },
      { id: 'C', type: 'text', value: `derivam da interação entre valores africanos e a experiência histórica brasileira.` },
      { id: 'D', type: 'text', value: `contribuem para o distanciamento cultural entre negros e brancos no Brasil atual.` },
      { id: 'E', type: 'text', value: `demonstram a maior complexidade cultural dos africanos em relação aos europeus.` },
    ],
    correct: 'C',
    explanation: `O texto de Minas Gerais afirma que a herança cultural africana não deve ser vista como resgate ingênuo do passado nem como cultivo nostálgico, mas em seu movimento, pluralidade e complexidade. Por isso, manifestações como a capoeira e o candomblé devem ser compreendidas como práticas que derivam da interação entre valores africanos e a experiência histórica brasileira, por isso a alternativa C está correta. A as congela como simples reprodução de costumes africanos, e B afirma que perderam o vínculo com o passado. D e E as reduzem a instrumento de distanciamento entre negros e brancos ou a prova de maior complexidade africana, leituras que negam o caráter dinâmico e mestiço dessas expressões.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Meta de Faminto 
JK - Você agora tem automóvel brasileiro, para correr 
em estradas pavimentadas com asfalto brasileiro, com 
gazolina brasileira. Que mais quer? 
JECA - Um prato de feijão brasileiro, seu doutô! 
THÉO. In: LEMOS, R. (Org.). Uma história do Brasil através da caricatura (1840-2001) . 
Rio de Janeiro: Bom Texto; Letras & Expressões, 2001. 
A charge ironiza a política desenvolvimentista do governo 
Juscelino Kubitschek, ao`,
    images: ['/enem/2013/images/enem_2013_d1_q39.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `evidenciar que o incremento da malha viária diminuiu as desigualdades regionais do país.` },
      { id: 'B', type: 'text', value: `destacar que a modernização das indústrias dinamizou a produção de alimentos para o mercado interno.` },
      { id: 'C', type: 'text', value: `enfatizar que o crescimento econômico implicou aumento das contradições socioespaciais.` },
      { id: 'D', type: 'text', value: `ressaltar que o investimento no setor de bens duráveis incrementou os salários de trabalhadores.` },
      { id: 'E', type: 'text', value: `mostrar que a ocupação de regiões interioranas abriu frentes de trabalho para a população local.` },
    ],
    correct: 'C',
    explanation: `A charge Meta de Faminto ironiza o lema desenvolvimentista de JK ao contrapor o automóvel brasileiro e as estradas pavimentadas ao pedido simples de um prato de feijão feito por Jeca. A crítica enfatiza que o crescimento econômico do período implicou aumento das contradições socioespaciais, concentrando benefícios enquanto persistia a pobreza, por isso a alternativa C está correta. A, B, D e E (diminuição das desigualdades regionais, dinamização da produção de alimentos, aumento dos salários e abertura de frentes de trabalho) apresentam efeitos positivos do desenvolvimentismo que a charge justamente nega ao expor a fome.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `TEXTO I 
Ela acorda tarde depois de ter ido ao teatro e à dança; 
ela lê romances, além de desperdiçar o tempo a olhar 
para a rua da sua janela ou da sua varanda; passa horas 
no toucador a arrumar o seu complicado penteado; um 
número igual de horas praticando piano e mais outras na 
sua aula de francês ou de dança. 
Comentário do Padre Lopes da Gama acerca dos costumes femininos [1839] apud SILVA, T. 
V. Z. Mulheres, cultura e literatura brasileira. Ipotesi - Revista de Estudos Literários , 
Juiz de Fora, v. 2. n. 2, 1998. 
TEXTO II 
As janelas e portas gradeadas com treliças não eram 
cadeias confessas, positivas; mas eram, pelo aspecto e 
pelo seu destino, grandes gaiolas, onde os pais e maridos 
zelavam, sonegadas à sociedade, as filhas e as esposas. 
MACEDO, J. M. Memórias da Rua do Ouvidor [1878]. Disponível em: www.dominiopublico.gov.br. 
Acesso em: 20 maio 2013 (adaptado). 
A representação social do feminino comum aos dois 
textos é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `submissão de gênero, apoiada pela concepção patriarcal de família.` },
      { id: 'B', type: 'text', value: `acesso aos produtos de beleza, decorrência da abertura dos portos.` },
      { id: 'C', type: 'text', value: `ampliação do espaço de entretenimento, voltado às distintas classes sociais.` },
      { id: 'D', type: 'text', value: `proteção da honra, mediada pela disputa masculina em relação às damas da corte.` },
      { id: 'E', type: 'text', value: `valorização do casamento cristão, respaldado pelos interesses vinculados à herança.` },
    ],
    correct: 'A',
    explanation: `Os dois textos descrevem a mulher do século XIX confinada ao espaço doméstico, ocupada com toucador, piano e aulas, ou enclausurada atrás de grades e treliças, sonegada à sociedade por pais e maridos. A representação social comum aos textos é a submissão de gênero, apoiada pela concepção patriarcal de família, que subordinava a mulher à autoridade masculina, por isso a alternativa A está correta. B, C, D e E (acesso a produtos de beleza, ampliação do entretenimento, proteção da honra pela disputa masculina e valorização do casamento cristão) tratam de aspectos pontuais que não resumem a condição de subordinação retratada.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Desigualdade social', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Os produtos e seu consumo constituem a meta 
declarada do empreendimento tecnológico. Essa meta 
foi proposta pela primeira vez no início da Modernidade, 
como expectativa de que o homem poderia dominar a 
natureza. No entanto, essa expectativa, convertida em 
programa anunciado por pensadores como Descartes e 
Bacon e impulsionado pelo Iluminismo, não surgiu “de 
um prazer de poder”, “de um mero imperialismo humano”, 
mas da aspiração de libertar o homem e de enriquecer 
sua vida, física e culturalmente. 
CUPANI, A. A tecnologia como problema filosófico: três enfoques. 
Scientiae Studia , São Paulo, v. 2, n. 4, 2004 (adaptado). 
Autores da filosofia moderna, notadamente Descartes e 
Bacon, e o projeto iluminista concebem a ciência como 
uma forma de saber que almeja libertar o homem das 
intempéries da natureza. Nesse contexto, a investigação 
científica consiste em`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `expor a essência da verdade e resolver definitivamente as disputas teóricas ainda existentes.` },
      { id: 'B', type: 'text', value: `oferecer a última palavra acerca das coisas que existem e ocupar o lugar que outrora foi da filosofia.` },
      { id: 'C', type: 'text', value: `ser a expressão da razão e servir de modelo para outras áreas do saber que almejam o progresso.` },
      { id: 'D', type: 'text', value: `explicitar as leis gerais que permitem interpretar a natureza e eliminar os discursos éticos e religiosos.` },
      { id: 'E', type: 'text', value: `explicar a dinâmica presente entre os fenômenos naturais e impor limites aos debates acadêmicos.` },
    ],
    correct: 'C',
    explanation: `O texto de Cupani afirma que a ciência moderna, impulsionada por Descartes e Bacon, concebeu o conhecimento como forma de dominar e libertar o homem das intempéries da natureza, convertendo-se em programa de poder e de enriquecimento da vida. Nesse projeto iluminista, a investigação científica consiste em ser a expressão da razão e servir de modelo para outras áreas do saber que almejam o progresso, por isso a alternativa C está correta. A e B a reduzem a resolver disputas teóricas ou a ocupar o lugar da filosofia. D e E a limitam a interpretar leis eliminando discursos éticos e religiosos ou a impor limites aos debates acadêmicos, restrições que contrariam o ideal de razão progressista descrito.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Disponível em: http://blig.ig.com.br. Acesso em: 23 ago. 2011 (adaptado).
No esquema, o problema atmosférico relacionado ao ciclo da água acentuou-se após as revoluções industriais.
Uma consequência direta desse problema está na`,
    images: ['/enem/2013/images/enem_2013_d1_q42.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `redução da flora.` },
      { id: 'B', type: 'text', value: `elevação das marés.` },
      { id: 'C', type: 'text', value: `erosão das encostas.` },
      { id: 'D', type: 'text', value: `laterização dos solos.` },
      { id: 'E', type: 'text', value: `fragmentação das rochas.` },
    ],
    correct: 'A',
    explanation: `O esquema mostra o ciclo da chuva ácida: a emissão de dióxido de enxofre e de óxidos de nitrogênio forma ácidos sulfúrico e nítrico, que retornam ao solo e à água, causando danos à vegetação e o desaparecimento da vida aquática. Uma consequência direta desse problema, acentuado após as revoluções industriais, está na redução da flora, atingida pela acidificação, por isso a alternativa A está correta. B (elevação das marés), C (erosão das encostas), D (laterização dos solos) e E (fragmentação das rochas) descrevem processos que não decorrem diretamente da deposição ácida representada no esquema.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Empresa vai fornecer 230 turbinas para o segundo 
complexo de energia à base de ventos, no sudeste da 
Bahia. O Complexo Eólico Alto Sertão, em 2014, terá 
capacidade para gerar 375 MW (megawatts), total 
suficiente para abastecer uma cidade de 3 milhões 
de habitantes. 
MATOS, C. GE busca bons ventos e fecha contrato de R$ 820 mi na Bahia. 
Folha de S. Paulo , 2 dez. 2012. 
A opção tecnológica retratada na notícia proporciona 
a seguinte consequência para o sistema energético 
brasileiro:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Redução da utilização elétrica.` },
      { id: 'B', type: 'text', value: `Ampliação do uso bioenergético.` },
      { id: 'C', type: 'text', value: `Expansão das fontes renováveis.` },
      { id: 'D', type: 'text', value: `Contenção da demanda urbano-industrial.` },
      { id: 'E', type: 'text', value: `Intensificação da dependência geotérmica.` },
    ],
    correct: 'C',
    explanation: `A notícia informa que o Complexo Eólico Alto Sertão, na Bahia, fornecerá energia a partir dos ventos, com capacidade para abastecer uma cidade de milhões de habitantes. A opção tecnológica retratada proporciona a expansão das fontes renováveis na matriz energética brasileira, pois a energia eólica é limpa e renovável, por isso a alternativa C está correta. A (redução da utilização elétrica) e D (contenção da demanda urbano-industrial) contrariam o aumento da oferta de energia. B fala genericamente em uso bioenergético, que não corresponde à fonte eólica, e E associa a usina à dependência geotérmica, tecnologia distinta da descrita.`,
    subject: ['geo'],
    topics: ['Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A escravidão não há de ser suprimida no Brasil por uma 
guerra servil, muito menos por insurreições ou atentados 
locais. Não deve sê-lo, tampouco, por uma guerra civil, 
como o foi nos Estados Unidos. Ela poderia desaparecer, 
talvez, depois de uma revolução, como aconteceu na 
França, sendo essa revolução obra exclusiva da população 
livre. É no Parlamento e não em fazendas ou quilombos 
do interior, nem nas ruas e praças das cidades, que se há 
de ganhar, ou perder, a causa da liberdade. 
NABUCO, J. O abolicionismo [1883]. Rio de Janeiro: Nova Fronteira; 
São Paulo: Publifolha, 2000 (adaptado). 
No texto, Joaquim Nabuco defende um projeto político 
sobre como deveria ocorrer o fim da escravidão no Brasil, 
no qual`,
    alternatives: [
      { id: 'A', type: 'text', value: `copiava o modelo haitiano de emancipação negra.` },
      { id: 'B', type: 'text', value: `incentivava a conquista de alforrias por meio de ações judiciais.` },
      { id: 'C', type: 'text', value: `optava pela via legalista de libertação.` },
      { id: 'D', type: 'text', value: `priorizava a negociação em torno das indenizações aos senhores.` },
      { id: 'E', type: 'text', value: `antecipava a libertação paternalista dos cativos.` },
    ],
    correct: 'C',
    explanation: `No trecho de O abolicionismo, Joaquim Nabuco sustenta que o fim da escravidão no Brasil não deveria ocorrer por guerra servil, insurreições ou guerra civil, como nos Estados Unidos, mas no Parlamento, e não nas fazendas ou nas ruas. Isso indica que Nabuco optava pela via legalista de libertação, por meio das instituições políticas, por isso a alternativa C está correta. A o aproxima do modelo haitiano de emancipação, e B restringe a proposta às alforrias judiciais. D a reduz à negociação de indenizações aos senhores, e E fala em libertação paternalista antecipada, caminhos que não correspondem à solução parlamentar e legal defendida.`,
    subject: ['his'],
    topics: ['Escravidão e abolição', 'Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Tenho 44 anos e presenciei uma transformação 
impressionante na condição de homens e mulheres 
gays nos Estados Unidos. Quando nasci, relações 
homossexuais eram ilegais em todos os Estados Unidos, 
menos Illinois. Gays e lésbicas não podiam trabalhar no 
governo federal. Não havia nenhum político abertamente 
gay . Alguns homossexuais não assumidos ocupavam 
posições de poder, mas a tendência era eles tornarem as 
coisas ainda piores para seus semelhantes. 
ROSS, A. Na máquina do tempo. Época , ed. 766, 28 jan. 2013. 
A dimensão política da transformação sugerida no texto 
teve como condição necessária a`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação da noção de cidadania.` },
      { id: 'B', type: 'text', value: `reformulação de concepções religiosas.` },
      { id: 'C', type: 'text', value: `manutenção de ideologias conservadoras.` },
      { id: 'D', type: 'text', value: `implantação de cotas nas listas partidárias.` },
      { id: 'E', type: 'text', value: `alteração da composição étnica da população.` },
    ],
    correct: 'A',
    explanation: `O texto relata a profunda transformação na condição de homens e mulheres gays nos Estados Unidos, que saíram da ilegalidade e da exclusão para a conquista de direitos. A dimensão política dessa mudança teve como condição necessária a ampliação da noção de cidadania, estendida a grupos antes marginalizados, por isso a alternativa A está correta. B (reformulação de concepções religiosas) e C (manutenção de ideologias conservadoras) não explicam o avanço de direitos. D (cotas nas listas partidárias) e E (alteração da composição étnica da população) tratam de medidas alheias ao processo de reconhecimento da cidadania descrito.`,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Direitos humanos', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Músculos artificiais são dispositivos feitos com plásticos
inteligentes que respondem a uma corrente elétrica com um
movimento mecânico. A oxidação e redução de um polímero
condutor criam cargas positivas e/ou negativas no material,
que são compensadas com a inserção ou expulsão de cátions ou
ânions. Por exemplo, na figura os filmes escuros são de
polipirrol e o filme branco é de um eletrólito polimérico
contendo um sal inorgânico. Quando o polipirrol sofre
oxidação, há a inserção de ânions para compensar a carga
positiva no polímero e o filme se expande. Na outra face do
dispositivo o filme de polipirrol sofre redução, expulsando
ânions, e o filme se contrai. Pela montagem, em sanduíche, o
sistema todo se movimenta de forma harmônica, conforme
mostrado na figura. - Corrente elétrica + polipirrol Ar
Eletrólito polimérico Sem corrente elétrica polipirrol Ar +
Corrente elétrica - DE PAOLI, M. A. Cadernos Temáticos de
Química Nova na Escola , São Paulo, maio 2001 (adaptado). A
camada central de eletrólito polimérico é importante porque`,
    images: ['/enem/2013/images/enem_2013_d1_q46.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `absorve a irradiação de partículas carregadas, emitidas pelo aquecimento elétrico dos filmes de polipirrol.` },
      { id: 'B', type: 'text', value: `permite a difusão dos íons promovida pela aplicação de diferença de potencial, fechando o circuito elétrico.` },
      { id: 'C', type: 'text', value: `mantém um gradiente térmico no material para promover a dilatação/contração térmica de cada filme de polipirrol.` },
      { id: 'D', type: 'text', value: `permite a condução de elétrons livres, promovida pela aplicação de diferença de potencial, gerando corrente elétrica.` },
      { id: 'E', type: 'text', value: `promove a polarização das moléculas poliméricas, o que resulta no movimento gerado pela aplicação de diferença de potencial.` },
    ],
    correct: 'B',
    explanation: `Na camada central de eletrólito polimérico ocorre a condução iônica: ao se aplicar uma diferença de potencial, os íons do sal inorgânico migram através do eletrólito, permitindo que um filme de polipirrol sofra oxidação e o outro, redução. Esse fluxo de íons fecha o circuito elétrico entre os dois filmes, completando o processo eletroquímico que faz o material expandir de um lado e contrair do outro. O eletrólito não conduz elétrons livres nem promove gradiente térmico; sua função é justamente permitir a difusão dos íons. Sem essa difusão iônica não haveria transferência interna de carga e o dispositivo não funcionaria. Portanto, a camada é importante porque permite a difusão dos íons promovida pela diferença de potencial, fechando o circuito elétrico (alternativa B).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O brasileiro consome em média 500 miligramas de 
cálcio por dia, quando a quantidade recomendada é o 
dobro. Uma alimentação balanceada é a melhor decisão 
para evitar problemas no futuro, como a osteoporose, 
uma doença que atinge os ossos. Ela se caracteriza pela 
diminuição substancial de massa óssea, tornando os 
ossos frágeis e mais suscetíveis a fraturas. 
Disponível em: www.anvisa.gov.br. Acesso em: 1 ago. 2012 (adaptado). 
Considerando-se o valor de 6 × 10²³ mol⁻¹ para a constante 
de Avogadro e a massa molar do cálcio igual a 40 g/mol, 
qual a quantidade mínima diária de átomos de cálcio a ser 
ingerida para que uma pessoa supra suas necessidades?`,
    alternatives: [
      { id: 'A', type: 'text', value: `7,5 × 10²¹` },
      { id: 'B', type: 'text', value: `1,5 × 10²²` },
      { id: 'C', type: 'text', value: `7,5 × 10²³` },
      { id: 'D', type: 'text', value: `1,5 × 10²⁵` },
      { id: 'E', type: 'text', value: `4,8 × 10²⁵` },
    ],
    correct: 'B',
    explanation: `A quantidade recomendada de cálcio é o dobro dos 500 mg consumidos, ou seja, 1000 mg = 1 g por dia. O número de mols correspondente é n = massa ÷ massa molar = 1 g ÷ 40 g/mol = 0,025 mol. Multiplicando pela constante de Avogadro: N = 0,025 mol × 6 × 10²³ átomos/mol = 1,5 × 10²² átomos. Essa é a quantidade mínima diária de átomos de cálcio necessária para suprir as necessidades. Portanto, a resposta é 1,5 × 10²² (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Em um experimento foram utilizadas duas garrafas 
PET, uma pintada de branco e a outra de preto, acopladas 
cada uma a um termômetro. No ponto médio da distância 
entre as garrafas, foi mantida acesa, durante alguns 
minutos, uma lâmpada incandescente. Em seguida a 
lâmpada  foi desligada. Durante o experimento, foram 
monitoradas as temperaturas das garrafas: a) enquanto 
a lâmpada permaneceu acesa e b) após a lâmpada ser 
desligada e atingirem equilíbrio térmico com o ambiente. 
Termômetro 
A taxa de variação da temperatura da garrafa preta, em 
comparação à da branca, durante todo experimento, foi`,
    images: ['/enem/2013/images/enem_2013_d1_q48.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `igual no aquecimento e igual no resfriamento.` },
      { id: 'B', type: 'text', value: `maior no aquecimento e igual no resfriamento.` },
      { id: 'C', type: 'text', value: `menor no aquecimento e igual no resfriamento.` },
      { id: 'D', type: 'text', value: `maior no aquecimento e menor no resfriamento.` },
      { id: 'E', type: 'text', value: `maior no aquecimento e maior no resfriamento.` },
    ],
    correct: 'E',
    explanation: `Superfícies escuras (pretas) absorvem mais radiação que as claras, de modo que, com a lâmpada acesa, a garrafa preta se aquece mais rapidamente que a branca, apresentando maior taxa no aquecimento. Pela mesma propriedade, corpos que são bons absorvedores também são bons emissores de radiação. Assim, depois que a lâmpada é desligada, a garrafa preta perde calor e resfria mais rápido que a branca, com maior taxa no resfriamento. Logo, em comparação à garrafa branca, a taxa de variação da temperatura da garrafa preta é maior no aquecimento e maior no resfriamento (alternativa E).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Glicose marcada com nuclídeos de carbono-11 é utilizada na
medicina para se obter imagens tridimensionais do cérebro, por
meio de tomografia de emissão de pósitrons. A desintegração do
carbono-11 gera um pósitron, com tempo de meia-vida de 20,4
min, de acordo com a equação da reação nuclear: A partir da
injeção de glicose marcada com esse nuclídeo, o tempo de
aquisição de uma imagem de tomografia é de cinco meias-vidas.
Considerando que o medicamento contém 1,00 g do carbono-11, a
massa, em miligramas, do nuclídeo restante, após a aquisição da
imagem, é mais próxima de`,
    images: ['/enem/2013/images/enem_2013_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,200.` },
      { id: 'B', type: 'text', value: `0,969.` },
      { id: 'C', type: 'text', value: `9,80.` },
      { id: 'D', type: 'text', value: `31,3.` },
      { id: 'E', type: 'text', value: `200.` },
    ],
    correct: 'D',
    explanation: `Após cinco meias-vidas, a fração de carbono-11 que resta é (1/2)⁵ = 1/32 da quantidade inicial. Partindo de 1,00 g de carbono-11, a massa restante é 1,00 g ÷ 32 = 0,03125 g. Convertendo para miligramas: 0,03125 g × 1000 = 31,25 mg, valor próximo de 31,3 mg. Portanto, a massa do nuclídeo restante após a aquisição da imagem é de aproximadamente 31,3 (alternativa D).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Milhares de pessoas estavam morrendo de varíola 
humana no final do século XVIII. Em 1796, o médico 
Edward Jenner (1749-1823) inoculou em um menino de 
8 anos o pus extraído de feridas de vacas contaminadas 
com o vírus da varíola bovina, que causa uma doença 
branda em humanos. O garoto contraiu uma infecção 
benigna e, dez dias depois, estava recuperado. Meses 
depois, Jenner inoculou, no mesmo menino, o pus 
varioloso humano, que causava muitas mortes. O menino 
não adoeceu. 
Disponível em: www.bbc.co.uk. Acesso em: 5 dez. 2012 (adaptado). 
Considerando o resultado do experimento, qual a 
contribuição desse médico para a saúde humana?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `A prevenção de diversas doenças infectocontagiosas em todo o mundo.` },
      { id: 'B', type: 'text', value: `A compreensão de que vírus podem se multiplicar em matéria orgânica.` },
      { id: 'C', type: 'text', value: `O tratamento para muitas enfermidades que acometem milhões de pessoas.` },
      { id: 'D', type: 'text', value: `O estabelecimento da ética na utilização de crianças em modelos experimentais.` },
      { id: 'E', type: 'text', value: `A explicação de que alguns vírus de animais podem ser transmitidos para os humanos.` },
    ],
    correct: 'A',
    explanation: `Jenner observou que o contato com o pus da varíola bovina, doença branda, protegia o menino contra a varíola humana, grave e mortal, sem que ele adoecesse. Esse procedimento é a base da vacinação: expor o organismo a um agente semelhante ou atenuado induz imunidade contra a doença grave. A grande contribuição foi, portanto, a possibilidade de prevenir doenças infectocontagiosas por meio da imunização, aplicável a diversas enfermidades no mundo todo. As demais opções não traduzem a contribuição central do experimento. Logo, a resposta é a prevenção de diversas doenças infectocontagiosas em todo o mundo (alternativa A).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Química Verde pode ser definida como a criação, o 
desenvolvimento e a aplicação de produtos e processos 
químicos para reduzir ou eliminar o uso e a geração de 
substâncias nocivas à saúde humana e ao ambiente. 
Sabe-se que algumas fontes energéticas desenvolvidas 
pelo homem exercem, ou têm potencial para exercer, em 
algum nível, impactos ambientais negativos. 
CORRÊA, A. G.; ZUIN, V. G. (Orgs.). Química Verde : fundamentos e aplicações. 
São Carlos: EdUFSCar, 2009. 
À luz da Química Verde, métodos devem ser 
desenvolvidos para eliminar ou reduzir a poluição do ar 
causada especialmente pelas`,
    alternatives: [
      { id: 'A', type: 'text', value: `hidrelétricas.` },
      { id: 'B', type: 'text', value: `termelétricas.` },
      { id: 'C', type: 'text', value: `usinas geotérmicas.` },
      { id: 'D', type: 'text', value: `fontes de energia solar.` },
      { id: 'E', type: 'text', value: `fontes de energia eólica.` },
    ],
    correct: 'B',
    explanation: `A Química Verde busca reduzir a poluição, e a questão pede a fonte de energia responsável especialmente pela poluição do ar. As usinas termelétricas geram eletricidade queimando combustíveis fósseis (carvão, óleo, gás), liberando na atmosfera gases poluentes como CO₂, SO₂ e óxidos de nitrogênio. As demais fontes citadas — hidrelétrica, geotérmica, solar e eólica — são limpas ou de baixo impacto sobre a qualidade do ar. Portanto, a poluição do ar a ser eliminada está associada principalmente às termelétricas (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Em viagens de avião, é solicitado aos passageiros o
desligamento de todos os aparelhos cujo funcionamento envolva
a emissão ou a recepção de ondas eletromagnéticas. O
procedimento é utilizado para eliminar fontes de radiação que
possam interferir nas comunicações via rádio dos pilotos com a
torre de controle. A propriedade das ondas emitidas que
justifica o procedimento adotado é o fato de`,
    alternatives: [
      { id: 'A', type: 'text', value: `terem fases opostas.` },
      { id: 'B', type: 'text', value: `serem ambas audíveis.` },
      { id: 'C', type: 'text', value: `terem intensidades inversas.` },
      { id: 'D', type: 'text', value: `serem de mesma amplitude.` },
      { id: 'E', type: 'text', value: `terem frequências próximas.` },
    ],
    correct: 'E',
    explanation: `O procedimento consiste em desligar aparelhos que emitem ou recebem ondas eletromagnéticas para evitar interferência na comunicação por rádio entre os pilotos e a torre. A interferência ocorre quando as ondas têm frequências próximas, pois se sobrepõem na mesma faixa e perturbam o sinal útil. Se as frequências fossem muito diferentes, não haveria sobreposição significativa e a comunicação não seria afetada. Por isso, o procedimento se justifica pelo fato de as ondas emitidas pelos aparelhos terem frequências próximas às usadas na comunicação (alternativa E).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `As serpentes que habitam regiões de seca podem ficar em jejum
por um longo período de tempo devido à escassez de alimento.
Assim, a sobrevivência desses predadores está relacionada ao
aproveitamento máximo dos nutrientes obtidos com a presa
capturada. De acordo com essa situação, essas serpentes
apresentam alterações morfológicas e fisiológicas, como o
aumento das vilosidades intestinais e a intensificação da
irrigação sanguínea na porção interna dessas estruturas. A
função do aumento das vilosidades intestinais para essas
serpentes é maximizar o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `comprimento do trato gastrointestinal para caber mais alimento.` },
      { id: 'B', type: 'text', value: `área de contato com o conteúdo intestinal para absorção dos nutrientes.` },
      { id: 'C', type: 'text', value: `liberação de calor via irrigação sanguínea para controle térmico do sistema digestório.` },
      { id: 'D', type: 'text', value: `secreção de enzimas digestivas para aumentar a degradação proteica no estômago.` },
      { id: 'E', type: 'text', value: `processo de digestão para diminuir o tempo de permanência do alimento no intestino.` },
    ],
    correct: 'B',
    explanation: `O aumento das vilosidades intestinais amplia a superfície interna do intestino. Uma superfície maior significa maior área de contato entre a parede intestinal e o alimento digerido, favorecendo a absorção dos nutrientes. Como essas serpentes passam longos períodos em jejum, aproveitar ao máximo os nutrientes de cada presa é vantajoso para a sobrevivência. As vilosidades não aumentam o comprimento do trato nem servem para controle térmico ou secreção de enzimas no estômago. Portanto, a função é maximizar a área de contato com o conteúdo intestinal para absorção dos nutrientes (alternativa B).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O uso de embalagens plásticas descartáveis vem crescendo em
todo o mundo, juntamente com o problema ambiental gerado por
seu descarte inapropriado. O politereftalato de etileno (PET),
cuja estrutura é mostrada, tem sido muito utilizado na
indústria de refrigerantes e pode ser reciclado e reutilizado.
Uma das opções possíveis envolve a produção de
matérias-primas, como o etilenoglicol (1,2-etanodiol), a
partir de objetos compostos de PET pós-consumo. O O HO C C O
CH₂CH₂ O H n Disponível em: www.abipet.org.br. Acesso em: 27
fev. 2012 (adaptado). Com base nas informações do texto, uma
alternativa para a obtenção de etilenoglicol a partir do PET é
a`,
    images: ['/enem/2013/images/enem_2013_d1_q54.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `solubilização dos objetos.` },
      { id: 'B', type: 'text', value: `combustão dos objetos.` },
      { id: 'C', type: 'text', value: `trituração dos objetos.` },
      { id: 'D', type: 'text', value: `hidrólise dos objetos.` },
      { id: 'E', type: 'text', value: `fusão dos objetos.` },
    ],
    correct: 'D',
    explanation: `O etilenoglicol (1,2-etanodiol) é um dos reagentes de partida do PET, incorporado à cadeia do poliéster por ligações éster. Para recuperá-lo a partir do PET pós-consumo é preciso romper essas ligações éster, o que se faz por hidrólise, reação em que a água quebra a ligação éster, regenerando o álcool (etilenoglicol) e o ácido correspondente. Processos como solubilização, trituração e fusão apenas mudam o estado físico, sem liberar o monômero, e a combustão destruiria a molécula. Portanto, a obtenção de etilenoglicol envolve a hidrólise dos objetos de PET (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A pílula anticoncepcional é um dos métodos 
contraceptivos de maior segurança, sendo constituída 
basicamente de dois hormônios sintéticos semelhantes 
aos hormônios produzidos pelo organismo feminino, o 
estrogênio (E) e a progesterona (P). Em um experimento 
médico, foi analisado o sangue de uma mulher que ingeriu 
ininterruptamente um comprimido desse medicamento 
por dia durante seis meses. 
Qual gráfico representa a concentração sanguínea 
desses hormônios durante o período do experimento? 
Concentração sanguínea`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2013/images/enem_2013_d1_q55_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2013/images/enem_2013_d1_q55_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2013/images/enem_2013_d1_q55_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2013/images/enem_2013_d1_q55_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2013/images/enem_2013_d1_q55_E.jpg` },
    ],
    correct: 'A',
    explanation: `A mulher ingeriu o anticoncepcional de forma contínua, um comprimido por dia, durante seis meses, mantendo constante a dose diária dos hormônios sintéticos. Com uma administração regular e ininterrupta, as concentrações sanguíneas de estrogênio (E) e progesterona (P) permanecem aproximadamente estáveis ao longo de todo o período. O gráfico correto deve, então, mostrar duas linhas horizontais, indicando concentrações constantes de E e de P. Portanto, a resposta é a alternativa A, que apresenta as concentrações dos dois hormônios constantes no tempo.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A imagem representa uma ilustração retirada do 
livro De Motu Cordis , de autoria do médico inglês 
Willian Harvey, que fez importantes contribuições para o 
entendimento do processo de circulação do sangue no 
corpo humano. No experimento ilustrado, Harvey, após 
aplicar um torniquete (A) no braço de um voluntário e 
esperar alguns vasos incharem, pressionava-os em um 
ponto (H). Mantendo o ponto pressionado, deslocava o 
conteúdo de sangue em direção ao cotovelo, percebendo 
que um trecho do vaso sanguíneo permanecia vazio após 
esse processo (H⁻O). 
Disponível em: www.answers.com. Acesso em: 18 dez. 2012 (adaptado). 
A demonstração de Harvey permite estabelecer a relação 
entre circulação sanguínea e`,
    images: ['/enem/2013/images/enem_2013_d1_q56.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `pressão arterial.` },
      { id: 'B', type: 'text', value: `válvulas venosas.` },
      { id: 'C', type: 'text', value: `circulação linfática.` },
      { id: 'D', type: 'text', value: `contração cardíaca.` },
      { id: 'E', type: 'text', value: `transporte de gases.` },
    ],
    correct: 'B',
    explanation: `Ao comprimir o vaso e deslocar o sangue em direção ao cotovelo, Harvey observou que o trecho esvaziado permanecia vazio, pois o sangue não retornava. Isso mostra que, nas veias, o sangue flui em sentido único, sendo impedido de voltar por estruturas internas: as válvulas venosas. Essas válvulas garantem o fluxo unidirecional do sangue de volta ao coração. A demonstração relaciona, assim, a circulação sanguínea ao funcionamento das válvulas venosas (alternativa B).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Para realizar um experimento com uma garrafa PET 
cheia d´água, perfurou-se a lateral da garrafa em três 
posições a diferentes alturas. Com a garrafa tampada, 
a água não vazou por nenhum dos orifícios, e, com a 
garrafa destampada, observou-se o escoamento da água 
conforme ilustrado na figura. 
Como a pressão atmosférica interfere no escoamento 
da água, nas situações com a garrafa tampada e 
destampada, respectivamente?`,
    images: ['/enem/2013/images/enem_2013_d1_q57.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Impede a saída de água, por ser maior que a pressão interna; não muda a velocidade de escoamento, que só depende da pressão da coluna de água.` },
      { id: 'B', type: 'text', value: `Impede a saída de água, por ser maior que a pressão interna; altera a velocidade de escoamento, que é proporcional à pressão atmosférica na altura do furo.` },
      { id: 'C', type: 'text', value: `Impede a entrada de ar, por ser menor que a pressão interna; altera a velocidade de escoamento, que é proporcional à pressão atmosférica na altura do furo.` },
      { id: 'D', type: 'text', value: `Impede a saída de água, por ser maior que a pressão interna; regula a velocidade de escoamento, que só depende da pressão atmosférica.` },
      { id: 'E', type: 'text', value: `Impede a entrada de ar, por ser menor que a pressão interna; não muda a velocidade de escoamento, que só depende da pressão da coluna de água.` },
    ],
    correct: 'A',
    explanation: `Com a garrafa tampada, o ar acima da água não se renova e a pressão atmosférica externa, maior que a pressão interna reduzida, impede a saída de água pelos furos. Com a garrafa destampada, a superfície livre fica submetida à pressão atmosférica e a água escoa, sendo a velocidade de saída dependente apenas da altura da coluna de água acima de cada furo (quanto mais fundo o furo, maior a pressão e a velocidade). Assim, na garrafa tampada a pressão atmosférica impede a saída de água por ser maior que a pressão interna; na destampada, ela não altera a velocidade de escoamento, que só depende da coluna de água. Logo, a resposta é a alternativa A.`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O citral, substância de odor fortemente cítrico, é obtido 
a partir de algumas plantas como o capim-limão, cujo óleo 
essencial possui aproximadamente 80%, em massa, da 
substância. Uma de suas aplicações é na fabricação de 
produtos que atraem abelhas, especialmente do gênero 
Apis , pois seu cheiro é semelhante a um dos feromônios 
liberados por elas. Sua fórmula molecular é C₁₀H₁₆O, com
uma cadeia alifática de oito carbonos, duas insaturações, 
nos carbonos 2 e 6; e dois grupos substituintes metila, nos 
carbonos 3 e 7. O citral possui dois isômeros geométricos, 
sendo o trans o que mais contribui para o forte odor. 
Para que se consiga atrair um maior número de abelhas 
para uma determinada região, a molécula que deve estar 
presente em alta concentração no produto a ser utilizado é: 
O`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2013/images/enem_2013_d1_q58_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2013/images/enem_2013_d1_q58_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2013/images/enem_2013_d1_q58_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2013/images/enem_2013_d1_q58_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2013/images/enem_2013_d1_q58_E.jpg` },
    ],
    correct: 'A',
    explanation: `O citral tem cadeia de oito carbonos, com insaturações nos carbonos 2 e 6 e metilas nos carbonos 3 e 7, terminando em grupo aldeído. O isômero que mais contribui para o odor é o trans (E), referente à dupla ligação próxima ao grupo aldeído, no carbono 2. Na configuração trans dessa dupla 2–3, os grupos de maior prioridade ligados aos carbonos ficam em lados opostos. Entre as estruturas apresentadas, apenas a da alternativa A representa essa configuração trans na dupla do carbono 2, mantendo corretas as metilas e as insaturações. Portanto, a molécula que deve estar em alta concentração é a da alternativa A.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Plantas terrestres que ainda estão em fase de 
crescimento fixam grandes quantidades de CO₂ , 
utilizando-o para formar novas moléculas orgânicas, 
e liberam grande quantidade de O₂ . No entanto, 
em florestas maduras, cujas árvores já atingiram o 
equilíbrio, o consumo de O₂ pela respiração tende a 
igualar sua produção pela fotossíntese. A morte natural 
de árvores nessas florestas afeta temporariamente a 
concentração de O₂ e de CO₂ próximo à superfície do 
solo onde elas caíram. 
A concentração de O₂ próximo ao solo, no local da 
queda, será`,
    alternatives: [
      { id: 'A', type: 'text', value: `menor, pois haverá consumo de O₂ durante a decomposição dessas árvores.` },
      { id: 'B', type: 'text', value: `maior, pois haverá economia de O₂ pela ausência das árvores mortas.` },
      { id: 'C', type: 'text', value: `maior, pois haverá liberação de O₂ durante a fotossíntese das árvores jovens.` },
      { id: 'D', type: 'text', value: `igual, pois haverá consumo e produção de O₂ pelas árvores maduras restantes.` },
      { id: 'E', type: 'text', value: `menor, pois haverá redução de O₂ pela falta da fotossíntese realizada pelas árvores mortas.` },
    ],
    correct: 'A',
    explanation: `Em florestas maduras, o consumo de O₂ pela respiração se iguala à produção pela fotossíntese, mantendo o equilíbrio gasoso. Quando árvores morrem e caem, seus restos são decompostos por microrganismos, processo que consome oxigênio na respiração aeróbia dos decompositores. Próximo ao solo, onde se acumula essa matéria morta, o consumo de O₂ pela decomposição faz sua concentração diminuir. Portanto, a concentração de O₂ no local da queda será menor, pois haverá consumo de O₂ durante a decomposição dessas árvores (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `As fêmeas de algumas espécies de aranhas, 
escorpiões e de outros invertebrados predam 
os machos após a cópula e inseminação. Como 
exemplo, fêmeas canibais do inseto conhecido como 
louva-a-deus, Tenodera aridofolia , possuem até 63% 
da sua dieta composta por machos parceiros. Para 
as fêmeas, o canibalismo sexual pode assegurar a 
obtenção de nutrientes importantes na reprodução. 
Com esse incremento na dieta, elas geralmente 
produzem maior quantidade de ovos. 
BORGES, J. C. Jogo mortal . Disponível em: http://cienciahoje.uol.com.br. 
Acesso em: 1 mar. 2012 (adaptado). 
Apesar de ser um comportamento aparentemente 
desvantajoso para os machos, o canibalismo sexual 
evoluiu nesses táxons animais porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `promove a maior ocupação de diferentes nichos ecológicos pela espécie.` },
      { id: 'B', type: 'text', value: `favorece o sucesso reprodutivo individual de ambos os parentais.` },
      { id: 'C', type: 'text', value: `impossibilita a transmissão de genes do macho para a prole.` },
      { id: 'D', type: 'text', value: `impede a sobrevivência e reprodução futura do macho.` },
      { id: 'E', type: 'text', value: `reduz a variabilidade genética da população.` },
    ],
    correct: 'B',
    explanation: `O canibalismo sexual fornece à fêmea nutrientes que aumentam a produção de ovos, elevando o número de descendentes gerados. Como o macho canibalizado é o pai desses descendentes, seu sacrifício aumenta também o número de filhotes que carregam os genes dele. Dessa forma, o comportamento favorece o sucesso reprodutivo tanto da fêmea quanto do macho, ou seja, de ambos os parentais, o que explica sua manutenção pela seleção natural. Portanto, o canibalismo sexual evoluiu porque favorece o sucesso reprodutivo individual de ambos os parentais (alternativa B).`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Para oferecer acessibilidade aos portadores de 
dificuldades de locomoção, é utilizado, em ônibus e 
automóveis, o elevador hidráulico. Nesse dispositivo 
é usada uma bomba elétrica, para forçar um fluido a 
passar de uma tubulação estreita para outra mais larga, 
e dessa forma acionar um pistão que movimenta a 
plataforma. Considere um elevador hidráulico cuja área 
da cabeça do pistão seja cinco vezes maior do que a 
área da tubulação que sai da bomba. Desprezando o 
atrito e considerando uma aceleração gravitacional de 
10 m/s² , deseja-se elevar uma pessoa de 65 kg em uma 
cadeira de rodas de 15 kg sobre a plataforma de 20 kg. 
Qual deve ser a força exercida pelo motor da bomba 
sobre o fluido, para que o cadeirante seja elevado com 
velocidade constante?`,
    alternatives: [
      { id: 'A', type: 'text', value: `20 N` },
      { id: 'B', type: 'text', value: `100 N` },
      { id: 'C', type: 'text', value: `200 N` },
      { id: 'D', type: 'text', value: `1 000 N` },
      { id: 'E', type: 'text', value: `5 000 N` },
    ],
    correct: 'C',
    explanation: `O peso total a ser elevado corresponde à soma das massas: 65 kg (pessoa) + 15 kg (cadeira) + 20 kg (plataforma) = 100 kg, cujo peso é P = 100 × 10 = 1000 N. Pelo princípio de Pascal, a pressão é a mesma nos dois êmbolos: F_bomba ÷ A_tubulação = P ÷ A_pistão. Como a área da cabeça do pistão é cinco vezes a da tubulação (A_pistão = 5·A_tubulação), tem-se F_bomba = P × (A_tubulação ÷ A_pistão) = 1000 × (1/5) = 200 N. Portanto, a força exercida pela bomba sobre o fluido deve ser de 200 N (alternativa C).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A estratégia de obtenção de plantas transgênicas pela 
inserção de transgenes em cloroplastos, em substituição 
à metodologia clássica de inserção do transgene no 
núcleo da célula hospedeira, resultou no aumento 
quantitativo da produção de proteínas recombinantes 
com diversas finalidades biotecnológicas. O mesmo 
tipo de estratégia poderia ser utilizada para produzir 
proteínas recombinantes em células de organismos 
eucarióticos não fotossintetizantes, como as leveduras, 
que são usadas para produção comercial de várias 
proteínas recombinantes e que podem ser cultivadas em 
grandes fermentadores. 
Considerando a estratégia metodológica descrita, qual 
organela celular poderia ser utilizada para inserção de 
transgenes em leveduras?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Lisossomo.` },
      { id: 'B', type: 'text', value: `Mitocôndria.` },
      { id: 'C', type: 'text', value: `Peroxissomo.` },
      { id: 'D', type: 'text', value: `Complexo golgiense.` },
      { id: 'E', type: 'text', value: `Retículo endoplasmático.` },
    ],
    correct: 'B',
    explanation: `A estratégia original insere os transgenes no cloroplasto, organela que possui DNA próprio e maquinaria de síntese de proteínas, herança de sua origem endossimbiótica. Em leveduras, que não têm cloroplastos, a organela equivalente — também com DNA próprio, dupla membrana e origem endossimbiótica — é a mitocôndria. Por isso, ela poderia receber os transgenes de modo análogo ao cloroplasto. Lisossomo, peroxissomo, complexo golgiense e retículo endoplasmático não possuem genoma próprio. Portanto, a organela utilizada seria a mitocôndria (alternativa B).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `No Brasil, cerca de 80% da energia elétrica advém 
de hidrelétricas, cuja construção implica o represamento 
de rios. A formação de um reservatório para esse 
fim, por sua vez, pode modificar a ictiofauna local. 
Um exemplo é o represamento do Rio Paraná, onde 
se observou o desaparecimento de peixes cascudos 
quase que simultaneamente ao aumento do número 
de peixes de espécies exóticas introduzidas, como 
o mapará e a corvina, as três espécies com nichos 
ecológicos semelhantes. 
PETESSE, M. L.; PETRERE JR., M. Ciência Hoje , São Paulo, n. 293, v. 49, jun. 2012 (adaptado). 
Nessa modificação da ictiofauna, o desaparecimento de 
cascudos é explicado pelo(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução do fluxo gênico da espécie nativa.` },
      { id: 'B', type: 'text', value: `diminuição da competição intraespecífica.` },
      { id: 'C', type: 'text', value: `aumento da  competição interespecífica.` },
      { id: 'D', type: 'text', value: `isolamento geográfico dos peixes.` },
      { id: 'E', type: 'text', value: `extinção de nichos ecológicos.` },
    ],
    correct: 'C',
    explanation: `O represamento do Rio Paraná introduziu espécies exóticas, como o mapará e a corvina, com nichos ecológicos semelhantes ao dos cascudos nativos. Espécies com exigências parecidas pelos mesmos recursos competem entre si; como pertencem a espécies diferentes, trata-se de competição interespecífica. As espécies introduzidas levaram vantagem nessa disputa, causando o desaparecimento dos cascudos. Portanto, o desaparecimento dos cascudos é explicado pelo aumento da competição interespecífica (alternativa C).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Uma das etapas do tratamento da água é a 
desinfecção, sendo a cloração o método mais empregado. 
Esse método consiste na dissolução do gás cloro 
numa solução sob pressão e sua aplicação na água a 
ser desinfectada. As equações das reações químicas 
envolvidas são: 
Cl₂ (g) + 2 H₂O (l) ⇌ HClO (aq) + H₃O⁺ (aq) + Cl⁻ (aq)
HClO (aq) + H₂O (l) ⇌ H₃O⁺ (aq) + ClO⁻ (aq)   pKa = −log Ka = 7,53
A ação desinfetante é controlada pelo ácido 
hipocloroso, que possui um potencial de desinfecção 
cerca de 80 vezes superior ao ânion hipoclorito. O pH do 
meio é importante, porque influencia na extensão com 
que o ácido hipocloroso se ioniza. 
Para que a desinfecção seja mais efetiva, o pH da água a 
ser tratada deve estar mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `0.` },
      { id: 'B', type: 'text', value: `5.` },
      { id: 'C', type: 'text', value: `7.` },
      { id: 'D', type: 'text', value: `9.` },
      { id: 'E', type: 'text', value: `14.` },
    ],
    correct: 'B',
    explanation: `A ação desinfetante deve-se principalmente ao ácido hipocloroso (HClO), forma não ionizada cerca de 80 vezes mais eficiente que o íon hipoclorito (ClO⁻). No equilíbrio HClO ⇌ H₃O⁺ + ClO⁻, com pKa = 7,53, um meio mais ácido (pH baixo) significa maior concentração de H⁺, que desloca o equilíbrio para a esquerda, favorecendo a forma HClO. Assim, para maximizar o HClO e tornar a desinfecção mais efetiva, o pH deve ficar abaixo do pKa, ou seja, mais próximo de 5. Dos valores oferecidos, 5 é o único nitidamente ácido e abaixo do pKa. Portanto, o pH deve estar mais próximo de 5 (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Uma manifestação comum das torcidas em estádios 
de futebol é a ola mexicana. Os espectadores de uma 
linha, sem sair do lugar e sem se deslocarem lateralmente, 
ficam de pé e se sentam, sincronizados com os da linha 
adjacente. O efeito coletivo se propaga pelos espectadores 
do estádio, formando uma onda progressiva, conforme 
ilustração. 
Calcula-se que a velocidade de propagação dessa 
“onda humana” é 45 km/h, e que cada período de 
oscilação contém 16 pessoas, que se levantam e sentam 
organizadamente e distanciadas entre si por 80 cm. 
Disponível em: www.ufsm.br. Acesso em: 7 dez. 2012 (adaptado). 
Nessa ola mexicana, a frequência da onda, em hertz, é 
um valor mais próximo de`,
    images: ['/enem/2013/images/enem_2013_d1_q65.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,3.` },
      { id: 'B', type: 'text', value: `0,5.` },
      { id: 'C', type: 'text', value: `1,0.` },
      { id: 'D', type: 'text', value: `1,9.` },
      { id: 'E', type: 'text', value: `3,7.` },
    ],
    correct: 'C',
    explanation: `A velocidade da onda é v = 45 km/h = 45 ÷ 3,6 = 12,5 m/s. Um período, que corresponde a um comprimento de onda, contém 16 pessoas espaçadas de 0,80 m, logo λ = 16 × 0,80 = 12,8 m. A frequência é f = v ÷ λ = 12,5 ÷ 12,8 ≈ 0,98 Hz, valor mais próximo de 1,0 Hz. Portanto, a frequência da onda é mais próxima de 1,0 (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Para serrar ossos e carnes congeladas, um açougueiro utiliza
uma serra de fita que possui três polias e um motor. O
equipamento pode ser montado de duas formas diferentes, P e Q.
Por questão de segurança, é necessário que a serra possua
menor velocidade linear. Serra de fita Serra de fita Polia 3
Polia 3 Polia 2 Polia 2 Motor Motor Polia 1 Polia 1 Correia
Correia Montagem P Montagem Q Por qual montagem o açougueiro
deve optar e qual a justificativa desta opção?`,
    images: ['/enem/2013/images/enem_2013_d1_q66.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Q, pois as polias 1 e 3 giram com velocidades lineares iguais em pontos periféricos e a que tiver maior raio terá menor frequência.` },
      { id: 'B', type: 'text', value: `Q, pois as polias 1 e 3 giram com frequências iguais e a que tiver maior raio terá menor velocidade linear em um ponto periférico.` },
      { id: 'C', type: 'text', value: `P, pois as polias 2 e 3 giram com frequências diferentes e a que tiver maior raio terá menor velocidade linear em um ponto periférico.` },
      { id: 'D', type: 'text', value: `P, pois as polias 1 e 2 giram com diferentes velocidades lineares em pontos periféricos e a que tiver menor raio terá maior frequência.` },
      { id: 'E', type: 'text', value: `Q, pois as polias 2 e 3 giram com diferentes velocidades lineares em pontos periféricos e a que tiver maior raio terá menor frequência.` },
    ],
    correct: 'A',
    explanation: `As polias 1 e 3 são ligadas pela correia, de modo que pontos em suas periferias têm a mesma velocidade linear (igual à da correia). Para cada polia vale v = ω·R = 2π·f·R; assim, com a mesma velocidade periférica, a polia de maior raio gira com menor frequência de rotação. Como a serra de fita deve ter a menor velocidade linear, por segurança, ela fica acoplada à polia de maior raio. Essas condições correspondem à montagem Q, em que as polias 1 e 3 têm velocidades lineares iguais nos pontos periféricos e a de maior raio tem menor frequência. Portanto, a resposta é a alternativa A.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Sabe-se que o aumento da concentração de gases como
CO₂, CH₄ e N₂O na atmosfera é um dos fatores responsáveis
pelo agravamento do efeito estufa. A agricultura é uma das 
atividades humanas que pode contribuir tanto para a emissão 
quanto para o sequestro desses gases, dependendo do 
manejo da matéria orgânica do solo. 
ROSA, A. H.; COELHO, J. C. R. Cadernos Temáticos de Química Nova na Escola , 
São Paulo, n. 5, nov. 2003 (adaptado). 
De que maneira as práticas agrícolas podem ajudar a 
minimizar o agravamento do efeito estufa?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Evitando a rotação de culturas.` },
      { id: 'B', type: 'text', value: `Liberando o CO₂ presente no solo.` },
      { id: 'C', type: 'text', value: `Aumentando a quantidade de matéria orgânica do solo.` },
      { id: 'D', type: 'text', value: `Queimando a matéria orgânica que se deposita no solo.` },
      { id: 'E', type: 'text', value: `Atenuando a concentração de resíduos vegetais do solo.` },
    ],
    correct: 'C',
    explanation: `O efeito estufa é agravado pelo acúmulo de gases como CO₂ na atmosfera, de modo que sequestrar carbono significa retirá-lo do ar e fixá-lo. A matéria orgânica do solo é um grande reservatório de carbono: ao aumentá-la, mais carbono fica armazenado no solo em vez de retornar à atmosfera como CO₂. Práticas que queimam ou reduzem essa matéria orgânica liberam carbono e agravam o efeito estufa. Portanto, a prática agrícola que ajuda a minimizar o efeito estufa é aumentar a quantidade de matéria orgânica do solo (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O glifosato (C₃H₈NO₅P) é um herbicida pertencente ao grupo
químico das glicinas, classificado como não seletivo. Esse
composto possui os grupos funcionais carboxilato, amino e
fosfonato. A degradação do glifosato no solo é muito rápida e
realizada por grande variedade de microrganismos, que usam o
produto como fonte de energia e fósforo. Os produtos da
degradação são o ácido aminometilfosfônico (AMPA) e o
N-metilglicina (sarcosina): Glifosato H₂N O O P H₃C NH OH OH
OH Sarcosina AMPA AMARANTE JR., O. P. et al. Química Nova ,
São Paulo, v. 25, n. 3, 2002 (adaptado). A partir do texto e
dos produtos de degradação apresentados, a estrutura química
que representa o glifosato é:`,
    images: ['/enem/2013/images/enem_2013_d1_q68.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2013/images/enem_2013_d1_q68_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2013/images/enem_2013_d1_q68_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2013/images/enem_2013_d1_q68_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2013/images/enem_2013_d1_q68_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2013/images/enem_2013_d1_q68_E.jpg` },
    ],
    correct: 'B',
    explanation: `Ao se degradar, o glifosato origina os dois produtos mostrados: a sarcosina (CH₃–NH–CH₂–COOH) e o AMPA (H₂N–CH₂–PO(OH)₂). Combinando as porções desses fragmentos, a molécula do glifosato é a N-(fosfonometil)glicina, HOOC–CH₂–NH–CH₂–PO(OH)₂, que contém simultaneamente o grupo ácido carboxílico (da glicina), a amina secundária (–NH–) e o grupo fosfonato. A estrutura que reúne um grupo ácido carboxílico ligado a –CH₂–NH–CH₂– e, a este, um grupo –PO(OH)₂ é a da alternativa B. Portanto, a resposta é a alternativa B.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A formação frequente de grandes volumes de pirita 
(FeS₂) em uma variedade de depósitos minerais favorece
a formação de soluções ácidas ferruginosas, conhecidas 
como “drenagem ácida de minas”. Esse fenômeno tem 
sido bastante pesquisado pelos cientistas e representa 
uma grande preocupação entre os impactos da mineração 
no ambiente. Em contato com oxigênio, a 25 °C, a pirita 
sofre reação, de acordo com a equação química: 
4 FeS₂ (s) + 15 O₂ (g) + 2 H₂ O (l) → 2 Fe₂(SO₄)₃ (aq) + 2 H₂ SO₄ (aq) 
FIGUEIREDO, B. R. Minérios e ambiente . Campinas: Unicamp, 2000. 
Para corrigir os problemas ambientais causados por 
essa drenagem, a substância mais recomendada a ser 
adicionada ao meio é o`,
    alternatives: [
      { id: 'A', type: 'text', value: `sulfeto de sódio.` },
      { id: 'B', type: 'text', value: `cloreto de amônio.` },
      { id: 'C', type: 'text', value: `dióxido de enxofre.` },
      { id: 'D', type: 'text', value: `dióxido de carbono.` },
      { id: 'E', type: 'text', value: `carbonato de cálcio.` },
    ],
    correct: 'E',
    explanation: `A oxidação da pirita (FeS₂) em contato com O₂ e água produz ácido sulfúrico (H₂SO₄), responsável pela drenagem ácida de minas, conforme a equação dada. Para corrigir essa acidez, deve-se adicionar uma substância básica capaz de neutralizar o ácido. O carbonato de cálcio (CaCO₃, calcário) é uma base que reage com o H₂SO₄, neutralizando-o e elevando o pH do meio. As demais opções (sulfeto de sódio, cloreto de amônio, dióxido de enxofre e dióxido de carbono) não fazem essa neutralização de forma adequada. Portanto, a substância mais recomendada é o carbonato de cálcio (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Cinco casais alegavam ser os pais de um bebê. A confirmação da
paternidade foi obtida pelo exame de DNA. O resultado do teste
está esquematizado na figura, em que cada casal apresenta um
padrão com duas bandas de DNA (faixas, uma para o suposto pai
e outra para a suposta mãe), comparadas à do bebê. 1 2 3 4 5
Bebê Pai Mãe Pai Mãe Pai Mãe Pai Mãe Pai Mãe Que casal pode
ser considerado como pais biológicos do bebê?`,
    images: ['/enem/2013/images/enem_2013_d1_q70.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'C',
    explanation: `No teste de DNA, cada banda do bebê deve ter origem em um dos pais biológicos, pois metade do material genético vem do pai e metade da mãe. O casal verdadeiro é aquele cujos padrões de bandas, somados, reproduzem todas as faixas presentes no bebê. Analisando os cinco casais, apenas no casal 3 cada banda do bebê aparece no suposto pai ou na suposta mãe. Portanto, o casal 3 pode ser considerado os pais biológicos do bebê (alternativa C).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A varfarina é um fármaco que diminui a agregação plaquetária,
e por isso é utilizada como anticoagulante, desde que esteja
presente no plasma, com uma concentração superior a 1,0 mg/L.
Entretanto, concentrações plasmáticas superiores a 4,0 mg/L
podem desencadear hemorragias. As moléculas desse fármaco
ficam retidas no espaço intravascular e dissolvidas
exclusivamente no plasma, que representa aproximadamente 60%
do sangue em volume. Em um medicamento, a varfarina é
administrada por via intravenosa na forma de solução aquosa,
com concentração de 3,0 mg/mL. Um indivíduo adulto, com volume
sanguíneo total de 5,0 L, será submetido a um tratamento com
solução injetável desse medicamento. Qual é o máximo volume da
solução do medicamento que pode ser administrado a esse
indivíduo, pela via intravenosa, de maneira que não ocorram
hemorragias causadas pelo anticoagulante?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,0 mL` },
      { id: 'B', type: 'text', value: `1,7 mL` },
      { id: 'C', type: 'text', value: `2,7 mL` },
      { id: 'D', type: 'text', value: `4,0 mL` },
      { id: 'E', type: 'text', value: `6,7 mL` },
    ],
    correct: 'D',
    explanation: `O medicamento se distribui exclusivamente no plasma, que corresponde a 60% dos 5,0 L de sangue, ou seja, V_plasma = 0,60 × 5,0 = 3,0 L. A concentração plasmática não pode ultrapassar 4,0 mg/L, logo a massa máxima de varfarina admissível no plasma é m = 4,0 mg/L × 3,0 L = 12 mg. Como a solução injetável tem concentração de 3,0 mg/mL, o volume máximo que pode ser administrado é V = 12 mg ÷ 3,0 mg/mL = 4,0 mL. Portanto, o volume máximo da solução é 4,0 mL (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Um eletricista analisa o diagrama de uma instalação elétrica
residencial para planejar medições de tensão e corrente em uma
cozinha. Nesse ambiente existem uma geladeira (G), uma tomada
(T) e uma lâmpada (L), conforme a figura. O eletricista deseja
medir a tensão elétrica aplicada à geladeira, a corrente total
e a corrente na lâmpada. Para isso, ele dispõe de um
voltímetro (V) e dois amperímetros (A). Para
realizar essas medidas, o esquema da ligação desses
instrumentos está representado em:`,
    images: ['/enem/2013/images/enem_2013_d1_q72.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2013/images/enem_2013_d1_q72_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2013/images/enem_2013_d1_q72_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2013/images/enem_2013_d1_q72_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2013/images/enem_2013_d1_q72_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2013/images/enem_2013_d1_q72_E.jpg` },
    ],
    correct: 'E',
    explanation: `Para medir a tensão aplicada à geladeira, o voltímetro deve ser ligado em paralelo com a geladeira (G). Para medir a corrente total, um amperímetro deve ser inserido em série no ramo principal da instalação (na entrada), por onde passa toda a corrente que alimenta os três aparelhos. Para medir a corrente na lâmpada, o outro amperímetro deve ficar em série apenas com a lâmpada (L). O esquema que mostra o voltímetro em paralelo com G, um amperímetro em série no circuito principal e outro em série com L corresponde à alternativa E. Portanto, a resposta é a alternativa E.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: ``,
    images: ['/enem/2013/images/enem_2013_d1_q73.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'A',
    explanation: `Os polímeros de interesse são substâncias secretadas no meio de cultura, e a organela responsável pelo empacotamento e exportação de secreções é o complexo golgiense. Logo, a linhagem mais produtiva é a que possui a maior proporção de complexo golgiense. Pela tabela, a Linhagem I tem 50% de complexo golgiense, a maior entre todas as linhagens. Portanto, a melhor linhagem para obter maior rendimento de polímeros secretados é a Linhagem I (alternativa A).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Eu também podia decompor a água, se fosse 
salgada ou acidulada, usando a pilha de Daniell 
como fonte de força. Lembro o prazer extraordinário 
que sentia ao decompor um pouco de água em uma 
taça para ovos quentes, vendo-a separar-se em seus 
elementos, o oxigênio em um eletrodo, o hidrogênio no 
outro. A eletricidade de uma pilha de 1 volt parecia tão 
fraca, e no entanto podia ser suficiente para desfazer 
um composto químico, a água... 
SACKS, O. Tio Tungstênio : memórias de uma infância química. 
São Paulo: Cia. das Letras, 2002. 
O fragmento do romance de Oliver Sacks relata a 
separação dos elementos que compõem a água. 
O princípio do método apresentado é utilizado 
industrialmente na`,
    alternatives: [
      { id: 'A', type: 'text', value: `obtenção de ouro a partir de pepitas.` },
      { id: 'B', type: 'text', value: `obtenção de calcário a partir de rochas.` },
      { id: 'C', type: 'text', value: `obtenção de alumínio a partir da bauxita.` },
      { id: 'D', type: 'text', value: `obtenção de ferro a partir de seus óxidos.` },
      { id: 'E', type: 'text', value: `obtenção de amônia a partir de hidrogênio e nitrogênio.` },
    ],
    correct: 'C',
    explanation: `A decomposição da água por eletricidade descrita por Oliver Sacks é a eletrólise, processo em que a corrente elétrica provoca reações de oxirredução não espontâneas. Industrialmente, esse mesmo princípio é usado na obtenção de alumínio a partir da bauxita (alumina), em que o íon Al³⁺ é reduzido a alumínio metálico por eletrólise. As demais opções — ouro de pepitas, calcário de rochas, ferro de óxidos por redução com carbono e amônia por síntese catalítica — não têm a eletrólise como etapa central. Portanto, o princípio é aplicado na obtenção de alumínio a partir da bauxita (alternativa C).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `O chuveiro elétrico é um dispositivo capaz de 
transformar energia elétrica em energia térmica, o 
que possibilita a elevação da temperatura da água. 
Um chuveiro projetado para funcionar em 110 V pode 
ser adaptado para funcionar em 220 V, de modo a 
manter inalterada sua potência. 
Uma das maneiras de fazer essa adaptação é trocar 
a resistência do chuveiro por outra, de mesmo 
material e com o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `dobro do comprimento do fio.` },
      { id: 'B', type: 'text', value: `metade do comprimento do fio.` },
      { id: 'C', type: 'text', value: `metade da área da seção reta do fio.` },
      { id: 'D', type: 'text', value: `quádruplo da área da seção reta do fio.` },
      { id: 'E', type: 'text', value: `quarta parte da área da seção reta do fio.` },
    ],
    correct: 'E',
    explanation: `A potência do chuveiro é dada por P = U²/R; para mantê-la constante ao passar de 110 V para 220 V, a tensão dobra e U² quadruplica, de modo que a resistência deve ficar quatro vezes maior. Como R = ρ·L/A, mantendo-se o mesmo material (mesmo ρ) e o mesmo comprimento (L), quadruplicar R exige reduzir a área da seção reta a um quarto, pois R = ρ·L/(A/4) = 4·ρ·L/A. Portanto, deve-se trocar a resistência por outra com a quarta parte da área da seção reta do fio (alternativa E).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Uma pessoa necessita da força de atrito em seus pés 
para se deslocar sobre uma superfície. Logo, uma pessoa 
que sobe uma rampa em linha reta será auxiliada pela 
força de atrito exercida pelo chão em seus pés. 
Em relação ao movimento dessa pessoa, quais são a 
direção e o sentido da força de atrito mencionada no texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Perpendicular ao plano e no mesmo sentido do movimento.` },
      { id: 'B', type: 'text', value: `Paralelo ao plano e no sentido contrário ao movimento.` },
      { id: 'C', type: 'text', value: `Paralelo ao plano e no mesmo sentido do movimento.` },
      { id: 'D', type: 'text', value: `Horizontal e no mesmo sentido do movimento.` },
      { id: 'E', type: 'text', value: `Vertical e sentido para cima.` },
    ],
    correct: 'C',
    explanation: `Para se deslocar, a pessoa empurra o chão para trás com os pés; pela terceira lei de Newton, o chão reage com uma força de atrito sobre os pés dirigida para frente, no sentido do movimento. Essa força de atrito é paralela à superfície (ao plano da rampa) e aponta no mesmo sentido do deslocamento, sendo justamente ela que impulsiona a pessoa rampa acima. Ela não é perpendicular ao plano nem contrária ao movimento. Portanto, a força de atrito mencionada é paralela ao plano e no mesmo sentido do movimento (alternativa C).`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A produção de aço envolve o aquecimento do minério 
de ferro, junto com carvão (carbono) e ar atmosférico 
em uma série de reações de oxirredução. O produto é 
chamado de ferro-gusa e contém cerca de 3,3% de 
carbono. Uma forma de eliminar o excesso de carbono 
é a oxidação a partir do aquecimento do ferro-gusa 
com gás oxigênio puro. Os dois principais produtos 
formados são aço doce (liga de ferro com teor de 0,3% 
de carbono restante) e gás carbônico. As massas molares 
aproximadas dos elementos carbono e oxigênio são, 
respectivamente, 12 g/mol e 16 g/mol. 
LEE, J. D. Química Inorgânica não tão concisa . São Paulo: Edgard Blucher, 1999 (adaptado). 
Considerando que um forno foi alimentado com 2,5 
toneladas de ferro-gusa, a massa de gás carbônico 
formada, em quilogramas, na produção de aço doce, é 
mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `28.` },
      { id: 'B', type: 'text', value: `75.` },
      { id: 'C', type: 'text', value: `175.` },
      { id: 'D', type: 'text', value: `275.` },
      { id: 'E', type: 'text', value: `303.` },
    ],
    correct: 'D',
    explanation: `O ferro-gusa contém 3,3% de carbono e o aço doce, 0,3%; portanto, deve-se eliminar 3,0% da massa em carbono. Em 2,5 toneladas (2500 kg) de ferro-gusa, a massa de carbono removida é 0,030 × 2500 = 75 kg. Esse carbono reage com oxigênio formando gás carbônico (C + O₂ → CO₂); como as massas molares são 12 g/mol (C) e 44 g/mol (CO₂), cada 12 g de carbono geram 44 g de CO₂. Assim, a massa de CO₂ formada é 75 × (44 ÷ 12) = 275 kg. Portanto, a massa de gás carbônico é de aproximadamente 275 (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `A contaminação pelo vírus da rubéola é especialmente 
preocupante em grávidas, devido à síndrome da rubéola 
congênita (SRC), que pode levar ao risco de aborto 
e malformações congênitas. Devido a campanhas de 
vacinação específicas, nas últimas décadas houve uma 
grande diminuição de casos de rubéola entre as mulheres, 
e, a partir de 2008, as campanhas se intensificaram e têm 
dado maior enfoque à vacinação de homens jovens. 
BRASIL. Brasil livre da rubéola : campanha nacional de vacinação para eliminação da 
rubéola. Brasília: Ministério da Saúde, 2009 (adaptado). 
Considerando a preocupação com a ocorrência da SRC, 
as campanhas passaram a dar enfoque à vacinação dos 
homens, porque eles`,
    alternatives: [
      { id: 'A', type: 'text', value: `ficam mais expostos a esse vírus.` },
      { id: 'B', type: 'text', value: `transmitem o vírus a mulheres gestantes.` },
      { id: 'C', type: 'text', value: `passam a infecção diretamente para o feto.` },
      { id: 'D', type: 'text', value: `transferem imunidade às parceiras grávidas.` },
      { id: 'E', type: 'text', value: `são mais sucetíveis a esse vírus que as mulheres.` },
    ],
    correct: 'B',
    explanation: `A síndrome da rubéola congênita atinge o feto de gestantes infectadas, podendo causar abortos e malformações. Embora os homens não desenvolvam essa síndrome, podem contrair o vírus da rubéola e transmiti-lo a mulheres grávidas, colocando-as em risco. Vacinar os homens jovens reduz a circulação do vírus e protege indiretamente as gestantes. Portanto, as campanhas passaram a enfocar a vacinação dos homens porque eles transmitem o vírus a mulheres gestantes (alternativa B).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Um circuito em série é formado por uma pilha, uma 
lâmpada incandescente e uma chave interruptora. 
Ao se ligar a chave, a lâmpada acende quase 
instantaneamente, irradiando calor e luz. Popularmente, 
associa-se o fenômeno da irradiação de energia a um 
desgaste da corrente elétrica, ao atravessar o filamento 
da lâmpada, e à rapidez com que a lâmpada começa 
a brilhar. Essa explicação está em desacordo com o 
modelo clássico de corrente. 
De acordo com o modelo mencionado, o fato de a lâmpada 
acender quase instantaneamente está relacionado à 
rapidez com que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o fluido elétrico se desloca no circuito.` },
      { id: 'B', type: 'text', value: `as cargas negativas móveis atravessam o circuito.` },
      { id: 'C', type: 'text', value: `a bateria libera cargas móveis para o filamento da lâmpada.` },
      { id: 'D', type: 'text', value: `o campo elétrico se estabelece em todos os pontos do circuito.` },
      { id: 'E', type: 'text', value: `as cargas positivas e negativas se chocam no filamento da lâmpada.` },
    ],
    correct: 'D',
    explanation: `No modelo clássico, a corrente seria o deslocamento das próprias cargas ao longo do fio, que levariam certo tempo para chegar até o filamento, o que não explicaria o acendimento quase instantâneo. Na realidade, ao fechar a chave, o campo elétrico se propaga quase à velocidade da luz e se estabelece praticamente ao mesmo tempo em todos os pontos do circuito, colocando os elétrons em movimento simultaneamente. Por isso a lâmpada acende quase de imediato, em desacordo com o modelo clássico. Portanto, o acendimento está relacionado ao fato de o campo elétrico se estabelecer em todos os pontos do circuito (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Estudos de fluxo de energia em ecossistemas 
demonstram que a alta produtividade nos manguezais 
está diretamente relacionada às taxas de produção 
primária líquida e à rápida reciclagem dos nutrientes. 
Como exemplo de seres vivos encontrados nesse 
ambiente, temos: aves, caranguejos, insetos, peixes 
e algas. 
Dos grupos de seres vivos citados, os que contribuem 
diretamente para a manutenção dessa produtividade 
no referido ecossistema são`,
    alternatives: [
      { id: 'A', type: 'text', value: `aves.` },
      { id: 'B', type: 'text', value: `algas.` },
      { id: 'C', type: 'text', value: `peixes.` },
      { id: 'D', type: 'text', value: `insetos.` },
      { id: 'E', type: 'text', value: `caranguejos.` },
    ],
    correct: 'B',
    explanation: `A alta produtividade primária líquida do manguezal depende dos organismos produtores, que fixam carbono por fotossíntese e geram a matéria orgânica que sustenta toda a cadeia alimentar. Entre os grupos citados — aves, caranguejos, insetos, peixes e algas —, apenas as algas são produtores fotossintetizantes. Os demais são consumidores e não contribuem diretamente para a produtividade primária. Portanto, o grupo que contribui diretamente para a manutenção dessa produtividade são as algas (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Entre as substâncias usadas para o tratamento de 
água está o sulfato de alumínio que, em meio alcalino, 
forma partículas em suspensão na água, às quais as 
impurezas presentes no meio se aderem. 
O método de separação comumente usado para retirar o 
sulfato de alumínio com as impurezas aderidas é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `flotação.` },
      { id: 'B', type: 'text', value: `levigação.` },
      { id: 'C', type: 'text', value: `ventilação.` },
      { id: 'D', type: 'text', value: `peneiração.` },
      { id: 'E', type: 'text', value: `centrifugação.` },
    ],
    correct: 'A',
    explanation: `O sulfato de alumínio, em meio alcalino, forma partículas (flocos) às quais as impurezas em suspensão na água aderem. Esses flocos tendem a ser levados à superfície, frequentemente arrastados por bolhas, de onde são retirados, caracterizando o processo de flotação. A flotação separa sólidos de um líquido aproveitando a diferença de flutuabilidade das partículas floculadas. As demais opções — levigação, ventilação, peneiração e centrifugação — não correspondem a esse mecanismo no tratamento de água. Portanto, o método usado é a flotação (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Em um piano, o Dó central e a próxima nota Dó (Dó maior)
apresentam sons parecidos, mas não idênticos. É possível
utilizar programas computacionais para expressar o formato
dessas ondas sonoras em cada uma das situações como
apresentado nas figuras, em que estão indicados intervalos de
tempo idênticos (T). T T Dó central Dó maior A razão entre as
frequências do Dó central e do Dó maior é de:`,
    images: ['/enem/2013/images/enem_2013_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 2` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `1 4` },
      { id: 'E', type: 'text', value: `4` },
    ],
    correct: 'A',
    explanation: `O Dó maior está uma oitava acima do Dó central, o que corresponde ao dobro da frequência. Nas figuras, no mesmo intervalo de tempo T, o Dó maior completa o dobro de oscilações do Dó central, confirmando que f_maior = 2·f_central. A razão pedida é f_central ÷ f_maior = f_central ÷ (2·f_central) = 1/2. Portanto, a razão entre as frequências do Dó central e do Dó maior é 1/2 (alternativa A).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Medir temperatura é fundamental em muitas aplicações, e
apresentar a leitura em mostradores digitais é bastante
prático. O seu funcionamento é baseado na correspondência
entre valores de temperatura e de diferença de potencial
elétrico. Por exemplo, podemos usar o circuito elétrico
apresentado, no qual o elemento sensor de temperatura ocupa um
dos braços do circuito (R s ) e a dependência da resistência
com a temperatura é conhecida. 470 Ω 470 Ω + 10 V Voltímetro R
S = 100 Ω 120 Ω Para um valor de temperatura em que R S = 100
Ω , a leitura apresentada pelo voltímetro será de`,
    images: ['/enem/2013/images/enem_2013_d1_q83.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `+ 6,2 V.` },
      { id: 'B', type: 'text', value: `+ 1,7 V.` },
      { id: 'C', type: 'text', value: `+ 0,3 V.` },
      { id: 'D', type: 'text', value: `- 0,3 V.` },
      { id: 'E', type: 'text', value: `- 6,2 V.` },
    ],
    correct: 'D',
    explanation: `A ponte é alimentada por 10 V e cada ramo funciona como um divisor de tensão. No ramo esquerdo (470 Ω e Rs = 100 Ω), a tensão no ponto médio, lado positivo, é V₊ = 10 × 100 ÷ (470 + 100) = 1000/570 ≈ 1,75 V. No ramo direito (470 Ω e 120 Ω), a tensão no ponto médio, lado negativo, é V₋ = 10 × 120 ÷ (470 + 120) = 1200/590 ≈ 2,03 V. O voltímetro lê V₊ − V₋ ≈ 1,75 − 2,03 = −0,28 V, próximo de −0,3 V. Portanto, a leitura é de aproximadamente −0,3 V (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Apesar de belos e impressionantes, corais exóticos 
encontrados na Ilha Grande podem ser uma ameaça ao 
equilíbrio dos ecossistemas do litoral do Rio de Janeiro. 
Originários do Oceano Pacífico, esses organismos foram 
trazidos por plataformas de petróleo e outras embarcações, 
provavelmente na década de 1980, e disputam com 
as espécies nativas elementos primordiais para a 
sobrevivência, como espaço e alimento. Organismos 
invasores são a segunda maior causa de perda de 
biodiversidade, superados somente pela destruição 
direta de hábitats pela ação do homem. As populações de 
espécies invasoras crescem indefinidamente e ocupam o 
espaço de organismos nativos. 
LEVY, I. Disponível em: http://cienciahoje.uol.com.br. Acesso em: 5 dez. 2011 (adaptado). 
As populações de espécies invasoras crescem bastante 
por terem a vantagem de`,
    alternatives: [
      { id: 'A', type: 'text', value: `não apresentarem genes deletérios no seu pool gênico.` },
      { id: 'B', type: 'text', value: `não possuírem parasitas e predadores naturais presentes no ambiente exótico.` },
      { id: 'C', type: 'text', value: `apresentarem características genéticas para se adaptarem a qualquer clima ou condição ambiental.` },
      { id: 'D', type: 'text', value: `apresentarem capacidade de consumir toda a variedade de alimentos disponibilizados no ambiente exótico.` },
      { id: 'E', type: 'text', value: `apresentarem características fisiológicas que lhes conferem maior tamanho corporal que o das espécies nativas.` },
    ],
    correct: 'B',
    explanation: `Ao serem levadas a um novo ambiente, as espécies invasoras deixam para trás os parasitas e predadores naturais que, na região de origem, controlavam suas populações. Sem esses inimigos naturais no ambiente exótico, elas se reproduzem e crescem sem controle, ocupando o espaço das espécies nativas. Essa é a principal vantagem que explica o crescimento acelerado dessas populações invasoras. Portanto, as populações de espécies invasoras crescem por não possuírem parasitas e predadores naturais presentes no ambiente exótico (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Desenvolve-se um dispositivo para abrir automaticamente uma
porta no qual um botão, quando acionado, faz com que uma
corrente elétrica i = 6 A percorra uma barra condutora de
comprimento L = 5 cm, cujo ponto médio está preso a uma mola
de constante elástica k = 5 × 10⁻² N/cm. O sistema
mola-condutor está imerso em um campo magnético uniforme
perpendicular ao plano. Quando acionado o botão, a barra sairá
da posição de equilíbrio a uma velocidade média de 5 m/s e
atingirá a catraca em 6 milisegundos, abrindo a porta. fio
catraca i i L k x x v x x x x x (cm) C 0 A intensidade do
campo magnético, para que o dispositivo funcione corretamente,
é de`,
    images: ['/enem/2013/images/enem_2013_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5 × 10⁻¹ T.` },
      { id: 'B', type: 'text', value: `5 × 10⁻² T.` },
      { id: 'C', type: 'text', value: `5 × 10¹ T.` },
      { id: 'D', type: 'text', value: `2 × 10⁻² T.` },
      { id: 'E', type: 'text', value: `2 × 10⁰ T.` },
    ],
    correct: 'A',
    explanation: `Da posição de equilíbrio até a catraca, a barra percorre a distância x = v·t = 5 m/s × 6 × 10⁻³ s = 0,03 m = 3 cm. Nessa posição, a força magnética sobre a barra condutora deve equilibrar a força elástica da mola: B·i·L = k·x. Com k = 5 × 10⁻² N/cm e x = 3 cm, a força da mola é k·x = 0,15 N; e i·L = 6 A × 0,05 m = 0,3 A·m. Logo, B = 0,15 ÷ 0,3 = 0,5 T = 5 × 10⁻¹ T. Portanto, a intensidade do campo magnético é 5 × 10⁻¹ T (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `As fraldas descartáveis que contêm o polímero poliacrilato de
sódio (1) são mais eficientes na retenção de água que as
fraldas de pano convencionais, constituídas de fibras de
celulose (2). n O - + n O Na O (1) (2) A maior eficiência
dessas fraldas descartáveis, em relação às de pano, deve-se às`,
    images: ['/enem/2013/images/enem_2013_d1_q86.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `interações dipolo-dipolo mais fortes entre o poliacrilato e a água, em relação às ligações de hidrogênio entre a celulose e as moléculas de água.` },
      { id: 'B', type: 'text', value: `interações íon-íon mais fortes entre o poliacrilato e as moléculas de água, em relação às ligações de hidrogênio entre a celulose e as moléculas de água.` },
      { id: 'C', type: 'text', value: `ligações de hidrogênio mais fortes entre o poliacrilato e a água, em relação às interações íon-dipolo entre a celulose e as moléculas de água.` },
      { id: 'D', type: 'text', value: `ligações de hidrogênio mais fortes entre o poliacrilato e as moléculas de água, em relação às interações dipolo induzido-dipolo induzido entre a celulose e as moléculas de água.` },
      { id: 'E', type: 'text', value: `interações íon-dipolo mais fortes entre o poliacrilato e as moléculas de água, em relação às ligações de hidrogênio entre a celulose e as moléculas de água.` },
    ],
    correct: 'E',
    explanation: `O poliacrilato de sódio possui grupos iônicos (–COO⁻ Na⁺), que interagem com a água por forças íon-dipolo, relativamente intensas. Já a celulose interage com a água apenas por ligações de hidrogênio, por meio de suas hidroxilas, interações mais fracas que as íon-dipolo. Como as interações íon-dipolo do poliacrilato com a água são mais fortes, ele retém muito mais água que a celulose. Portanto, a maior eficiência das fraldas descartáveis deve-se às interações íon-dipolo mais fortes entre o poliacrilato e as moléculas de água, em relação às ligações de hidrogênio entre a celulose e a água (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Em um dia sem vento, ao saltar de um avião, um paraquedista
cai verticalmente até atingir a velocidade limite. No instante
em que o paraquedas é aberto (instante T A ), ocorre a
diminuição de sua velocidade de queda. Algum tempo após a
abertura do paraquedas, ele passa a ter velocidade de queda
constante, que possibilita sua aterrissagem em segurança. Que
gráfico representa a força resultante sobre o paraquedista,
durante o seu movimento de queda? Força resultante A Tempo 0 T`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2013/images/enem_2013_d1_q87_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2013/images/enem_2013_d1_q87_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2013/images/enem_2013_d1_q87_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2013/images/enem_2013_d1_q87_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2013/images/enem_2013_d1_q87_E.jpg` },
    ],
    correct: 'B',
    explanation: `Na primeira fase (queda livre, antes de T_A), o peso supera a resistência do ar; a força resultante começa grande e diminui à medida que a velocidade cresce e a resistência aumenta, tendendo a zero ao atingir a velocidade limite. No instante T_A, a abertura do paraquedas faz a resistência do ar aumentar bruscamente, superando o peso: a força resultante torna-se negativa (apontando para cima), freando o paraquedista. Com a desaceleração, a velocidade cai, a resistência diminui e a força resultante volta a tender a zero, na nova velocidade constante. O gráfico que mostra a resultante positiva decrescendo até quase zero em T_A, seguida de um pico negativo que retorna a zero, é o da alternativa B.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Para a identificação de um rapaz vítima de acidente, 
fragmentos de tecidos foram retirados e submetidos à 
extração de DNA nuclear, para comparação com o DNA 
disponível dos possíveis familiares (pai, avô materno, avó 
materna, filho e filha). Como o teste com o DNA nuclear 
não foi conclusivo, os peritos optaram por usar também 
DNA mitocondrial, para dirimir dúvidas. 
Para identificar o corpo, os peritos devem verificar se há 
homologia entre o DNA mitocondrial do rapaz e o DNA 
mitocondrial do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `pai.` },
      { id: 'B', type: 'text', value: `filho.` },
      { id: 'C', type: 'text', value: `filha.` },
      { id: 'D', type: 'text', value: `avó materna.` },
      { id: 'E', type: 'text', value: `avô materno.` },
    ],
    correct: 'D',
    explanation: `O DNA mitocondrial é herdado exclusivamente por via materna, pois as mitocôndrias do zigoto vêm do óvulo. Assim, o rapaz tem o mesmo DNA mitocondrial de sua mãe, que por sua vez o herdou da própria mãe — a avó materna. Entre os familiares disponíveis, a avó materna compartilha com o rapaz a mesma linhagem mitocondrial. O pai e os filhos do rapaz teriam DNA mitocondrial de outras linhagens maternas. Portanto, deve-se verificar a homologia com o DNA mitocondrial da avó materna (alternativa D).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `Aquecedores solares usados em residências têm 
o objetivo de elevar a temperatura da água até 70 °C. 
No entanto, a temperatura ideal da água para um banho é 
de 30 °C. Por isso, deve-se misturar a água aquecida com 
a água à temperatura ambiente de um outro reservatório, 
que se encontra a 25 °C. 
Qual a razão entre a massa de água quente e a massa de 
água fria na mistura para um banho à temperatura ideal?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,111.` },
      { id: 'B', type: 'text', value: `0,125.` },
      { id: 'C', type: 'text', value: `0,357.` },
      { id: 'D', type: 'text', value: `0,428.` },
      { id: 'E', type: 'text', value: `0,833.` },
    ],
    correct: 'B',
    explanation: `No equilíbrio térmico, o calor cedido pela água quente é igual ao calor recebido pela água fria: m_q·c·(70 − 30) = m_f·c·(30 − 25). Simplificando o calor específico c, comum aos dois lados: m_q·40 = m_f·5. Isolando a razão, m_q ÷ m_f = 5 ÷ 40 = 0,125. Portanto, a razão entre a massa de água quente e a massa de água fria é 0,125 (alternativa B).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2013,
    day: 1,
    text: `As moléculas de nanoputians lembram figuras 
humanas e foram criadas para estimular o interesse 
de jovens na compreensão da linguagem expressa em 
fórmulas estruturais, muito usadas em química orgânica. 
Um exemplo é o NanoKid, representado na figura: 
NanoKid 
CHANTEAU, S. H.; TOUR, J. M. The Journal of Organic Chemistry , 
v. 68, n. 23, 2003 (adaptado). 
Em que parte do corpo do NanoKid existe carbono 
quaternário?`,
    images: ['/enem/2013/images/enem_2013_d1_q90.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Mãos.` },
      { id: 'B', type: 'text', value: `Cabeça.` },
      { id: 'C', type: 'text', value: `Tórax.` },
      { id: 'D', type: 'text', value: `Abdômen.` },
      { id: 'E', type: 'text', value: `Pés.` },
    ],
    correct: 'A',
    explanation: `Carbono quaternário é aquele ligado diretamente a outros quatro átomos de carbono. No NanoKid, as 'mãos' são grupos terc-butila, isto é, um carbono central unido a três grupos metila e ao restante do braço, totalizando quatro ligações com carbonos. Esse carbono central é, portanto, quaternário. As demais partes — cabeça, tórax, abdômen e pés — não apresentam carbono ligado a quatro outros carbonos. Portanto, o carbono quaternário está nas mãos (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
];

export default ENEM_2013_D1;
