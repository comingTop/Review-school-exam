import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2009_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A atmosfera terrestre é composta pelos gases
nitrogênio (N₂) e oxigênio (O₂), que somam cerca de 99%,
e por gases traços, entre eles o gás carbônico (CO₂), vapor
de água (H₂O), metano (CH₄), ozônio (O₃) e o óxido nitroso
(N₂O), que compõem o restante 1% do ar que respiramos.
Os gases traços, por serem constituídos por pelo menos 
três átomos, conseguem absorver o calor irradiado pela 
Terra, aquecendo o planeta. Esse fenômeno, que acontece 
há bilhões de anos, é chamado de efeito estufa. A partir da 
Revolução Industrial (século XIX), a concentração de 
gases traços na atmosfera, em particular o CO₂, tem 
aumentado significativamente, o que resultou no aumento 
da temperatura em escala global. Mais recentemente, 
outro fator tornou-se diretamente envolvido no aumento da 
concentração de CO₂ na atmosfera: o desmatamento. 
BROWN, I. F.; ALECHANDRE, A. S. Conceitos básicos sobre clima, 
carbono, florestas e comunidades. A.G. Moreira & S. 
Schwartzman. As mudanças climáticas globais e os 
ecossistemas brasileiros. Brasília: Instituto de Pesquisa 
Ambiental da Amazônia, 2000 (adaptado). 
Considerando o texto, uma alternativa viável para 
combater o efeito estufa é`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduzir o calor irradiado pela Terra mediante a 
substituição da produção primária pela industrialização 
refrigerada.` },
      { id: 'B', type: 'text', value: `promover a queima da biomassa vegetal, responsável 
pelo aumento do efeito estufa devido à produção de 
CH4.` },
      { id: 'C', type: 'text', value: `reduzir o desmatamento, mantendo-se, assim, o 
potencial da vegetação em absorver o CO₂ da 
atmosfera.` },
      { id: 'D', type: 'text', value: `aumentar a concentração atmosférica de H2O, 
molécula capaz de absorver grande quantidade de 
calor.` },
      { id: 'E', type: 'text', value: `remover moléculas orgânicas polares da atmosfera, 
diminuindo a capacidade delas de reter calor.` },
    ],
    correct: 'C',
    explanation: `Combater o efeito estufa passa por preservar os sumidouros naturais de CO₂. As florestas, por meio da fotossíntese, retiram CO₂ da atmosfera e o fixam na biomassa vegetal; o desmatamento, apontado no texto como novo fator agravante, elimina essa capacidade de absorção. Logo, a alternativa viável é reduzir o desmatamento, mantendo-se o potencial da vegetação de absorver o CO₂ atmosférico (C). Queimar biomassa (B) libera mais CO₂/CH₄, aumentar o vapor d'água (D) intensifica o efeito estufa e as demais não têm fundamento.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Analise a figura.
Disponível em: http://www.alcoologia.net. Acesso em: 15 jul. 2009 (adaptado).
Supondo que seja necessário dar um título para essa
figura, a alternativa que melhor traduziria o processo
representado seria:`,
    images: ['/enem/2009/images/enem_2009_d1_q2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Concentração média de álcool no sangue ao longo do 
dia.` },
      { id: 'B', type: 'text', value: `Variação da frequência da ingestão de álcool ao longo 
das horas.` },
      { id: 'C', type: 'text', value: `Concentração mínima de álcool no sangue a partir de 
diferentes dosagens.` },
      { id: 'D', type: 'text', value: `Estimativa de tempo necessário para metabolizar 
diferentes quantidades de álcool.` },
      { id: 'E', type: 'text', value: `Representação gráfica da distribuição de frequência 
de álcool em determinada hora do dia.` },
    ],
    correct: 'D',
    explanation: `A figura relaciona diferentes quantidades de álcool ingeridas ao tempo necessário para que o organismo as metabolize (elimine) completamente. O fígado degrada o etanol a uma taxa aproximadamente constante, de modo que, quanto maior a dose, maior o tempo para zerar a alcoolemia. Assim, o título que melhor traduz o processo é a estimativa de tempo necessário para metabolizar diferentes quantidades de álcool (D). As demais confundem concentração média/mínima ou frequência de ingestão, que não são o que a figura representa.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Estima-se que haja atualmente no mundo 40 
milhões de pessoas infectadas pelo HIV (o vírus que causa 
a AIDS), sendo que as taxas de novas infecções 
continuam crescendo, principalmente na África, Ásia e 
Rússia. Nesse cenário de pandemia, uma vacina contra o 
HIV teria imenso impacto, pois salvaria milhões de vidas. 
Certamente seria um marco na história planetária e 
também uma esperança para as populações carentes de 
tratamento antiviral e de acompanhamento médico. 
TANURI, A.; FERREIRA JÚNIOR, O. C. Vacina contra Aids: desafios e esperanças. Ciência 
Hoje (44) 26, 2009 (adaptado). 
Uma vacina eficiente contra o HIV deveria`,
    alternatives: [
      { id: 'A', type: 'text', value: `induzir a imunidade, para proteger o organismo da 
contaminação viral.` },
      { id: 'B', type: 'text', value: `ser capaz de alterar o genoma do organismo portador, 
induzindo a síntese de enzimas protetoras.` },
      { id: 'C', type: 'text', value: `produzir antígenos capazes de se ligarem ao vírus, 
impedindo que este entre nas células do organismo 
humano.` },
      { id: 'D', type: 'text', value: `ser amplamente aplicada em animais, visto que esses 
são os principais transmissores do vírus para os seres 
humanos.` },
      { id: 'E', type: 'text', value: `estimular a imunidade, minimizando a transmissão do 
vírus por gotículas de saliva.` },
    ],
    correct: 'A',
    explanation: `Vacinas são preparações de antígenos (atenuados, mortos ou fragmentos) que estimulam o sistema imunológico a produzir anticorpos e células de memória, sem causar a doença. Por isso, uma vacina eficiente contra o HIV deveria induzir a imunidade, preparando o organismo para responder rapidamente em caso de contaminação viral (A). A vacina não altera o genoma (B); produzir e injetar o anticorpo pronto (C) corresponde a soro/imunização passiva, não à vacina; o HIV não é transmitido por animais (D) nem principalmente por saliva (E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Em um experimento, preparou-se um conjunto de 
plantas por técnica de clonagem a partir de uma planta 
original que apresentava folhas verdes. Esse conjunto foi 
dividido em dois grupos, que foram tratados de maneira 
idêntica, com exceção das condições de iluminação, sendo 
um grupo exposto a ciclos de iluminação solar natural e 
outro mantido no escuro. Após alguns dias, observou-se 
que o grupo exposto à luz apresentava folhas verdes como 
a planta original e o grupo cultivado no escuro apresentava 
folhas amareladas. 
 
Ao final do experimento, os dois grupos de plantas 
apresentaram`,
    alternatives: [
      { id: 'A', type: 'text', value: `os genótipos e os fenótipos idênticos.` },
      { id: 'B', type: 'text', value: `os genótipos idênticos e os fenótipos diferentes.` },
      { id: 'C', type: 'text', value: `diferenças nos genótipos e fenótipos.` },
      { id: 'D', type: 'text', value: `o mesmo fenótipo e apenas dois genótipos diferentes.` },
      { id: 'E', type: 'text', value: `o mesmo fenótipo e grande variedade de genótipos.` },
    ],
    correct: 'B',
    explanation: `As plantas foram obtidas por clonagem a partir de um mesmo indivíduo, portanto têm genótipos idênticos. O fenótipo, porém, resulta da interação entre genótipo e ambiente: o grupo mantido no escuro não sintetizou clorofila (estiolamento, folhas amareladas), enquanto o grupo iluminado permaneceu verde. Logo, os dois grupos apresentam genótipos idênticos e fenótipos diferentes (B).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Na linha de uma tradição antiga, o astrônomo 
grego Ptolomeu (100-170 d.C.) afirmou a tese do 
geocentrismo, segundo a qual a Terra seria o centro do 
universo, sendo que o Sol, a Lua e os planetas girariam em 
seu redor em órbitas circulares. A teoria de Ptolomeu 
resolvia de modo razoável os problemas astronômicos da 
sua época. Vários séculos mais tarde, o clérigo e 
astrônomo polonês Nicolau Copérnico (1473-1543), ao 
encontrar inexatidões na teoria de Ptolomeu, formulou a 
teoria do heliocentrismo, segundo a qual o Sol deveria ser 
considerado o centro do universo, com a Terra, a Lua e os 
planetas girando circularmente em torno dele. Por fim, o 
astrônomo e matemático alemão Johannes Kepler (1571-
1630), depois de estudar o planeta Marte por cerca de 
trinta anos, verificou que a sua órbita é elíptica. Esse 
resultado generalizou-se para os demais planetas. 
 
A respeito dos estudiosos citados no texto, é correto 
afirmar que`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ptolomeu apresentou as ideias mais valiosas, por 
serem mais antigas e tradicionais.` },
      { id: 'B', type: 'text', value: `Copérnico desenvolveu a teoria do heliocentrismo 
inspirado no contexto político do Rei Sol.` },
      { id: 'C', type: 'text', value: `Copérnico viveu em uma época em que a pesquisa 
científica era livre e amplamente incentivada pelas 
autoridades.` },
      { id: 'D', type: 'text', value: `Kepler estudou o planeta Marte para atender às 
necessidades de expansão econômica e científica da 
Alemanha.` },
      { id: 'E', type: 'text', value: `Kepler apresentou uma teoria científica que, graças 
aos 
métodos 
aplicados, 
pôde 
ser 
testada 
e 
generalizada.` },
    ],
    correct: 'E',
    explanation: `O texto mostra a evolução das ideias astronômicas: Ptolomeu (geocentrismo), Copérnico (heliocentrismo com órbitas circulares) e Kepler (órbitas elípticas, após décadas de estudo de Marte, apoiado nos dados observacionais de Tycho Brahe). O que torna a contribuição de Kepler propriamente científica é que sua teoria, graças aos métodos empregados, pôde ser testada e generalizada aos demais planetas (E). As demais fazem afirmações históricas falsas (antiguidade como critério de valor, 'Rei Sol', liberdade de pesquisa, interesse econômico alemão).`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O ciclo biogeoquímico do carbono compreende 
diversos compartimentos, entre os quais a Terra, a 
atmosfera e os oceanos, e diversos processos que 
permitem a transferência de compostos entre esses 
reservatórios. Os estoques de carbono armazenados na 
forma de recursos não renováveis, por exemplo, o 
petróleo, são limitados, sendo de grande relevância que se 
perceba a importância da substituição de combustíveis 
fósseis por combustíveis de fontes renováveis. 
 
A utilização de combustíveis fósseis interfere no ciclo do 
carbono, pois provoca`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumento da porcentagem de carbono contido na 
Terra.` },
      { id: 'B', type: 'text', value: `redução na taxa de fotossíntese dos vegetais 
superiores.` },
      { id: 'C', type: 'text', value: `aumento da produção de carboidratos de origem 
vegetal.` },
      { id: 'D', type: 'text', value: `aumento na quantidade de carbono presente na 
atmosfera.` },
      { id: 'E', type: 'text', value: `redução da quantidade global de carbono armazenado 
nos oceanos.` },
    ],
    correct: 'D',
    explanation: `A queima de combustíveis fósseis retira carbono de reservatórios geológicos (petróleo, carvão), formados em tempos remotos, e o devolve rapidamente à atmosfera como CO₂, em velocidade muito maior que a de sua reposição natural. Isso desequilibra o ciclo do carbono, provocando aumento na quantidade de carbono presente na atmosfera (D). Não aumenta o carbono total da Terra (A), não reduz diretamente a fotossíntese (B) nem a produção de carboidratos (C), e o efeito descrito não é a redução do carbono oceânico (E).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Um novo método para produzir insulina artificial 
que 
utiliza 
tecnologia 
de 
DNA 
recombinante 
foi 
desenvolvido por pesquisadores do Departamento de 
Biologia Celular da Universidade de Brasília (UnB) em 
parceria com a iniciativa privada. Os pesquisadores 
modificaram geneticamente a bactéria Escherichia coli 
para torná-la capaz de sintetizar o hormônio. O processo 
permitiu fabricar insulina em maior quantidade e em 
apenas 30 dias, um terço do tempo necessário para obtê-la 
pelo método tradicional, que consiste na extração do 
hormônio a partir do pâncreas de animais abatidos. 
Ciência Hoje, 24 abr. 2001. Disponível em: http://cienciahoje.uol.com.br (adaptado). 
A produção de insulina pela técnica do DNA recombinante 
tem, como consequência,`,
    alternatives: [
      { id: 'A', type: 'text', value: `o aperfeiçoamento do processo de extração de 
insulina a partir do pâncreas suíno.` },
      { id: 'B', type: 'text', value: `a 
seleção 
de 
microrganismos 
resistentes 
a 
antibióticos.` },
      { id: 'C', type: 'text', value: `o progresso na técnica da síntese química de 
hormônios.` },
      { id: 'D', type: 'text', value: `impacto favorável na saúde de indivíduos diabéticos.` },
      { id: 'E', type: 'text', value: `a criação de animais transgênicos.` },
    ],
    correct: 'D',
    explanation: `A técnica do DNA recombinante tornou a bactéria Escherichia coli capaz de sintetizar insulina humana em grande quantidade e em um terço do tempo do método tradicional (extração do pâncreas de animais). A consequência direta é o aumento da oferta do hormônio com qualidade, gerando impacto favorável na saúde dos indivíduos diabéticos, que dele dependem (D). Não se trata de aperfeiçoar a extração pancreática (A), de síntese química (C), de seleção de resistência a antibióticos (B) nem da criação de animais transgênicos (E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A economia moderna depende da disponibilidade 
de muita energia em diferentes formas, para funcionar e 
crescer. No Brasil, o consumo total de energia pelas 
indústrias cresceu mais de quatro vezes no período entre 
1970 e 2005. Enquanto os investimentos em energias 
limpas e renováveis, como solar e eólica, ainda são 
incipientes, ao se avaliar a possibilidade de instalação de 
usinas geradoras de energia elétrica, diversos fatores 
devem ser levados em consideração, tais como os 
impactos causados ao ambiente e às populações locais. 
RICARDO, B.; CAMPANILI, M. Almanaque Brasil Socioambiental. 
São Paulo: Instituto Socioambiental, 2007 (adaptado). 
Em uma situação hipotética, optou-se por construir uma 
usina hidrelétrica em região que abrange diversas quedas 
d’água em rios cercados por mata, alegando-se que 
causaria impacto ambiental muito menor que uma usina 
termelétrica. Entre os possíveis impactos da instalação de 
uma usina hidrelétrica nessa região, inclui-se`,
    alternatives: [
      { id: 'A', type: 'text', value: `a poluição da água por metais da usina.` },
      { id: 'B', type: 'text', value: `a destruição do habitat de animais terrestres.` },
      { id: 'C', type: 'text', value: `o aumento expressivo na liberação de CO₂ para a 
atmosfera.` },
      { id: 'D', type: 'text', value: `o consumo não renovável de toda água que passa 
pelas turbinas.` },
      { id: 'E', type: 'text', value: `o aprofundamento no leito do rio, com a menor 
deposição de resíduos no trecho de rio anterior à 
represa.` },
    ],
    correct: 'B',
    explanation: `Mesmo sendo mais limpa que a termelétrica, a hidrelétrica exige a formação de um grande reservatório que inunda extensas áreas de mata. Esse alagamento destrói o habitat de animais terrestres (e da vegetação), sendo esse um de seus principais impactos ambientais (B). Não há poluição por metais da própria usina (A), a água que passa pelas turbinas não é consumo não renovável (D) e a usina em operação não libera expressivamente CO₂ (C).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `As mudanças climáticas e da vegetação ocorridas 
nos trópicos da América do Sul têm sido bem 
documentadas por diversos autores, existindo um grande 
acúmulo de evidências geológicas ou paleoclimatológicas 
que evidenciam essas mudanças ocorridas durante o 
Quaternário nessa região. Essas mudanças resultaram em 
restrição da distribuição das florestas pluviais, com 
expansões 
concomitantes 
de 
habitats 
não-florestais 
durante períodos áridos (glaciais), seguido da expansão 
das florestas pluviais e restrição das áreas não-florestais 
durante períodos úmidos (interglaciais). 
Disponível em: http://zoo.bio.ufpr.br. Acesso em: 1 maio 2009. 
Durante os períodos glaciais,`,
    alternatives: [
      { id: 'A', type: 'text', value: `as áreas não-florestais ficam restritas a refúgios 
ecológicos devido à baixa adaptabilidade de espécies 
não-florestais a ambientes áridos.` },
      { id: 'B', type: 'text', value: `grande parte da diversidade de espécies vegetais é 
reduzida, uma vez que necessitam de condições 
semelhantes a dos períodos interglaciais.` },
      { id: 'C', type: 'text', value: `a vegetação comum ao cerrado deve ter se limitado a 
uma pequena região do centro do Brasil, da qual se 
expandiu até atingir a atual distribuição.` },
      { id: 'D', type: 'text', value: `plantas com adaptações ao clima árido, como o 
desenvolvimento de estruturas que reduzem a perda 
de água, devem apresentar maior área de distribuição.` },
      { id: 'E', type: 'text', value: `florestas tropicais como a amazônica apresentam 
distribuição geográfica mais ampla, uma vez que são 
densas e diminuem a ação da radiação solar sobre o 
solo e reduzem os efeitos da aridez.` },
    ],
    correct: 'D',
    explanation: `Durante os períodos glaciais, mais áridos, as florestas pluviais se retraem e expandem-se os ambientes não-florestais. Nesse cenário seco, plantas com adaptações à aridez — como estruturas que reduzem a perda de água (folhas reduzidas, cutículas espessas, caules suculentos) — levam vantagem e passam a apresentar maior área de distribuição (D). As alternativas que preveem restrição das espécies xéricas ou ampliação das florestas úmidas durante os glaciais contrariam o texto.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A fotossíntese é importante para a vida na Terra. 
Nos cloroplastos dos organismos fotossintetizantes, a 
energia solar é convertida em energia química que, 
juntamente com água e gás carbônico (CO₂), é utilizada 
para a síntese de compostos orgânicos (carboidratos). A 
fotossíntese é o único processo de importância biológica 
capaz de realizar essa conversão. Todos os organismos, 
incluindo os produtores, aproveitam a energia armazenada 
nos carboidratos para impulsionar os processos celulares, 
liberando CO₂ para a atmosfera e água para a célula por 
meio da respiração celular. Além disso, grande fração dos 
recursos energéticos do planeta, produzidos tanto no 
presente 
(biomassa) 
como 
em 
tempos 
remotos 
(combustível fóssil), é resultante da atividade fotossintética. 
 
As informações sobre obtenção e transformação dos 
recursos naturais por meio dos processos vitais de 
fotossíntese e respiração, descritas no texto, permitem 
concluir que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o CO₂ e a água são moléculas de alto teor energético.` },
      { id: 'B', type: 'text', value: `os carboidratos convertem energia solar em energia 
química.` },
      { id: 'C', type: 'text', value: `a vida na Terra depende, em última análise, da 
energia proveniente do Sol.` },
      { id: 'D', type: 'text', value: `o processo respiratório é responsável pela retirada de 
carbono da atmosfera.` },
      { id: 'E', type: 'text', value: `a produção de biomassa e de combustível fóssil, por 
si, é responsável pelo aumento de CO₂ atmosférico.` },
    ],
    correct: 'C',
    explanation: `O texto mostra que a fotossíntese converte energia solar em energia química (carboidratos) e que essa energia sustenta tanto os processos celulares de todos os seres vivos quanto os estoques de biomassa e de combustíveis fósseis. Conclui-se, portanto, que a vida na Terra depende, em última análise, da energia proveniente do Sol (C). CO₂ e água não são moléculas de alto teor energético (A); os carboidratos armazenam, e não convertem, a energia solar (B); a respiração libera CO₂ (D); e a fotossíntese, ao fixar carbono, não é por si causa do aumento de CO₂ (E).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Para que todos os órgãos do corpo humano 
funcionem em boas condições, é necessário que a 
temperatura do corpo fique sempre entre 36 ºC e 37 ºC. 
Para manter-se dentro dessa faixa, em dias de muito calor 
ou durante intensos exercícios físicos, uma série de 
mecanismos fisiológicos é acionada. 
 
Pode-se 
citar 
como 
o 
principal 
responsável 
pela 
manutenção da temperatura corporal humana o sistema`,
    alternatives: [
      { id: 'A', type: 'text', value: `digestório, pois produz enzimas que atuam na quebra 
de alimentos calóricos.` },
      { id: 'B', type: 'text', value: `imunológico, pois suas células agem no sangue, 
diminuindo a condução do calor.` },
      { id: 'C', type: 'text', value: `nervoso, pois promove a sudorese, que permite perda 
de calor por meio da evaporação da água.` },
      { id: 'D', type: 'text', value: `reprodutor, pois secreta hormônios que alteram a 
temperatura, principalmente durante a menopausa.` },
      { id: 'E', type: 'text', value: `endócrino, pois fabrica anticorpos que, por sua vez, 
atuam na variação do diâmetro dos vasos periféricos.` },
    ],
    correct: 'C',
    explanation: `A manutenção da temperatura corporal na faixa de 36–37 °C (homeostase térmica) é coordenada pelo sistema nervoso, que detecta as variações de temperatura e aciona as respostas adequadas. Em dias quentes ou durante o exercício, ele estimula a sudorese: a evaporação do suor na pele retira calor do corpo, promovendo seu resfriamento (C). Os sistemas digestório, imunológico, reprodutor e endócrino descritos nas demais alternativas não desempenham esse papel central de termorregulação.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Sabões são sais de ácidos carboxílicos de 
cadeia longa utilizados com a finalidade de facilitar, 
durante processos de lavagem, a remoção de 
substâncias de baixa solubilidade em água, por 
exemplo, óleos e gorduras. A figura a seguir representa 
a estrutura de uma molécula de sabão. 
 
 
Em solução, os ânions do sabão podem 
hidrolisar a água e, desse modo, formar o ácido 
carboxílico correspondente. Por exemplo, para o 
estearato de sódio, é estabelecido o seguinte equilíbrio: 
 
CH₃(CH₂)₁₆COO⁻ + H₂O ⇌ CH₃(CH₂)₁₆COOH + OH⁻
 
 
Uma vez que o ácido carboxílico formado é 
pouco solúvel em água e menos eficiente na remoção 
de gorduras, o pH do meio deve ser controlado de 
maneira a evitar que o equilíbrio acima seja deslocado 
para a direita. 
Com base nas informações do texto, é correto concluir 
que os sabões atuam de maneira`,
    images: ['/enem/2009/images/enem_2009_d1_q12_1.jpg', '/enem/2009/images/enem_2009_d1_q12_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `mais eficiente em pH básico.` },
      { id: 'B', type: 'text', value: `mais eficiente em pH ácido.` },
      { id: 'C', type: 'text', value: `mais eficiente em pH neutro.` },
      { id: 'D', type: 'text', value: `eficiente em qualquer faixa de pH.` },
      { id: 'E', type: 'text', value: `mais eficiente em pH ácido ou neutro.` },
    ],
    correct: 'A',
    explanation: `Os ânions do sabão (R–COO⁻) são a parte ativa na remoção de gorduras. Em meio ácido, o excesso de H⁺ desloca o equilíbrio R–COO⁻ + H₂O ⇌ R–COOH + OH⁻ para a direita, formando o ácido carboxílico, pouco solúvel e menos eficiente. Para manter o ânion do sabão (forma eficiente), o equilíbrio deve permanecer deslocado para a esquerda, o que é favorecido em meio básico (rico em OH⁻). Portanto, o sabão atua de maneira mais eficiente em pH básico (A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A abertura e a pavimentação de rodovias em 
zonas rurais e regiões afastadas dos centros urbanos, 
por um lado, possibilita melhor acesso e maior 
integração entre as comunidades, contribuindo com o 
desenvolvimento social e urbano de populações 
isoladas. Por outro lado, a construção de rodovias pode 
trazer impactos indesejáveis ao meio ambiente, visto 
que a abertura de estradas pode resultar na 
fragmentação de habitats, comprometendo o fluxo 
gênico e as interações entre espécies silvestres, além 
de prejudicar o fluxo natural de rios e riachos, 
possibilitar o ingresso de espécies exóticas em 
ambientes naturais e aumentar a pressão antrópica 
sobre os ecossistemas nativos. 
BARBOSA, N. P. U.; FERNANDES, G. W. A destruição do jardim. Scientific American 
Brasil. Ano 7, número 80, dez. 2008 (adaptado). 
 
Nesse contexto, para conciliar os interesses aparentemente 
contraditórios entre o progresso social e urbano e a 
conservação do meio ambiente, seria razoável`,
    alternatives: [
      { id: 'A', type: 'text', value: `impedir a abertura e a pavimentação de rodovias em 
áreas rurais e em regiões preservadas, pois a qualidade 
de vida e as tecnologias encontradas nos centros urbanos 
são prescindíveis às populações rurais.` },
      { id: 'B', type: 'text', value: `impedir a abertura e a pavimentação de rodovias em 
áreas rurais e em regiões preservadas, promovendo a 
migração das populações rurais para os centros urbanos, 
onde a qualidade de vida é melhor.` },
      { id: 'C', type: 'text', value: `permitir a abertura e a pavimentação de rodovias apenas 
em áreas rurais produtivas, haja vista que nas demais 
áreas o retorno financeiro necessário para produzir uma 
melhoria na qualidade de vida da região não é garantido.` },
      { id: 'D', type: 'text', value: `permitir a abertura e a pavimentação de rodovias, desde 
que comprovada a sua real necessidade e após a 
realização de estudos que demonstrem ser possível 
contornar ou compensar seus impactos ambientais.` },
      { id: 'E', type: 'text', value: `permitir a abertura e a pavimentação de rodovias, haja 
vista que os impactos ao meio ambiente são temporários e 
podem ser facilmente revertidos com as tecnologias 
existentes para recuperação de áreas degradadas.` },
    ],
    correct: 'D',
    explanation: `O texto expõe o conflito entre o desenvolvimento social (acesso proporcionado pelas rodovias) e os impactos ambientais (fragmentação de habitats, comprometimento do fluxo gênico, entrada de espécies exóticas). A solução razoável e conciliadora é permitir a abertura e a pavimentação apenas quando comprovada sua real necessidade e após estudos que demonstrem ser possível contornar ou compensar os impactos ambientais (D). Proibir totalmente (A e B) ou liberar sem critério alegando reversibilidade fácil (C e E) são posições extremas e incorretas.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A eficiência de um processo de conversão de energia 
é definida como a razão entre a produção de energia ou 
trabalho útil e o total de entrada de energia no processo. A 
figura mostra um processo com diversas etapas. Nesse caso, 
a eficiência geral será igual ao produto das eficiências das 
etapas individuais. A entrada de energia que não se 
transforma em trabalho útil é perdida sob formas não 
utilizáveis (como resíduos de calor). 
 
 
HINRICHS, R. A. Energia e Meio Ambiente. São Paulo: Pioneira 
Thomson Learning, 2003 (adaptado). 
 
Aumentar a eficiência dos processos de conversão de energia 
implica economizar recursos e combustíveis. Das propostas 
seguintes, qual resultará em maior aumento da eficiência geral 
do processo?`,
    images: ['/enem/2009/images/enem_2009_d1_q14.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Aumentar a quantidade de combustível para queima na 
usina de força.` },
      { id: 'B', type: 'text', value: `Utilizar lâmpadas incandescentes, que geram pouco calor 
e muita luminosidade.` },
      { id: 'C', type: 'text', value: `Manter o menor número possível de aparelhos elétricos 
em funcionamento nas moradias.` },
      { id: 'D', type: 'text', value: `Utilizar cabos com menor diâmetro nas linhas de 
transmissão a fim de economizar o material condutor.` },
      { id: 'E', type: 'text', value: `Utilizar materiais com melhores propriedades condutoras 
nas linhas de transmissão e lâmpadas fluorescentes nas 
moradias.` },
    ],
    correct: 'E',
    explanation: `A eficiência global do processo é o produto das eficiências de cada etapa; para aumentá-la, é preciso reduzir as perdas em cada uma. Usar materiais de melhor condutividade nas linhas de transmissão diminui as perdas por efeito Joule, e substituir lâmpadas incandescentes por fluorescentes aumenta a fração de energia convertida em luz. A combinação dessas duas medidas produz o maior aumento da eficiência geral (E). Aumentar o combustível (A) não melhora a eficiência, as incandescentes desperdiçam energia em calor (B) e as demais não atuam sobre o rendimento do processo.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Para 
que 
apresente 
condutividade 
elétrica 
adequada a muitas aplicações, o cobre bruto obtido por 
métodos térmicos é purificado eletroliticamente. Nesse 
processo, o cobre bruto impuro constitui o ânodo da célula, 
que está imerso em uma solução de CuSO4. À medida que 
o cobre impuro é oxidado no ânodo, íons Cu2+ da solução 
são depositados na forma pura no cátodo. Quanto às 
impurezas metálicas, algumas são oxidadas, passando à 
solução, enquanto outras simplesmente se desprendem do 
ânodo e se sedimentam abaixo dele. As impurezas 
sedimentadas são posteriormente processadas, e sua 
comercialização gera receita que ajuda a cobrir os custos 
do processo. A série eletroquímica a seguir lista o cobre e 
alguns metais presentes como impurezas no cobre bruto 
de acordo com suas forças redutoras relativas. 
 
 
 
Entre as impurezas metálicas que constam na série 
apresentada, as que se sedimentam abaixo do ânodo de 
cobre são`,
    images: ['/enem/2009/images/enem_2009_d1_q15.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Au, Pt, Ag, Zn, Ni e Pb.` },
      { id: 'B', type: 'text', value: `Au, Pt e Ag.` },
      { id: 'C', type: 'text', value: `Zn, Ni e Pb.` },
      { id: 'D', type: 'text', value: `Au e Zn.` },
      { id: 'E', type: 'text', value: `Ag e Pb.` },
    ],
    correct: 'B',
    explanation: `No refino eletrolítico, o ânodo de cobre impuro é oxidado. As impurezas menos redutoras que o cobre (metais mais nobres, como Au, Pt e Ag) não se oxidam: desprendem-se do ânodo e se sedimentam abaixo dele, formando a lama anódica. Já as impurezas mais redutoras que o cobre (Zn, Ni, Pb) são oxidadas e passam para a solução. Portanto, os metais que se sedimentam abaixo do ânodo são Au, Pt e Ag (B).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A figura seguinte representa um modelo de transmissão da 
informação genética nos sistemas biológicos. No fim do 
processo, que inclui a replicação, a transcrição e a 
tradução, há três formas proteicas diferentes denominadas 
a, b e c. 
 
 
Depreende-se do modelo que`,
    images: ['/enem/2009/images/enem_2009_d1_q16.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a única molécula que participa da produção de 
proteínas é o DNA.` },
      { id: 'B', type: 'text', value: `o fluxo de informação genética, nos sistemas 
biológicos, é unidirecional.` },
      { id: 'C', type: 'text', value: `as fontes de informação ativas durante o processo de 
transcrição são as proteínas.` },
      { id: 'D', type: 'text', value: `é possível obter diferentes variantes proteicas a partir 
de um mesmo produto de transcrição.` },
      { id: 'E', type: 'text', value: `a molécula de DNA possui forma circular e as demais 
moléculas possuem forma de fita simples linearizadas.` },
    ],
    correct: 'D',
    explanation: `O modelo mostra a replicação, a transcrição e a tradução gerando, ao final, três formas proteicas distintas (a, b e c). Isso evidencia que, a partir de um mesmo produto de transcrição (um RNA), é possível obter diferentes variantes proteicas — por exemplo, por splicing alternativo ou pelo uso de diferentes sítios de início e de parada da tradução (D). Não é apenas o DNA que participa da produção de proteínas (A), o fluxo de informação não é estritamente unidirecional em todos os sistemas (B), e as fontes de informação na transcrição são ácidos nucleicos, não proteínas (C).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O Brasil pode se transformar no primeiro país das 
Américas a entrar no seleto grupo das nações que 
dispõem de trens-bala. O Ministério dos Transportes prevê 
o lançamento do edital de licitação internacional para a 
construção da ferrovia de alta velocidade Rio-São Paulo. A 
viagem ligará os 403 quilômetros entre a Central do Brasil, 
no Rio, e a Estação da Luz, no centro da capital paulista, 
em uma hora e 25 minutos. 
Disponível em: http://oglobo.globo.com. 
Acesso em: 14 jul. 2009. 
Devido à alta velocidade, um dos problemas a ser 
enfrentado na escolha do trajeto que será percorrido pelo 
trem é o dimensionamento das curvas. Considerando-se 
que 
uma 
aceleração 
lateral 
confortável 
para 
os 
passageiros e segura para o trem seja de 0,1 g, em que g 
é a aceleração da gravidade (considerada igual a 10 m/s2), 
e que a velocidade do trem se mantenha constante em 
todo o percurso, seria correto prever que as curvas 
existentes no trajeto deveriam ter raio de curvatura mínimo 
de, aproximadamente,`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `80 m.` },
      { id: 'B', type: 'text', value: `430 m.` },
      { id: 'C', type: 'text', value: `800 m.` },
      { id: 'D', type: 'text', value: `1.600 m.` },
      { id: 'E', type: 'text', value: `6.400 m.` },
    ],
    correct: 'E',
    explanation: `A aceleração lateral máxima confortável é a aceleração centrípeta: a_cp = 0,1·g = 0,1·10 = 1 m/s². A velocidade do trem é v = ΔS/Δt = 403 km ÷ (1 h 25 min = 1,417 h) ≈ 284 km/h ≈ 79 m/s. Como a_cp = v²/R, o raio mínimo de curvatura é R = v²/a_cp = (79)²/1 ≈ 6 240 m. O valor mais próximo é 6 400 m (E).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O manual de instruções de um aparelho de ar-
condicionado apresenta a seguinte tabela, com dados 
técnicos para diversos modelos: 
 
Capacidade de 
refrigeração 
kW/(BTU/h) 
Potência 
(W) 
Corrente 
elétrica - 
ciclo frio 
(A) 
Eficiência 
energética 
COP (W/W) 
Vazão de 
ar (m3/h)
Frequência 
(Hz) 
3,52/(12.000) 
1.193 
5,8 
2,95 
550 
60 
5,42/(18.000) 
1.790 
8,7 
2,95 
800 
60 
5,42/(18.000) 
1.790 
8,7 
2,95 
800 
60 
6,45/(22.000) 
2.188 
10,2 
2,95 
960 
60 
6,45/(22.000) 
2.188 
10,2 
2,95 
960 
60 
Disponível em: http://www.institucional.brastemp.com.br. 
Acesso em: 13 jul. 2009 (adaptado). 
Considere-se que um auditório possua capacidade para 
40 pessoas, cada uma produzindo uma quantidade média 
de calor, e que praticamente todo o calor que flui para fora 
do auditório o faz por meio dos aparelhos de ar-
condicionado. Nessa situação, entre as informações 
listadas, aquelas essenciais para se determinar quantos 
e/ou quais aparelhos de ar-condicionado são precisos para 
manter, com lotação máxima, a temperatura interna do 
auditório agradável e constante, bem como determinar a 
espessura da fiação do circuito elétrico para a ligação 
desses aparelhos, são`,
    images: ['/enem/2009/images/enem_2009_d1_q18.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `vazão de ar e potência.` },
      { id: 'B', type: 'text', value: `vazão de ar e corrente elétrica - ciclo frio.` },
      { id: 'C', type: 'text', value: `eficiência energética e potência.` },
      { id: 'D', type: 'text', value: `capacidade de refrigeração e frequência.` },
      { id: 'E', type: 'text', value: `capacidade de refrigeração e corrente elétrica - ciclo 
frio.` },
    ],
    correct: 'E',
    explanation: `Para decidir quantos aparelhos são necessários, compara-se o calor gerado pelas 40 pessoas com o que cada aparelho consegue retirar, ou seja, usa-se a capacidade de refrigeração. Para dimensionar a espessura (seção) da fiação, usa-se a corrente elétrica – ciclo frio, pois a seção do condutor deve suportar a corrente total exigida (2ª Lei de Ohm, R = ρL/A, com A proporcional à corrente). Assim, as informações essenciais são capacidade de refrigeração e corrente elétrica – ciclo frio (E). Vazão de ar, potência, eficiência energética e frequência não atendem simultaneamente às duas exigências.`,
    subject: ['fis'],
    topics: ['Termologia', 'Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A instalação elétrica de uma casa envolve várias 
etapas, desde a alocação dos dispositivos, instrumentos e 
aparelhos elétricos, até a escolha dos materiais que a 
compõem, passando pelo dimensionamento da potência 
requerida, da fiação necessária, dos eletrodutos*, entre 
outras. 
 
Para cada aparelho elétrico existe um valor de 
potência associado. Valores típicos de potências para 
alguns aparelhos elétricos são apresentados no quadro 
seguinte: 
 
 
*Eletrodutos são condutos por onde passa a fiação de uma instalação 
elétrica, com a finalidade de protegê-la. 
 
 
A escolha das lâmpadas é essencial para 
obtenção de uma boa iluminação. A potência da lâmpada 
deverá estar de acordo com o tamanho do cômodo a ser 
iluminado. O quadro a seguir mostra a relação entre as 
áreas dos cômodos (em m2) e as potências das lâmpadas 
(em W), e foi utilizado como referência para o primeiro 
pavimento de uma residência. 
 
 
 
 
Obs.: Para efeitos dos cálculos das áreas, as paredes são 
desconsideradas. 
Considerando a planta baixa fornecida, com todos os 
aparelhos em funcionamento, a potência total, em watts, 
será de`,
    images: ['/enem/2009/images/enem_2009_d1_q19_1.jpg', '/enem/2009/images/enem_2009_d1_q19_2.jpg', '/enem/2009/images/enem_2009_d1_q19_3.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4.070.` },
      { id: 'B', type: 'text', value: `4.270.` },
      { id: 'C', type: 'text', value: `4.320.` },
      { id: 'D', type: 'text', value: `4.390.` },
      { id: 'E', type: 'text', value: `4.470.` },
    ],
    correct: 'D',
    explanation: `Primeiro somam-se as potências dos aparelhos: 120 + 3 000 + 500 + 200 + 200 + 50 = 4 070 W. Depois, pela tabela área–potência, atribui-se a lâmpada de cada cômodo: sala (3 × 3 = 9 m² → 100 W), banheiro (≈ 3,1 m² → 60 W), corredor (≈ 1,3 m² → 60 W) e quarto (≈ 8,4 m² → 100 W), totalizando 320 W. A potência total é 4 070 + 320 = 4 390 W (D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O esquema mostra um diagrama de bloco de uma estação 
geradora de eletricidade abastecida por combustível fóssil. 
 
 
HINRICHS, R. A.; KLEINBACH, M. Energia e meio ambiente. 
São Paulo: Pioneira Thomson Learning, 2003 (adaptado). 
Se fosse necessário melhorar o rendimento dessa usina, 
que forneceria eletricidade para abastecer uma cidade, 
qual das seguintes ações poderia resultar em alguma 
economia de energia, sem afetar a capacidade de geração 
da usina?`,
    images: ['/enem/2009/images/enem_2009_d1_q20.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Reduzir a quantidade de combustível fornecido à usina 
para ser queimado.` },
      { id: 'B', type: 'text', value: `Reduzir o volume de água do lago que circula no 
condensador de vapor.` },
      { id: 'C', type: 'text', value: `Reduzir o tamanho da bomba usada para devolver a 
água líquida à caldeira.` },
      { id: 'D', type: 'text', value: `Melhorar a capacidade dos dutos com vapor 
conduzirem calor para o ambiente.` },
      { id: 'E', type: 'text', value: `Usar o calor liberado com os gases pela chaminé para 
mover um outro gerador.` },
    ],
    correct: 'E',
    explanation: `Boa parte da energia da usina é perdida como calor nos gases quentes que escapam pela chaminé. Aproveitar esse calor residual para mover um outro gerador (cogeração) recupera energia que seria desperdiçada, aumentando o rendimento sem afetar a capacidade de geração (E). Reduzir o combustível (A) diminuiria a geração; reduzir a água do condensador (B) ou melhorar a condução de calor dos dutos para o ambiente (D) aumentariam as perdas; e a bomba de retorno (C) tem contribuição desprezível no rendimento.`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os seres vivos apresentam diferentes ciclos de 
vida, caracterizados pelas fases nas quais gametas são 
produzidos e pelos processos reprodutivos que resultam 
na geração de novos indivíduos. 
 
Considerando-se um modelo simplificado padrão para 
geração 
de 
indivíduos 
viáveis, 
a 
alternativa 
que 
corresponde ao observado em seres humanos é:`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2009/images/enem_2009_d1_q21_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2009/images/enem_2009_d1_q21_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2009/images/enem_2009_d1_q21_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2009/images/enem_2009_d1_q21_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2009/images/enem_2009_d1_q21_E.jpg` },
    ],
    correct: 'C',
    explanation: `No ciclo de vida humano a meiose é gamética: o indivíduo adulto é diploide (2n) e sofre meiose apenas para formar os gametas haploides (n). A fecundação une dois gametas (n + n), restaurando o zigoto diploide (2n), que se multiplica por sucessivas mitoses até o adulto. O esquema que representa esse padrão — adulto 2n, meiose restrita à formação dos gametas e única fase haploide nos próprios gametas — é o da alternativa C.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Um medicamento, após ser ingerido, atinge a 
corrente sanguínea e espalha-se pelo organismo, mas, 
como suas moléculas “não sabem” onde é que está o 
problema, podem atuar em locais diferentes do local “alvo” 
e desencadear efeitos além daqueles desejados. Não seria 
perfeito se as moléculas dos medicamentos soubessem 
exatamente onde está o problema e fossem apenas até 
aquele local exercer sua ação? A técnica conhecida como 
iontoforese, indolor e não invasiva, promete isso. Como 
mostram as figuras, essa nova técnica baseia-se na 
aplicação de uma corrente elétrica de baixa intensidade 
sobre a pele do paciente, permitindo que fármacos 
permeiem membranas biológicas e alcancem a corrente 
sanguínea, sem passar pelo estômago. Muitos pacientes 
relatam apenas um formigamento no local de aplicação. O 
objetivo da corrente elétrica é formar poros que permitam a 
passagem do fármaco de interesse. A corrente elétrica é 
distribuída por eletrodos, positivo e negativo, por meio de 
uma solução aplicada sobre a pele. Se a molécula do 
medicamento tiver carga elétrica positiva ou negativa, ao 
entrar em contato com o eletrodo de carga de mesmo 
sinal, ela será repelida e forçada a entrar na pele 
(eletrorrepulsão - A). Se for neutra, a molécula será 
forçada a entrar na pele juntamente com o fluxo de 
solvente fisiológico que se forma entre os eletrodos 
(eletrosmose - B). 
 
 
 
GRATIERI, T; GELFUSO, G. M.; LOPES, R. F. V. Medicação do futuro-iontoforese facilita 
entrada de fármacos no organismo. Ciência Hoje, vol 44, no 259, maio 2009 (adaptado). 
De acordo com as informações contidas no texto e nas 
figuras, o uso da iontoforese`,
    images: ['/enem/2009/images/enem_2009_d1_q22_1.jpg', '/enem/2009/images/enem_2009_d1_q22_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `provoca ferimento na pele do paciente ao serem 
introduzidos os eletrodos, rompendo o epitélio.` },
      { id: 'B', type: 'text', value: `aumenta o risco de estresse nos pacientes, causado 
pela aplicação da corrente elétrica.` },
      { id: 'C', type: 'text', value: `inibe o mecanismo de ação dos medicamentos no 
tecido-alvo, pois estes passam a entrar por meio da 
pele.` },
      { id: 'D', type: 'text', value: `diminui o efeito colateral dos medicamentos, se 
comparados com aqueles em que a ingestão se faz 
por via oral.` },
      { id: 'E', type: 'text', value: `deve ser eficaz para medicamentos constituídos de 
moléculas polares e ineficaz, se essas forem apolares.` },
    ],
    correct: 'D',
    explanation: `A iontoforese entrega o fármaco de forma localizada e dirigida através da pele, por meio de uma corrente elétrica de baixa intensidade (indolor e não invasiva), sem passar pelo trato digestório. Por ser direcionada ao alvo e evitar a distribuição sistêmica inespecífica da via oral, ela diminui os efeitos colaterais dos medicamentos em comparação com a ingestão oral (D). O texto afirma que a técnica não fere a pele (A), não causa estresse relevante (B), não inibe a ação no tecido-alvo (C) e funciona também para moléculas neutras, por eletrosmose (o que contraria E).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Cerca de 1% do lixo urbano é constituído por 
resíduos sólidos contendo elementos tóxicos. Entre esses 
elementos estão metais pesados como o cádmio, o 
chumbo e o mercúrio, componentes de pilhas e baterias, 
que são perigosos à saúde humana e ao meio ambiente. 
Quando descartadas em lixos comuns, pilhas e baterias 
vão para aterros sanitários ou lixões a céu aberto, e o 
vazamento de seus componentes contamina o solo, os rios 
e o lençol freático, atingindo a flora e a fauna. Por serem 
bioacumulativos e não biodegradáveis, esses metais 
chegam de forma acumulada aos seres humanos, por meio 
da cadeia alimentar. A legislação vigente (Resolução 
CONAMA no 257/1999) regulamenta o destino de pilhas e 
baterias após seu esgotamento energético e determina aos 
fabricantes e/ou importadores a quantidade máxima 
permitida desses metais em cada tipo de pilha/bateria, 
porém o problema ainda persiste. 
Disponível em: http://www.mma.gov.br. 
Acesso em: 11 jul. 2009 (adaptado). 
Uma 
medida 
que 
poderia 
contribuir 
para 
acabar 
definitivamente com o problema da poluição ambiental por 
metais pesados relatado no texto seria`,
    alternatives: [
      { id: 'A', type: 'text', value: `deixar de consumir aparelhos elétricos que utilizem 
pilha ou bateria como fonte de energia.` },
      { id: 'B', type: 'text', value: `usar apenas pilhas ou baterias recarregáveis e de vida 
útil longa e evitar ingerir alimentos contaminados, 
especialmente peixes.` },
      { id: 'C', type: 'text', value: `devolver pilhas e baterias, após o esgotamento da 
energia armazenada, à rede de assistência técnica 
especializada 
para 
repasse 
a 
fabricantes 
e/ou 
importadores.` },
      { id: 'D', type: 'text', value: `criar nas cidades, especialmente naquelas com mais 
de 100 mil habitantes, pontos estratégicos de coleta de 
baterias e pilhas, para posterior repasse a fabricantes 
e/ou importadores.` },
      { id: 'E', type: 'text', value: `exigir que fabricantes invistam em pesquisa para a 
substituição desses metais tóxicos por substâncias 
menos nocivas ao homem e ao ambiente, e que não 
sejam bioacumulativas.` },
    ],
    correct: 'E',
    explanation: `Os metais pesados (Cd, Pb, Hg) de pilhas e baterias são tóxicos, bioacumulativos e não biodegradáveis; mesmo com coleta e legislação, continuam a contaminar o ambiente sempre que há descarte inadequado. A medida capaz de acabar definitivamente com o problema é exigir que os fabricantes substituam esses metais por substâncias menos nocivas e não bioacumulativas (E), eliminando a própria fonte da contaminação. Deixar de consumir, usar recarregáveis ou criar pontos de coleta/devolução (A, B, C, D) apenas reduzem o problema, pois dependem do comportamento das pessoas e não eliminam o poluente.`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Umidade relativa do ar é o termo usado para 
descrever a quantidade de vapor de água contido na 
atmosfera. Ela é definida pela razão entre o conteúdo real 
de umidade de uma parcela de ar e a quantidade de 
umidade que a mesma parcela de ar pode armazenar na 
mesma temperatura e pressão quando está saturada de 
vapor, isto é, com 100% de umidade relativa. O gráfico 
representa a relação entre a umidade relativa do ar e sua 
temperatura ao longo de um período de 24 horas em um 
determinado local. 
 
 
 
Considerando-se as informações do texto e do gráfico, 
conclui-se que`,
    images: ['/enem/2009/images/enem_2009_d1_q24.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a insolação é um fator que provoca variação da 
umidade relativa do ar.` },
      { id: 'B', type: 'text', value: `o ar vai adquirindo maior quantidade de vapor de água 
à medida que se aquece.` },
      { id: 'C', type: 'text', value: `a presença de umidade relativa do ar é diretamente 
proporcional à temperatura do ar.` },
      { id: 'D', type: 'text', value: `a umidade relativa do ar indica, em termos absolutos, 
a quantidade de vapor de água existente na 
atmosfera.` },
      { id: 'E', type: 'text', value: `a variação da umidade do ar se verifica no verão, e 
não no inverno, quando as temperaturas permanecem 
baixas.` },
    ],
    correct: 'A',
    explanation: `O gráfico mostra que, nos horários de temperatura mais alta, a umidade relativa é menor, e vice-versa (relação inversa ao longo das 24 horas). Como o aquecimento diurno decorre da insolação, conclui-se que a insolação é um fator que provoca a variação da umidade relativa do ar (A): ao se aquecer, o ar aumenta sua capacidade de reter vapor, e a umidade relativa (razão entre o vapor presente e o de saturação) diminui. A umidade relativa não cresce com a temperatura (contraria B e C) nem indica, em termos absolutos, a quantidade de vapor (D).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os planos de controle e erradicação de doenças em 
animais envolvem ações de profilaxia e dependem em 
grande medida da correta utilização e interpretação de 
testes diagnósticos. O quadro mostra um exemplo 
hipotético de aplicação de um teste diagnóstico. 
 
 
 
Manual Técnico do Programa Nacional de Controle e Erradicação da Brucelose e da 
Tuberculose Animal - PNCEBT. Brasília: Ministério da Agricultura, Pecuária e 
Abastecimento, 2006 (adaptado). 
Considerando que, no teste diagnóstico, a sensibilidade é 
a probabilidade de um animal infectado ser classificado 
como positivo e a especificidade é a probabilidade de um 
animal não infectado ter resultado negativo, a interpretação 
do quadro permite inferir que`,
    images: ['/enem/2009/images/enem_2009_d1_q25.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a especificidade aponta um número de 5 falsos 
positivos.` },
      { id: 'B', type: 'text', value: `o teste, a cada 100 indivíduos infectados, classificaria 
90 como positivos.` },
      { id: 'C', type: 'text', value: `o teste classificaria 96 como positivos em cada 100 
indivíduos não infectados.` },
      { id: 'D', type: 'text', value: `ações de profilaxia são medidas adotadas para o 
tratamento de falsos positivos.` },
      { id: 'E', type: 'text', value: `testes de alta sensibilidade resultam em maior número 
de animais falsos negativos comparado a um teste de 
baixa sensibilidade.` },
    ],
    correct: 'B',
    explanation: `A sensibilidade é a probabilidade de um animal infectado ser classificado como positivo. Pelo quadro, entre os animais infectados, 45 de 50 deram positivo, o que corresponde a uma sensibilidade de 90%. De forma proporcional, a cada 100 indivíduos infectados o teste classificaria 90 como positivos (B). As demais alternativas confundem especificidade e falsos positivos (A e C), o conceito de profilaxia (D) ou invertem a relação entre sensibilidade e número de falsos negativos (E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O processo de industrialização tem gerado sérios
problemas de ordem ambiental, econômica e social, entre
os quais se pode citar a chuva ácida. Os ácidos
usualmente presentes em maiores proporções na água da
chuva são o H₂CO₃, formado pela reação do CO₂
atmosférico com a água, o HNO₃, o HNO₂, o H₂SO₄ e o
H₂SO₃. Esses quatro últimos são formados principalmente
a partir da reação da água com os óxidos de nitrogênio e 
de enxofre gerados pela queima de combustíveis fósseis. 
 
A formação de chuva mais ou menos ácida depende não 
só da concentração do ácido formado, como também do 
tipo de ácido. Essa pode ser uma informação útil na 
elaboração de estratégias para minimizar esse problema 
ambiental. Se consideradas concentrações idênticas, quais 
dos ácidos citados no texto conferem maior acidez às 
águas das chuvas?`,
    alternatives: [
      { id: 'A', type: 'text', value: `HNO₃ e HNO₂.` },
      { id: 'B', type: 'text', value: `H₂SO₄ e H₂SO₃.` },
      { id: 'C', type: 'text', value: `H₂SO₃ e HNO₂.` },
      { id: 'D', type: 'text', value: `H₂SO₄ e HNO₃.` },
      { id: 'E', type: 'text', value: `H₂CO₃ e H₂SO₃.` },
    ],
    correct: 'D',
    explanation: `Para concentrações idênticas, a acidez depende da força do ácido, isto é, do seu grau de ionização, que determina a quantidade de H⁺ liberada. Entre os ácidos citados, os fortes são o H₂SO₄ (sulfúrico) e o HNO₃ (nítrico), enquanto o H₂CO₃, o HNO₂ e o H₂SO₃ são ácidos fracos, que se ionizam pouco. Portanto, os ácidos que conferem maior acidez às águas das chuvas são o H₂SO₄ e o HNO₃ (D).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O ônibus espacial Atlantis foi lançado ao espaço 
com cinco astronautas a bordo e uma câmera nova, que 
iria substituir uma outra danificada por um curto-circuito no 
telescópio Hubble. Depois de entrarem em órbita a 560 km 
de altura, os astronautas se aproximaram do Hubble. Dois 
astronautas saíram da Atlantis e se dirigiram ao telescópio. 
Ao abrir a porta de acesso, um deles exclamou: “Esse 
telescópio tem a massa grande, mas o peso é pequeno.” 
 
 
 
Considerando o texto e as leis de Kepler, pode-se afirmar 
que a frase dita pelo astronauta`,
    images: ['/enem/2009/images/enem_2009_d1_q27.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `se justifica porque o tamanho do telescópio determina 
a sua massa, enquanto seu pequeno peso decorre da 
falta de ação da aceleração da gravidade.` },
      { id: 'B', type: 'text', value: `se justifica ao verificar que a inércia do telescópio é 
grande comparada à dele próprio, e que o peso do 
telescópio é pequeno porque a atração gravitacional 
criada por sua massa era pequena.` },
      { id: 'C', type: 'text', value: `não se justifica, porque a avaliação da massa e do 
peso de objetos em órbita tem por base as leis de 
Kepler, que não se aplicam a satélites artificiais.` },
      { id: 'D', type: 'text', value: `não se justifica, porque a força-peso é a força exercida 
pela gravidade terrestre, neste caso, sobre o 
telescópio e é a responsável por manter o próprio 
telescópio em órbita.` },
      { id: 'E', type: 'text', value: `não se justifica, pois a ação da força-peso implica a 
ação de uma força de reação contrária, que não existe 
naquele ambiente. A massa do telescópio poderia ser 
avaliada simplesmente pelo seu volume.` },
    ],
    correct: 'D',
    explanation: `A frase não se justifica. A força-peso é a atração gravitacional da Terra sobre o telescópio; a 560 km de altitude a gravidade ainda é intensa (cerca de 90% da de superfície) e é exatamente essa força-peso que atua como força centrípeta, mantendo o telescópio em órbita (D). O que o astronauta percebe é a imponderabilidade (peso aparente nulo), por estarem ambos em queda livre, mas o peso real continua existindo. Não há ausência de gravidade (A), as leis de Kepler se aplicam a satélites (C) e a análise da alternativa E é fisicamente incorreta.`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Uma pesquisadora deseja reflorestar uma área de 
mata ciliar quase que totalmente desmatada. Essa 
formação vegetal é um tipo de floresta muito comum nas 
margens de rios dos cerrados no Brasil central e, em seu 
clímax, possui vegetação arbórea perene e apresenta 
dossel fechado, com pouca incidência luminosa no solo e 
nas plântulas. Sabe-se que a incidência de luz, a 
disponibilidade de nutrientes e a umidade do solo são os 
principais fatores do meio ambiente físico que influenciam 
no desenvolvimento da planta. Para testar unicamente os 
efeitos da variação de luz, a pesquisadora analisou, em 
casas de vegetação com condições controladas, o 
desenvolvimento de plantas de 10 espécies nativas da 
região desmatada sob quatro condições de luminosidade: 
uma sob sol pleno e as demais em diferentes níveis de 
sombreamento. Para cada tratamento experimental, a 
pesquisadora relatou se o desenvolvimento da planta foi 
bom, razoável ou ruim, de acordo com critérios 
específicos. Os resultados obtidos foram os seguintes: 
 
 
 
Para o reflorestamento da região desmatada,`,
    images: ['/enem/2009/images/enem_2009_d1_q28.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a espécie 8 é mais indicada que a 1, uma vez que 
aquela possui melhor adaptação a regiões com maior 
incidência de luz.` },
      { id: 'B', type: 'text', value: `recomenda-se a utilização de espécies pioneiras, isto 
é, aquelas que suportam alta incidência de luz, como 
as espécies 2, 3 e 5.` },
      { id: 'C', type: 'text', value: `sugere-se o uso de espécies exóticas, pois somente 
essas podem suportar a alta incidência luminosa 
característica de regiões desmatadas.` },
      { id: 'D', type: 'text', value: `espécies de comunidade clímax, como as 4 e 7, são 
as mais indicadas, uma vez que possuem boa 
capacidade de aclimatação a diferentes ambientes.` },
      { id: 'E', type: 'text', value: `é recomendado o uso de espécies com melhor 
desenvolvimento à sombra, como as plantas das 
espécies 4, 6, 7, 9 e 10, pois essa floresta, mesmo no 
estágio 
de 
degradação 
referido, 
possui 
dossel 
fechado, o que impede a entrada de luz.` },
    ],
    correct: 'B',
    explanation: `Uma área recém-desmatada tem solo exposto e alta incidência de luz. O reflorestamento deve começar por espécies pioneiras, que toleram e se desenvolvem bem sob forte luminosidade (sol pleno); pelos resultados do experimento, enquadram-se nessa condição as espécies 2, 3 e 5 (B). Essas pioneiras crescem, sombreiam o ambiente e preparam o terreno para a posterior entrada das espécies de estágios mais avançados (clímax, adaptadas à sombra). Iniciar com espécies de clímax ou de sombra (D e E) ou com espécies exóticas (C) é inadequado.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os núcleos dos átomos são constituídos de 
prótons 
e 
nêutrons, 
sendo 
ambos 
os 
principais 
responsáveis pela sua massa. Nota-se que, na maioria dos 
núcleos, essas partículas não estão presentes na mesma 
proporção. O gráfico mostra a quantidade de nêutrons (N) 
em função da quantidade de prótons (Z) para os núcleos 
estáveis conhecidos. 
 
KAPLAN, I. Física Nuclear. Rio de Janeiro: Guanabara Dois, 
1978 (adaptado). 
O antimônio é um elemento químico que possui 50 prótons 
e possui vários isótopos ― átomos que só se diferem pelo 
número de nêutrons. De acordo com o gráfico, os isótopos 
estáveis do antimônio possuem`,
    images: ['/enem/2009/images/enem_2009_d1_q29.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `entre 12 e 24 nêutrons a menos que o número de 
prótons.` },
      { id: 'B', type: 'text', value: `exatamente o mesmo número de prótons e nêutrons.` },
      { id: 'C', type: 'text', value: `entre 0 e 12 nêutrons a mais que o número de prótons.` },
      { id: 'D', type: 'text', value: `entre 12 e 24 nêutrons a mais que o número de 
prótons.` },
      { id: 'E', type: 'text', value: `entre 0 e 12 nêutrons a menos que o número de 
prótons.` },
    ],
    correct: 'D',
    explanation: `Para núcleos leves vale N ≈ Z, mas, à medida que o número de prótons cresce, os núcleos estáveis passam a ter excesso de nêutrons: a linha de estabilidade afasta-se da reta N = Z. Lendo o gráfico em Z = 50 (antimônio), os isótopos estáveis situam-se em torno de N ≈ 62 a 74 nêutrons. Logo, esses isótopos possuem entre 12 e 24 nêutrons a mais que o número de prótons (D).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `É possível, com 1 litro de gasolina, usando todo o 
calor produzido por sua combustão direta, aquecer 200 
litros de água de 20 °C a 55 °C. Pode-se efetuar esse 
mesmo aquecimento por um gerador de eletricidade, que 
consome 1 litro de gasolina por hora e fornece 110 V a um 
resistor de 11 Ω, imerso na água, durante um certo 
intervalo de tempo. Todo o calor liberado pelo resistor é 
transferido à água. 
 
Considerando que o calor específico da água é 
igual a 4,19 J g-1 °C-1, aproximadamente qual a quantidade 
de gasolina consumida para o aquecimento de água obtido 
pelo gerador, quando comparado ao obtido a partir da 
combustão?`,
    alternatives: [
      { id: 'A', type: 'text', value: `A quantidade de gasolina consumida é igual para os 
dois casos.` },
      { id: 'B', type: 'text', value: `A quantidade de gasolina consumida pelo gerador é 
duas vezes maior que a consumida na combustão.` },
      { id: 'C', type: 'text', value: `A quantidade de gasolina consumida pelo gerador é 
duas vezes menor que a consumida na combustão.` },
      { id: 'D', type: 'text', value: `A quantidade de gasolina consumida pelo gerador é 
sete vezes maior que a consumida na combustão.` },
      { id: 'E', type: 'text', value: `A quantidade de gasolina consumida pelo gerador é 
sete vezes menor que a consumida na combustão.` },
    ],
    correct: 'D',
    explanation: `Calor para aquecer a água (calor sensível): Q = m·c·ΔT = 200 000 g × 4,19 × (55 − 20) ≈ 2,93 × 10⁷ J. A potência elétrica do gerador é P = U²/R = 110²/11 = 1 100 W. O tempo necessário é t = Q/P = 2,93 × 10⁷ ÷ 1 100 ≈ 2,67 × 10⁴ s ≈ 7,4 h. Como o gerador consome 1 L de gasolina por hora, ele gasta cerca de 7 L para o mesmo aquecimento que a combustão direta obteve com 1 L; ou seja, o gerador consome aproximadamente sete vezes mais gasolina (D).`,
    subject: ['fis'],
    topics: ['Termologia', 'Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O progresso da tecnologia introduziu diversos 
artefatos geradores de campos eletromagnéticos. Uma das 
mais empregadas invenções nessa área são os telefones 
celulares e smartphones. As tecnologias de transmissão de 
celular atualmente em uso no Brasil contemplam dois 
sistemas. O primeiro deles é operado entre as frequências 
de 800 MHz e 900 MHz e constitui os chamados sistemas 
TDMA/CDMA. Já a tecnologia GSM, ocupa a frequência de 
1.800 MHz. 
 
Considerando que a intensidade de transmissão e o nível 
de recepção “celular” sejam os mesmos para as 
tecnologias de transmissão TDMA/CDMA ou GSM, se um 
engenheiro tiver de escolher entre as duas tecnologias 
para obter a mesma cobertura, levando em consideração 
apenas o número de antenas em uma região, ele deverá 
escolher:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a tecnologia GSM, pois é a que opera com ondas de 
maior comprimento de onda.` },
      { id: 'B', type: 'text', value: `a tecnologia TDMA/CDMA, pois é a que apresenta 
Efeito Doppler mais pronunciado.` },
      { id: 'C', type: 'text', value: `a tecnologia GSM, pois é a que utiliza ondas que se 
propagam com maior velocidade.` },
      { id: 'D', type: 'text', value: `qualquer uma das duas, pois as diferenças nas 
frequências são compensadas pelas diferenças nos 
comprimentos de onda.` },
      { id: 'E', type: 'text', value: `qualquer uma das duas, pois nesse caso as 
intensidades decaem igualmente da mesma forma, 
independentemente da frequência.` },
    ],
    correct: 'E',
    explanation: `A intensidade de uma onda eletromagnética decai com a distância pelo espalhamento geométrico, segundo I = P/(4πr²), relação que independe da frequência da onda. Como o enunciado fixa a mesma intensidade de transmissão e o mesmo nível de recepção para as duas tecnologias, o alcance — e, portanto, o número de antenas necessárias para cobrir a região — é o mesmo nos dois casos. Logo, o engenheiro pode escolher qualquer uma das duas, pois as intensidades decaem da mesma forma, independentemente da frequência (E).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Considere um equipamento capaz de emitir 
radiação eletromagnética com comprimento de onda bem 
menor que a da radiação ultravioleta. Suponha que a 
radiação emitida por esse equipamento foi apontada para 
um tipo específico de filme fotográfico e entre o 
equipamento e o filme foi posicionado o pescoço de um 
indivíduo. Quanto mais exposto à radiação, mais escuro se 
torna o filme após a revelação. Após acionar o 
equipamento e revelar o filme, evidenciou-se a imagem 
mostrada na figura abaixo. 
 
 
 
Dentre os fenômenos decorrentes da interação entre a 
radiação e os átomos do indivíduo que permitem a 
obtenção desta imagem inclui-se a`,
    images: ['/enem/2009/images/enem_2009_d1_q32.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `absorção 
da 
radiação 
eletromagnética 
e 
a 
consequente ionização dos átomos de cálcio, que se 
transformam em átomos de fósforo.` },
      { id: 'B', type: 'text', value: `maior absorção da radiação eletromagnética pelos 
átomos de cálcio que por outros tipos de átomos.` },
      { id: 'C', type: 'text', value: `maior absorção da radiação eletromagnética pelos 
átomos de carbono que por átomos de cálcio.` },
      { id: 'D', type: 'text', value: `maior refração ao atravessar os átomos de carbono 
que os átomos de cálcio.` },
      { id: 'E', type: 'text', value: `maior ionização de moléculas de água que de átomos 
de carbono.` },
    ],
    correct: 'B',
    explanation: `A radiação de comprimento de onda bem menor que o do ultravioleta é o raio X. A imagem se forma porque os tecidos absorvem a radiação de maneira diferente: os ossos, ricos em cálcio (átomos mais pesados e densos), absorvem muito mais os raios X do que os tecidos moles, constituídos sobretudo por átomos leves (carbono, hidrogênio, oxigênio). Onde há mais absorção (ossos) chega menos radiação ao filme, que fica claro; onde há menos absorção, o filme escurece. Assim, o fenômeno envolvido é a maior absorção da radiação eletromagnética pelos átomos de cálcio que por outros tipos de átomos (B).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os ratos Peromyscus polionotus encontram-se distribuídos em ampla região na América do Norte. A pelagem de 
ratos dessa espécie varia do marrom claro até o escuro, sendo que os ratos de uma mesma população têm coloração muito 
semelhante. Em geral, a coloração da pelagem também é muito parecida à cor do solo da região em que se encontram, que 
também apresenta a mesma variação de cor, distribuída ao longo de um gradiente sul-norte. Na figura, encontram-se 
representadas sete diferentes populações de P. polionotus. Cada população é representada pela pelagem do rato, por uma 
amostra de solo e por sua posição geográfica no mapa. 
 
 
MULLEN, L. M.; HOEKSTRA, H. E. Natural selection along an environmental gradient: a classic cline in mouse pigmentation. Evolution, 2008. 
O mecanismo evolutivo envolvido na associação entre cores de pelagem e de substrato é`,
    images: ['/enem/2009/images/enem_2009_d1_q33.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a alimentação, pois pigmentos de terra são absorvidos e alteram a cor da pelagem dos roedores.` },
      { id: 'B', type: 'text', value: `o fluxo gênico entre as diferentes populações, que mantém constante a grande diversidade interpopulacional.` },
      { id: 'C', type: 'text', value: `a seleção natural, que, nesse caso, poderia ser entendida como a sobrevivência diferenciada de indivíduos com 
características distintas.` },
      { id: 'D', type: 'text', value: `a mutação genética, que, em certos ambientes, como os de solo mais escuro, têm maior ocorrência e capacidade de 
alterar significativamente a cor da pelagem dos animais.` },
      { id: 'E', type: 'text', value: `a herança de caracteres adquiridos, capacidade de organismos se adaptarem a diferentes ambientes e transmitirem 
suas características genéticas aos descendentes.` },
    ],
    correct: 'C',
    explanation: `A coloração da pelagem acompanha a cor do solo ao longo do gradiente geográfico porque os indivíduos com pelagem semelhante ao substrato ficam camuflados e escapam melhor dos predadores, deixando mais descendentes. Esse é o mecanismo da seleção natural: a sobrevivência e a reprodução diferenciadas dos indivíduos cujas características são mais vantajosas em cada ambiente (C). Não se trata de alimentação alterando a cor (A), de fluxo gênico homogeneizador (B), de mutação dirigida pelo ambiente (D) nem de herança de caracteres adquiridos/lamarckismo (E).`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O lixo orgânico de casa - constituído de restos de verduras, frutas, legumes, cascas de ovo, aparas de grama, 
entre outros -, se for depositado nos lixões, pode contribuir para o aparecimento de animais e de odores indesejáveis. 
Entretanto, sua reciclagem gera um excelente adubo orgânico, que pode ser usado no cultivo de hortaliças, frutíferas e 
plantas ornamentais. A produção do adubo ou composto orgânico se dá por meio da compostagem, um processo simples 
que requer alguns cuidados especiais. O material que é acumulado diariamente em recipientes próprios deve ser revirado 
com auxílio de ferramentas adequadas, semanalmente, de forma a homogeneizá-lo. É preciso também umedecê-lo 
periodicamente. O material de restos de capina pode ser intercalado entre uma camada e outra de lixo da cozinha. Por meio 
desse método, o adubo orgânico estará pronto em aproximadamente dois a três meses.
Como usar o lixo orgânico em casa. Ciência Hoje, v. 42, jun. 2008 (adaptado).
Suponha que uma pessoa, desejosa de fazer seu próprio adubo orgânico, tenha seguido o procedimento descrito no texto,
exceto no que se refere ao umedecimento periódico do composto. Nessa situação,`,
    alternatives: [
      { id: 'A', type: 'text', value: `o processo de compostagem iria produzir intenso mau cheiro.` },
      { id: 'B', type: 'text', value: `o adubo formado seria pobre em matéria orgânica que não foi transformada em composto.` },
      { id: 'C', type: 'text', value: `a falta de água no composto vai impedir que microrganismos decomponham a matéria orgânica.` },
      { id: 'D', type: 'text', value: `a falta de água no composto iria elevar a temperatura da mistura, o que resultaria na perda de nutrientes essenciais.` },
      { id: 'E', type: 'text', value: `apenas microrganismos que independem de oxigênio poderiam agir sobre a matéria orgânica e transformá-la em 
adubo.` },
    ],
    correct: 'C',
    explanation: `A compostagem depende da ação de microrganismos decompositores (bactérias e fungos) que degradam a matéria orgânica, e esses organismos precisam de água para sua atividade metabólica e proliferação. Sem o umedecimento periódico, a falta de água impede que os microrganismos decomponham a matéria orgânica, interrompendo a formação do adubo (C). O mau cheiro intenso (A) e a ação exclusiva de microrganismos anaeróbios (E) estão associados ao excesso de água e à falta de aeração, e não à sua falta.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O Sol representa uma fonte limpa e inesgotável de 
energia para o nosso planeta. Essa energia pode ser 
captada 
por 
aquecedores 
solares, 
armazenada 
e 
convertida posteriormente em trabalho útil. Considere 
determinada região cuja insolação - potência solar 
incidente na superfície da Terra - seja de 800 watts/m2. 
Uma usina termossolar utiliza concentradores solares 
parabólicos que chegam a dezenas de quilômetros de 
extensão. Nesses coletores solares parabólicos, a luz 
refletida pela superfície parabólica espelhada é focalizada 
em um receptor em forma de cano e aquece o óleo contido 
em seu interior a 400 °C. O calor desse óleo é transferido 
para a água, vaporizando-a em uma caldeira. O vapor em 
alta pressão movimenta uma turbina acoplada a um 
gerador de energia elétrica. 
 
 
 
Considerando que a distância entre a borda inferior e a 
borda superior da superfície refletora tenha 6 m de largura 
e que focaliza no receptor os 800 watts/m2 de radiação 
provenientes do Sol, e que o calor específico da água é 
1 cal g-1 ºC-1 = 4.200 J kg-1 ºC-1, então o comprimento linear 
do refletor parabólico necessário para elevar a temperatura 
de 1 m3 (equivalente a 1 t) de água de 20 °C para 100 °C, 
em uma hora, estará entre`,
    images: ['/enem/2009/images/enem_2009_d1_q35.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `15 m e 21 m.` },
      { id: 'B', type: 'text', value: `22 m e 30 m.` },
      { id: 'C', type: 'text', value: `105 m e 125 m.` },
      { id: 'D', type: 'text', value: `680 m e 710 m.` },
      { id: 'E', type: 'text', value: `6.700 m e 7.150 m.` },
    ],
    correct: 'A',
    explanation: `Calor para aquecer a água: Q = m·c·ΔT = 1 000 kg × 4 200 × (100 − 20) = 3,36 × 10⁸ J. A potência necessária para fazê-lo em 1 hora (3 600 s) é P = Q/t = 3,36 × 10⁸ ÷ 3 600 ≈ 9,3 × 10⁴ W. Com insolação de 800 W/m², a área coletora deve ser A = P/800 ≈ 116,7 m². Como a largura do refletor é 6 m, seu comprimento é L = A/6 ≈ 19,4 m, valor que está entre 15 m e 21 m (A).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O uso de protetores solares em situações de 
grande exposição aos raios solares como, por exemplo, 
nas praias, é de grande importância para a saúde. As 
moléculas ativas de um protetor apresentam, usualmente, 
anéis aromáticos conjugados com grupos carbonila, pois 
esses sistemas são capazes de absorver a radiação 
ultravioleta mais nociva aos seres humanos. A conjugação 
é definida como a ocorrência de alternância entre ligações 
simples e duplas em uma molécula. Outra propriedade das 
moléculas em questão é apresentar, em uma de suas 
extremidades, uma parte apolar responsável por reduzir a 
solubilidade do composto em água, o que impede sua 
rápida remoção quando do contato com a água. 
 
De acordo com as considerações do texto, qual das 
moléculas apresentadas a seguir é a mais adequada para 
funcionar como molécula ativa de protetores solares?`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2009/images/enem_2009_d1_q36_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2009/images/enem_2009_d1_q36_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2009/images/enem_2009_d1_q36_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2009/images/enem_2009_d1_q36_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2009/images/enem_2009_d1_q36_E.jpg` },
    ],
    correct: 'E',
    explanation: `O texto exige duas propriedades: anéis aromáticos conjugados a grupos carbonila (alternância de ligações simples e duplas, capaz de absorver a radiação ultravioleta) e, em uma das extremidades, uma parte apolar (que reduz a solubilidade em água e dificulta a remoção pelo contato com ela). A estrutura que reúne simultaneamente o sistema aromático conjugado com carbonila e a cauda apolar é a da alternativa E, portanto a mais adequada como molécula ativa do protetor solar. As demais não apresentam ao mesmo tempo a conjugação adequada e a porção apolar.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Sabe-se que o olho humano não consegue diferenciar 
componentes de cores e vê apenas a cor resultante, 
diferentemente do ouvido, que consegue distinguir, por 
exemplo, 
dois 
instrumentos 
diferentes 
tocados 
simultaneamente. Os raios luminosos do espectro visível, que 
têm comprimento de onda entre 380 nm e 780 nm, incidem na 
córnea, passam pelo cristalino e são projetados na retina. Na 
retina, encontram-se dois tipos de fotorreceptores, os cones e 
os bastonetes, que convertem a cor e a intensidade da luz 
recebida em impulsos nervosos. Os cones distinguem as cores 
primárias: vermelho, verde e azul, e os bastonetes diferenciam 
apenas níveis de intensidade, sem separar comprimentos de 
onda. Os impulsos nervosos produzidos são enviados ao 
cérebro por meio do nervo óptico, para que se dê a percepção 
da imagem. 
 
Um indivíduo que, por alguma deficiência, não consegue 
captar as informações transmitidas pelos cones, perceberá 
um objeto branco, iluminado apenas por luz vermelha, 
como`,
    alternatives: [
      { id: 'A', type: 'text', value: `um objeto indefinido, pois as células que captam a luz 
estão inativas.` },
      { id: 'B', type: 'text', value: `um objeto rosa, pois haverá mistura da luz vermelha 
com o branco do objeto.` },
      { id: 'C', type: 'text', value: `um objeto verde, pois o olho não consegue diferenciar 
componentes de cores.` },
      { id: 'D', type: 'text', value: `um 
objeto 
cinza, 
pois 
os 
bastonetes 
captam 
luminosidade, porém não diferenciam cor.` },
      { id: 'E', type: 'text', value: `um objeto vermelho, pois a retina capta a luz refletida 
pelo objeto, transformando-a em vermelho.` },
    ],
    correct: 'D',
    explanation: `Um objeto branco reflete toda a luz que incide sobre ele; iluminado apenas por luz vermelha, ele reflete luz vermelha. O indivíduo que não capta as informações dos cones (responsáveis pela percepção das cores) dispõe apenas dos bastonetes, que registram a intensidade luminosa mas não diferenciam comprimentos de onda (cor). Por isso ele perceberá o objeto como cinza, enxergando apenas a luminosidade, sem distinguir a cor (D).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Durante uma ação de fiscalização em postos de 
combustíveis, foi encontrado um mecanismo inusitado para 
enganar o consumidor. Durante o inverno, o responsável 
por um posto de combustível compra álcool por 
R$ 0,50/litro, a uma temperatura de 5 °C. Para revender o 
líquido aos motoristas, instalou um mecanismo na bomba 
de combustível para aquecê-lo, para que atinja a 
temperatura de 35 °C, sendo o litro de álcool revendido a 
R$ 1,60. Diariamente o posto compra 20 mil litros de álcool 
a 5 ºC e os revende. 
 
Com relação à situação hipotética descrita no texto e dado 
que o coeficiente de dilatação volumétrica do álcool é de 
1×10-3 ºC-1, desprezando-se o custo da energia gasta no 
aquecimento do combustível, o ganho financeiro que o 
dono do posto teria obtido devido ao aquecimento do 
álcool após uma semana de vendas estaria entre`,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 500,00 e R$ 1.000,00.` },
      { id: 'B', type: 'text', value: `R$ 1.050,00 e R$ 1.250,00.` },
      { id: 'C', type: 'text', value: `R$ 4.000,00 e R$ 5.000,00.` },
      { id: 'D', type: 'text', value: `R$ 6.000,00 e R$ 6.900,00.` },
      { id: 'E', type: 'text', value: `R$ 7.000,00 e R$ 7.950,00.` },
    ],
    correct: 'D',
    explanation: `Em uma semana, o volume comprado e revendido é V₀ = 7 × 20 000 = 140 000 L (medidos a 5 °C). Ao ser aquecido de 5 °C para 35 °C (ΔT = 30 °C), o álcool dilata: ΔV = V₀·γ·ΔT = 140 000 × 1 × 10⁻³ × 30 = 4 200 L. Esse volume adicional, criado apenas pela dilatação, é vendido a R$ 1,60/L, gerando um ganho de 4 200 × 1,60 = R$ 6 720,00, valor situado entre R$ 6 000,00 e R$ 6 900,00 (D).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A 
invenção 
da 
geladeira 
proporcionou 
uma 
revolução 
no 
aproveitamento 
dos 
alimentos, 
ao 
permitir que fossem armazenados e 
transportados por longos períodos. A 
figura apresentada ilustra o processo 
cíclico 
de 
funcionamento 
de 
uma 
geladeira, em que um gás no interior de 
uma tubulação é forçado a circular entre 
o congelador e a parte externa da 
geladeira. É por meio dos processos de 
compressão, 
que 
ocorre 
na 
parte 
externa, e de expansão, que ocorre na parte interna, que o 
gás proporciona a troca de calor entre o interior e o exterior 
da geladeira. 
Disponível em: http://home.howstuffworks.com. 
Acesso em: 19 out. 2008 (adaptado). 
Nos processos de transformação de energia envolvidos no 
funcionamento da geladeira,`,
    images: ['/enem/2009/images/enem_2009_d1_q39.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a expansão do gás é um processo que cede a energia 
necessária ao resfriamento da parte interna da 
geladeira.` },
      { id: 'B', type: 'text', value: `o calor flui de forma não-espontânea da parte mais 
fria, no interior, para a mais quente, no exterior da 
geladeira.` },
      { id: 'C', type: 'text', value: `a quantidade de calor cedida ao meio externo é igual 
ao calor retirado da geladeira.` },
      { id: 'D', type: 'text', value: `a eficiência é tanto maior quanto menos isolado 
termicamente 
do 
ambiente 
externo 
for 
o 
seu 
compartimento interno.` },
      { id: 'E', type: 'text', value: `a energia retirada do interior pode ser devolvida à 
geladeira abrindo-se a sua porta, o que reduz seu 
consumo de energia.` },
    ],
    correct: 'B',
    explanation: `A geladeira é uma máquina térmica de refrigeração: por meio do trabalho realizado pelo compressor (às custas de energia elétrica), ela retira calor de seu interior (fonte fria) e o rejeita para o ambiente externo (fonte quente). Esse fluxo de calor do corpo mais frio para o mais quente não é espontâneo — ocorre justamente porque há trabalho externo, em acordo com a 2ª Lei da Termodinâmica (B). O calor cedido ao exterior é maior que o retirado (inclui o trabalho do compressor), e as demais alternativas violam princípios termodinâmicos.`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Na manipulação em escala nanométrica, os 
átomos 
revelam 
características 
peculiares, 
podendo 
apresentar tolerância à temperatura, reatividade química, 
condutividade 
elétrica, 
ou 
mesmo 
exibir 
força 
de 
intensidade extraordinária. Essas características explicam 
o interesse industrial pelos nanomateriais que estão sendo 
muito 
pesquisados 
em 
diversas 
áreas, 
desde 
o 
desenvolvimento de cosméticos, tintas e tecidos, até o de 
terapias contra o câncer. 
LACAVA, Z. G. M; MORAIS, P. C. Nanobiotecnologia e Saúde. Disponível em: 
http://www.comciencia.br (adaptado). 
A utilização de nanopartículas na indústria e na medicina 
requer estudos mais detalhados, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `as partículas, quanto menores, mais potentes e 
radiativas se tornam.` },
      { id: 'B', type: 'text', value: `as partículas podem ser manipuladas, mas não 
caracterizadas com a atual tecnologia.` },
      { id: 'C', type: 'text', value: `as propriedades biológicas das partículas somente 
podem ser testadas em microrganismos.` },
      { id: 'D', type: 'text', value: `as partículas podem atravessar poros e canais 
celulares, 
o 
que 
poderia 
causar 
impactos 
desconhecidos aos seres vivos e, até mesmo, aos 
ecossistemas.` },
      { id: 'E', type: 'text', value: `o organismo humano apresenta imunidade contra 
partículas tão pequenas, já que apresentam a mesma 
dimensão das bactérias (um bilionésimo de metro).` },
    ],
    correct: 'D',
    explanation: `Por terem dimensões nanométricas, as nanopartículas podem atravessar poros e canais das membranas celulares e penetrar nos organismos, interagindo com estruturas biológicas de maneira ainda pouco conhecida. Por isso seu uso na indústria e na medicina exige estudos mais detalhados: elas podem causar impactos imprevisíveis aos seres vivos e, até mesmo, aos ecossistemas (D). Não se tornam radiativas por serem menores (A), podem ser caracterizadas pela tecnologia atual (B), suas propriedades biológicas não se testam só em microrganismos (C) e o organismo não possui imunidade automática contra elas (E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Uma vítima de acidente de carro foi encontrada 
carbonizada devido a uma explosão. Indícios, como certos 
adereços de metal usados pela vítima, sugerem que a 
mesma seja filha de um determinado casal. Uma equipe 
policial de perícia teve acesso ao material biológico 
carbonizado 
da 
vítima, 
reduzido, 
praticamente, 
a 
fragmentos de ossos. Sabe-se que é possível obter DNA 
em condições para análise genética de parte do tecido 
interno de ossos. Os peritos necessitam escolher, entre 
cromossomos autossômicos, cromossomos sexuais (X e 
Y) ou DNAmt (DNA mitocondrial), a melhor opção para 
identificação do parentesco da vítima com o referido casal. 
Sabe-se que, entre outros aspectos, o número de cópias 
de um mesmo cromossomo por célula maximiza a chance 
de se obter moléculas não degradadas pelo calor da 
explosão. 
 
Com base nessas informações e tendo em vista os 
diferentes padrões de herança de cada fonte de DNA 
citada, a melhor opção para a perícia seria a utilização`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `do DNAmt, transmitido ao longo da linhagem materna, 
pois, em cada célula humana, há várias cópias dessa 
molécula.` },
      { id: 'B', type: 'text', value: `do cromossomo X, pois a vítima herdou duas cópias 
desse cromossomo, estando assim em número 
superior aos demais.` },
      { id: 'C', type: 'text', value: `do cromossomo autossômico, pois esse cromossomo 
apresenta maior quantidade de material genético 
quando comparado aos nucleares, como, por exemplo, 
o DNAmt.` },
      { id: 'D', type: 'text', value: `do cromossomo Y, pois, em condições normais, este é 
transmitido integralmente do pai para toda a prole e 
está presente em duas cópias em células de 
indivíduos do sexo feminino.` },
      { id: 'E', type: 'text', value: `de 
marcadores 
genéticos 
em 
cromossomos 
autossômicos, pois estes, além de serem transmitidos 
pelo pai e pela mãe, estão presentes em 44 cópias por 
célula, e os demais, em apenas uma.` },
    ],
    correct: 'A',
    explanation: `Dos fragmentos ósseos carbonizados interessa a fonte de DNA com maior número de cópias por célula, para maximizar a chance de obter moléculas não degradadas pelo calor. O DNA mitocondrial (DNAmt) existe em muitas cópias por célula (há várias mitocôndrias, cada uma com vários genomas) e é transmitido pela linhagem materna, o que permite comparar a vítima com a mãe do casal. Logo, a melhor opção para a perícia é o DNAmt (A). O cromossomo Y não existe em mulheres, e os cromossomos autossômicos e o X estão presentes em pouquíssimas cópias por célula.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O cultivo de camarões de água salgada vem se 
desenvolvendo muito nos últimos anos na região Nordeste do 
Brasil e, em algumas localidades, passou a ser a principal 
atividade econômica. Uma das grandes preocupações dos 
impactos negativos dessa atividade está relacionada à 
descarga, sem nenhum tipo de tratamento, dos efluentes dos 
viveiros diretamente no ambiente marinho, em estuários ou em 
manguezais. Esses efluentes possuem matéria orgânica 
particulada e dissolvida, amônia, nitrito, nitrato, fosfatos, 
partículas de sólidos em suspensão e outras substâncias que 
podem ser consideradas contaminantes potenciais. 
CASTRO, C. B.; ARAGÃO, J. S.; COSTA-LOTUFO, L. V. Monitoramento da toxicidade de efluentes 
de uma fazenda de cultivo de camarão marinho. Anais do IX Congresso Brasileiro de 
Ecotoxicologia, 2006 (adaptado). 
Suponha que tenha sido construída uma fazenda de 
carcinicultura próximo a um manguezal. Entre as perturbações 
ambientais causadas pela fazenda, espera-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a atividade microbiana se torne responsável pela 
reciclagem do fósforo orgânico excedente no ambiente 
marinho.` },
      { id: 'B', type: 'text', value: `a relativa instabilidade das condições marinhas torne as 
alterações de fatores físico-químicos pouco críticas à vida 
no mar.` },
      { id: 'C', type: 'text', value: `a amônia excedente seja convertida em nitrito, por meio do 
processo de nitrificação, e em nitrato, formado como 
produto intermediário desse processo.` },
      { id: 'D', type: 'text', value: `os efluentes promovam o crescimento excessivo de plantas 
aquáticas devido à alta diversidade de espécies vegetais 
permanentes no manguezal.` },
      { id: 'E', type: 'text', value: `o impedimento da penetração da luz pelas partículas em 
suspensão venha a comprometer a produtividade primária 
do ambiente marinho, que resulta da atividade metabólica 
do fitoplâncton.` },
    ],
    correct: 'E',
    explanation: `Os efluentes dos viveiros de camarão lançam no manguezal grande quantidade de sólidos em suspensão e de nutrientes. As partículas em suspensão aumentam a turbidez e impedem a penetração da luz na água, comprometendo a fotossíntese do fitoplâncton e, portanto, a produtividade primária do ambiente marinho (E). A alternativa C descreve a nitrificação de forma trocada (o nitrito é o produto intermediário e o nitrato o final), e as demais minimizam ou descrevem incorretamente os impactos esperados.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Nas últimas décadas, o efeito estufa tem-se
intensificado de maneira preocupante, sendo esse efeito muitas
vezes atribuído à intensa liberação de CO₂ durante a queima
de combustíveis fósseis para geração de energia. O quadro
traz as entalpias-padrão de combustão a 25 ºC do
metano, do butano e do octano.
 
À medida que aumenta a consciência sobre os impactos 
ambientais relacionados ao uso da energia, cresce a 
importância de se criar políticas de incentivo ao uso de 
combustíveis mais eficientes. Nesse sentido, considerando-se 
que o metano, o butano e o octano sejam representativos do 
gás natural, do gás liquefeito de petróleo (GLP) e da gasolina, 
respectivamente, então, a partir dos dados fornecidos, é 
possível concluir que, do ponto de vista da quantidade de calor 
obtido por mol de CO₂ gerado, a ordem crescente desses três 
combustíveis é`,
    images: ['/enem/2009/images/enem_2009_d1_q43.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `gasolina, GLP e gás natural.` },
      { id: 'B', type: 'text', value: `gás natural, gasolina e GLP.` },
      { id: 'C', type: 'text', value: `gasolina, gás natural e GLP.` },
      { id: 'D', type: 'text', value: `gás natural, GLP e gasolina.` },
      { id: 'E', type: 'text', value: `GLP, gás natural e gasolina.` },
    ],
    correct: 'A',
    explanation: `Monta-se a combustão de cada combustível e divide-se a entalpia liberada pelo número de mols de CO₂ formados. Metano (CH₄ → 1 CO₂): 890 kJ por mol de CO₂. Butano (C₄H₁₀ → 4 CO₂): 2 878 ÷ 4 ≈ 719,5 kJ por mol de CO₂. Octano (C₈H₁₈ → 8 CO₂): 5 471 ÷ 8 ≈ 683,9 kJ por mol de CO₂. Em ordem crescente de calor obtido por mol de CO₂ gerado tem-se gasolina (octano) < GLP (butano) < gás natural (metano), ou seja, gasolina, GLP e gás natural (A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O álcool hidratado utilizado como combustível 
veicular é obtido por meio da destilação fracionada de 
soluções aquosas geradas a partir da fermentação de 
biomassa. Durante a destilação, o teor de etanol da 
mistura é aumentado, até o limite de 96% em massa. 
 
Considere que, em uma usina de produção de etanol, 
800 kg de uma mistura etanol/água com concentração 
20% em massa de etanol foram destilados, sendo 
obtidos 100 kg de álcool hidratado 96% em massa de 
etanol. A partir desses dados, é correto concluir que a 
destilação em questão gerou um resíduo com uma 
concentração de etanol em massa`,
    alternatives: [
      { id: 'A', type: 'text', value: `de 0%.` },
      { id: 'B', type: 'text', value: `de 8,0%.` },
      { id: 'C', type: 'text', value: `entre 8,4% e 8,6%.` },
      { id: 'D', type: 'text', value: `entre 9,0% e 9,2%.` },
      { id: 'E', type: 'text', value: `entre 13% e 14%.` },
    ],
    correct: 'D',
    explanation: `Massa de etanol na mistura inicial: 20% de 800 kg = 160 kg (e 640 kg de água). No destilado obtêm-se 100 kg a 96% de etanol, ou seja, 96 kg de etanol. Por balanço de massa, o resíduo tem massa 800 − 100 = 700 kg e contém 160 − 96 = 64 kg de etanol. A concentração em massa de etanol no resíduo é 64 ÷ 700 ≈ 0,091 = 9,1%, valor situado entre 9,0% e 9,2% (D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Considere a seguinte situação hipotética: ao 
preparar o palco para a apresentação de uma peça de 
teatro, o iluminador deveria colocar três atores sob 
luzes que tinham igual brilho e os demais, sob luzes 
de menor brilho. O iluminador determinou, então, aos 
técnicos, que instalassem no palco oito lâmpadas 
incandescentes com a mesma especificação (L1 a L8), 
interligadas em um circuito com uma bateria, conforme 
mostra a figura. 
 
 
 
Nessa situação, quais são as três lâmpadas que 
acendem com o mesmo brilho por apresentarem igual 
valor de corrente fluindo nelas, sob as quais devem se 
posicionar os três atores?`,
    images: ['/enem/2009/images/enem_2009_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `L1, L2 e L3.` },
      { id: 'B', type: 'text', value: `L2, L3 e L4.` },
      { id: 'C', type: 'text', value: `L2, L5 e L7.` },
      { id: 'D', type: 'text', value: `L4, L5 e L6.` },
      { id: 'E', type: 'text', value: `L4, L7 e L8.` },
    ],
    correct: 'B',
    explanation: `O brilho de cada lâmpada depende da corrente que a percorre. A corrente total (i₁) sai da bateria e passa primeiro por L1, que é a mais brilhante. No primeiro nó ela se divide entre o ramo de L2 e L3 (em série, resistência 2R) e o ramo que contém L4; como L4 é seguida da associação em paralelo de L5–L6 e L7–L8 (que equivale a R), esse ramo também totaliza 2R. Sendo os dois ramos de igual resistência, suas correntes se igualam, de modo que L2, L3 e L4 são percorridas pela mesma corrente — a maior entre os ramos derivados — e brilham igualmente. Portanto, as três lâmpadas de mesmo brilho são L2, L3 e L4 (B).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O Egito é visitado anualmente por milhões de 
turistas de todos os quadrantes do planeta, desejosos de 
ver com os próprios olhos a grandiosidade do poder 
esculpida em pedra há milênios: as pirâmides de Gizeh, as 
tumbas do Vale dos Reis e os numerosos templos 
construídos ao longo do Nilo. 
 
O que hoje se transformou em atração turística era, no 
passado, interpretado de forma muito diferente, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `significava, entre outros aspectos, o poder que os 
faraós tinham para escravizar grandes contingentes 
populacionais que trabalhavam nesses monumentos.` },
      { id: 'B', type: 'text', value: `representava para as populações do alto Egito a 
possibilidade de migrar para o sul e encontrar trabalho 
nos canteiros faraônicos.` },
      { id: 'C', type: 'text', value: `significava a solução para os problemas econômicos, 
uma vez que os faraós sacrificavam aos deuses suas 
riquezas, construindo templos.` },
      { id: 'D', type: 'text', value: `representava a possibilidade de o faraó ordenar a 
sociedade, obrigando os desocupados a trabalharem 
em obras públicas, que engrandeceram o próprio 
Egito.` },
      { id: 'E', type: 'text', value: `significava um peso para a população egípcia, que 
condenava o luxo faraônico e a religião baseada em 
crenças e superstições.` },
    ],
    correct: 'A',
    explanation: `O texto evoca o Egito faraônico, cujas pirâmides e templos eram monumentos erguidos à custa do trabalho compulsório de enormes contingentes da população. A alternativa A é correta porque, no passado, essas construções expressavam o imenso poder dos faraós, capazes de mobilizar e escravizar multidões para as obras. B erra ao supor uma migração em busca de emprego assalariado, inexistente na época. C e D distorcem a lógica do poder teocrático, que não era 'solução econômica' nem mera ocupação de 'desocupados'. E projeta uma condenação ao luxo faraônico que não corresponde à mentalidade do Egito antigo.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O que se entende por Corte do antigo regime é, 
em primeiro lugar, a casa de habitação dos reis de França, 
de suas famílias, de todas as pessoas que, de perto ou de 
longe, dela fazem parte. As despesas da Corte, da imensa 
casa dos reis, são consignadas no registro das despesas 
do reino da França sob a rubrica significativa de Casas 
Reais. 
ELIAS, N. A sociedade de corte. Lisboa: Estampa, 1987. 
Algumas casas de habitação dos reis tiveram grande 
efetividade política e terminaram por se transformar em 
patrimônio artístico e cultural, cujo exemplo é`,
    alternatives: [
      { id: 'A', type: 'text', value: `o palácio de Versalhes.` },
      { id: 'B', type: 'text', value: `o Museu Britânico.` },
      { id: 'C', type: 'text', value: `a catedral de Colônia.` },
      { id: 'D', type: 'text', value: `a Casa Branca.` },
      { id: 'E', type: 'text', value: `a pirâmide do faraó Quéops.` },
    ],
    correct: 'A',
    explanation: `A 'Corte do Antigo Regime' descrita por Norbert Elias refere-se à residência dos reis absolutistas franceses e à imensa casa real. O exemplo que se tornou patrimônio artístico e cultural é o Palácio de Versalhes (A), símbolo máximo do absolutismo de Luís XIV. As demais não cabem: o Museu Britânico (B) e a catedral de Colônia (C) não são residências reais francesas. A Casa Branca (D) é sede do Executivo dos EUA. A pirâmide de Quéops (E) é um túmulo egípcio, não uma corte.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Hoje em dia, nas grandes cidades, enterrar os 
mortos é uma prática quase íntima, que diz respeito 
apenas à família. A menos, é claro, que se trate de uma 
personalidade conhecida. Entretanto, isso nem sempre foi 
assim. Para um historiador, os sepultamentos são uma 
fonte 
de 
informações 
importantes 
para 
que 
se 
compreenda, por exemplo, a vida política das sociedades. 
 
No que se refere às práticas sociais ligadas aos 
sepultamentos,`,
    alternatives: [
      { id: 'A', type: 'text', value: `na Grécia Antiga, as cerimônias fúnebres eram 
desvalorizadas, porque o mais importante era a 
democracia experimentada pelos vivos.` },
      { id: 'B', type: 'text', value: `na Idade Média, a Igreja tinha pouca influência sobre 
os rituais fúnebres, preocupando-se mais com a 
salvação da alma.` },
      { id: 'C', type: 'text', value: `no Brasil colônia, o sepultamento dos mortos nas 
igrejas era regido pela observância da hierarquia 
social.` },
      { id: 'D', type: 'text', value: `na época da Reforma, o catolicismo condenou os 
excessos de gastos que a burguesia fazia para 
sepultar seus mortos.` },
      { id: 'E', type: 'text', value: `no período posterior à Revolução Francesa, devido as 
grandes perturbações sociais, abandona-se a prática 
do luto.` },
    ],
    correct: 'C',
    explanation: `A questão trata das práticas sociais de sepultamento como fonte para a história. A correta é C: no Brasil colonial, os mortos eram enterrados dentro das igrejas conforme a hierarquia social, ficando os mais ricos e poderosos mais próximos do altar. A erra, pois na Grécia Antiga os ritos fúnebres eram valorizados. B inverte o papel central da Igreja medieval diante da morte. D e E atribuem comportamentos (condenação de gastos. Abandono do luto) que não correspondem, respectivamente, à Reforma e ao pós-Revolução Francesa.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A Idade Média é um extenso período da História 
do Ocidente cuja memória é construída e reconstruída 
segundo as circunstâncias das épocas posteriores. Assim, 
desde o Renascimento, esse período vem sendo alvo de 
diversas interpretações que dizem mais sobre o contexto 
histórico em que são produzidas do que propriamente 
sobre o Medievo. 
 
Um exemplo acerca do que está exposto no texto acima é`,
    alternatives: [
      { id: 'A', type: 'text', value: `a associação que Hitler estabeleceu entre o III Reich e 
o Sacro Império Romano Germânico.` },
      { id: 'B', type: 'text', value: `o retorno dos valores cristãos medievais, presentes 
nos documentos do Concílio Vaticano II.` },
      { id: 'C', type: 'text', value: `a luta dos negros sul-africanos contra o apartheid 
inspirada por valores dos primeiros cristãos.` },
      { id: 'D', type: 'text', value: `o fortalecimento político de Napoleão Bonaparte, que 
se justificava na amplitude de poderes que tivera 
Carlos Magno.` },
      { id: 'E', type: 'text', value: `a tradição heroica da cavalaria medieval, que foi 
afetada 
negativamente 
pelas 
produções 
cinematográficas de Hollywood.` },
    ],
    correct: 'A',
    explanation: `O texto afirma que a Idade Média é reinterpretada segundo os interesses de cada época posterior. O melhor exemplo é A: Hitler associou o III Reich ao Sacro Império Romano-Germânico, usando a memória medieval para legitimar seu projeto político. As demais não ilustram essa reapropriação ideológica do Medievo: B trata do Concílio Vaticano II, C da luta anti-apartheid inspirada no cristianismo primitivo, D de poderes napoleônicos genéricos e E de produções cinematográficas, sem o sentido de reconstrução política do período medieval destacado no texto.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A primeira metade do século XX foi marcada por 
conflitos e processos que a inscreveram como um dos 
mais violentos períodos da história humana. 
 
Entre os principais fatores que estiveram na origem dos 
conflitos ocorridos durante a primeira metade do século XX 
estão`,
    alternatives: [
      { id: 'A', type: 'text', value: `a crise do colonialismo, a ascensão do nacionalismo e 
do totalitarismo.` },
      { id: 'B', type: 'text', value: `o enfraquecimento do império britânico, a Grande 
Depressão e a corrida nuclear.` },
      { id: 'C', type: 'text', value: `o declínio britânico, o fracasso da Liga das Nações e a 
Revolução Cubana.` },
      { id: 'D', type: 'text', value: `a corrida armamentista, o terceiro-mundismo e o 
expansionismo soviético.` },
      { id: 'E', type: 'text', value: `a Revolução Bolchevique, o imperialismo e a 
unificação da Alemanha.` },
    ],
    correct: 'A',
    explanation: `Os grandes conflitos da primeira metade do século XX têm raízes na crise do colonialismo e na ascensão do nacionalismo e do totalitarismo (nazifascismo), fatores que conduziram às duas guerras mundiais — por isso A. As outras combinam elementos anacrônicos ou posteriores: a corrida nuclear e a Revolução Cubana (B, C) e o expansionismo soviético e o terceiro-mundismo (D) pertencem à Guerra Fria. A unificação da Alemanha (E) ocorreu ainda no século XIX.`,
    subject: ['his'],
    topics: ['Primeira e Segunda Guerra Mundial', 'História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os regimes totalitários da primeira metade do 
século XX apoiaram-se fortemente na mobilização da 
juventude em torno da defesa de ideias grandiosas para o 
futuro da nação. Nesses projetos, os jovens deveriam 
entender que só havia uma pessoa digna de ser amada e 
obedecida, que era o líder. Tais movimentos sociais 
juvenis contribuíram para a implantação e a sustentação 
do nazismo, na Alemanha, e do fascismo, na Itália, 
Espanha e Portugal. 
 
A atuação desses movimentos juvenis caracterizava-se`,
    alternatives: [
      { id: 'A', type: 'text', value: `pelo sectarismo e pela forma violenta e radical com 
que enfrentavam os opositores ao regime.` },
      { id: 'B', type: 'text', value: `pelas propostas de conscientização da população 
acerca dos seus direitos como cidadãos.` },
      { id: 'C', type: 'text', value: `pela promoção de um modo de vida saudável, que 
mostrava os jovens como exemplos a seguir.` },
      { id: 'D', type: 'text', value: `pelo diálogo, ao organizar debates que opunham 
jovens idealistas e velhas lideranças conservadoras.` },
      { id: 'E', type: 'text', value: `pelos métodos políticos populistas e pela organização 
de comícios multitudinários.` },
    ],
    correct: 'A',
    explanation: `Os movimentos juvenis dos regimes totalitários (como a Juventude Hitlerista) caracterizavam-se pelo sectarismo e pela violência radical contra os opositores, em culto ao líder — daí A. B, C e D descrevem práticas democráticas (conscientização de direitos, promoção de debate e diálogo) incompatíveis com o totalitarismo. E, embora cite comícios, reduz o fenômeno ao populismo e ignora a intolerância e a violência que efetivamente o definiam.`,
    subject: ['his'],
    topics: ['Primeira e Segunda Guerra Mundial', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Do ponto de vista geopolítico, a Guerra Fria dividiu 
a Europa em dois blocos. Essa divisão propiciou a 
formação de alianças antagônicas de caráter militar, como 
a OTAN, que aglutinava os países do bloco ocidental, e o 
Pacto de Varsóvia, que concentrava os do bloco oriental. É 
importante destacar que, na formação da OTAN, estão 
presentes, além dos países do oeste europeu, os EUA e o 
Canadá. Essa divisão histórica atingiu igualmente os 
âmbitos político e econômico que se refletia pela opção 
entre os modelos capitalista e socialista. 
 
Essa divisão europeia ficou conhecida como`,
    alternatives: [
      { id: 'A', type: 'text', value: `Cortina de Ferro.` },
      { id: 'B', type: 'text', value: `Muro de Berlim.` },
      { id: 'C', type: 'text', value: `União Europeia.` },
      { id: 'D', type: 'text', value: `Convenção de Ramsar.` },
      { id: 'E', type: 'text', value: `Conferência de Estocolmo.` },
    ],
    correct: 'A',
    explanation: `A divisão da Europa em blocos antagônicos (OTAN x Pacto de Varsóvia) durante a Guerra Fria ficou conhecida como 'Cortina de Ferro', expressão difundida por Churchill — portanto A. O Muro de Berlim (B) foi símbolo pontual dessa divisão, não seu nome geral. A União Europeia (C) é um bloco de integração posterior. A Convenção de Ramsar (D) e a Conferência de Estocolmo (E) referem-se a temas ambientais, alheios à bipolaridade.`,
    subject: ['his'],
    topics: ['Guerra Fria', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O ano de 1968 ficou conhecido pela efervescência 
social, tal como se pode comprovar pelo seguinte trecho, 
retirado de texto sobre propostas preliminares para uma 
revolução cultural: “É preciso discutir em todos os lugares 
e com todos. O dever de ser responsável e pensar 
politicamente diz respeito a todos, não é privilégio de uma 
minoria de iniciados. Não devemos nos surpreender com o 
caos das ideias, pois essa é a condição para a emergência 
de novas ideias. Os pais do regime devem compreender 
que autonomia não é uma palavra vã; ela supõe a partilha 
do poder, ou seja, a mudança de sua natureza. Que 
ninguém tente rotular o movimento atual; ele não tem 
etiquetas e não precisa delas”. 
Journal de la comune étudiante. Textes et 
documents. Paris: Seuil, 1969 (adaptado). 
Os movimentos sociais, que marcaram o ano de 1968,`,
    alternatives: [
      { id: 'A', type: 'text', value: `foram 
manifestações 
desprovidas 
de 
conotação 
política, que tinham o objetivo de questionar a rigidez 
dos padrões de comportamento social fundados em 
valores tradicionais da moral religiosa.` },
      { id: 'B', type: 'text', value: `restringiram-se 
às 
sociedades 
de 
países 
desenvolvidos, onde a industrialização avançada, a 
penetração dos meios de comunicação de massa e a 
alienação cultural que deles resultava eram mais 
evidentes.` },
      { id: 'C', type: 'text', value: `resultaram no fortalecimento do conservadorismo 
político, social e religioso que prevaleceu nos países 
ocidentais durante as décadas de 70 e 80.` },
      { id: 'D', type: 'text', value: `tiveram baixa repercussão no plano político, apesar de 
seus fortes desdobramentos nos planos social e 
cultural, expressos na mudança de costumes e na 
contracultura.` },
      { id: 'E', type: 'text', value: `inspiraram futuras mobilizações, como o pacifismo, o 
ambientalismo, a promoção da equidade de gêneros e 
a defesa dos direitos das minorias.` },
    ],
    correct: 'E',
    explanation: `Os movimentos de 1968 extrapolaram seu tempo e inspiraram mobilizações posteriores, como o pacifismo, o ambientalismo, o feminismo (equidade de gênero) e a defesa das minorias — por isso E. A nega equivocadamente seu caráter político. B restringe-os apenas aos países desenvolvidos. C afirma o oposto do ocorrido (não fortaleceram o conservadorismo). D subestima sua repercussão, que foi ampla inclusive nos planos cultural e comportamental.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Os Yanomami constituem uma sociedade indígena 
do norte da Amazônia e formam um amplo conjunto 
linguístico e cultural. Para os Yanomami, urihi, a “terra-
floresta”, não é um mero cenário inerte, objeto de 
exploração econômica, e sim uma entidade viva, animada 
por uma dinâmica de trocas entre os diversos seres que a 
povoam. A floresta possui um sopro vital, wixia, que é 
muito longo. Se não a desmatarmos, ela não morrerá. Ela 
não se decompõe, isto é, não se desfaz. É graças ao seu 
sopro úmido que as plantas crescem. A floresta não está 
morta pois, se fosse assim, as florestas não teriam folhas. 
Tampouco se veria água. Segundo os Yanomami, se os 
brancos os fizerem desaparecer para desmatá-la e morar 
no seu lugar, ficarão pobres e acabarão tendo fome e 
sede. 
ALBERT, B. Yanomami, o espírito da floresta. Almanaque Brasil 
Socioambiental. São Paulo: ISA, 2007 (adaptado). 
De acordo com o texto, os Yanomami acreditam que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a floresta não possui organismos decompositores.` },
      { id: 'B', type: 'text', value: `o potencial econômico da floresta deve ser explorado.` },
      { id: 'C', type: 'text', value: `o homem branco convive harmonicamente com urihi.` },
      { id: 'D', type: 'text', value: `as folhas e a água são menos importantes para a 
floresta que seu sopro vital.` },
      { id: 'E', type: 'text', value: `Wixia é a capacidade que tem a floresta de se 
sustentar por meio de processos vitais.` },
    ],
    correct: 'E',
    explanation: `O texto apresenta a cosmologia Yanomami, para quem a floresta é viva e possui o wixia, um 'sopro vital' que lhe permite sustentar-se por processos próprios — exatamente o que afirma E. A contradiz o texto, que fala em renovação e não decomposição. B inverte a visão indígena, que recusa a exploração econômica. C é falsa, pois o homem branco é visto como ameaça. D distorce o texto, que valoriza folhas e água como sinais de que a floresta está viva.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O fim da Guerra Fria e da bipolaridade, entre as 
décadas de 1980 e 1990, gerou expectativas de que seria 
instaurada uma ordem internacional marcada pela redução 
de conflitos e pela multipolaridade. 
 
O panorama estratégico do mundo pós-Guerra Fria 
apresenta`,
    alternatives: [
      { id: 'A', type: 'text', value: `o aumento de conflitos internos associados ao 
nacionalismo, às disputas étnicas, ao extremismo 
religioso e ao fortalecimento de ameaças como o 
terrorismo, o tráfico de drogas e o crime organizado.` },
      { id: 'B', type: 'text', value: `o fim da corrida armamentista e a redução dos gastos 
militares das grandes potências, o que se traduziu em 
maior estabilidade nos continentes europeu e asiático, 
que tinham sido palco da Guerra Fria.` },
      { id: 'C', type: 'text', value: `o desengajamento das grandes potências, pois as 
intervenções militares em regiões assoladas por 
conflitos passaram a ser realizadas pela Organização 
das Nações Unidas (ONU), com maior envolvimento 
de países emergentes.` },
      { id: 'D', type: 'text', value: `a plena vigência do Tratado de Não Proliferação, que 
afastou a possibilidade de um conflito nuclear como 
ameaça global, devido à crescente consciência política 
internacional acerca desse perigo.` },
      { id: 'E', type: 'text', value: `a condição dos EUA como única superpotência, mas 
que se submetem às decisões da ONU no que 
concerne às ações militares.` },
    ],
    correct: 'A',
    explanation: `O panorama pós-Guerra Fria, apesar da expectativa de paz, foi marcado pela multiplicação de conflitos internos ligados a nacionalismos, disputas étnicas e extremismo religioso, além do avanço do terrorismo, do narcotráfico e do crime organizado — daí A. B e D são otimistas demais (não houve estabilidade plena nem fim da ameaça nuclear). C erra ao falar em desengajamento das potências. E é falsa, pois os EUA, como única superpotência, muitas vezes agiram à margem da ONU.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Conflitos internacionais', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Na democracia estado-unidense, os cidadãos são 
incluídos na sociedade pelo exercício pleno dos direitos 
políticos e também pela ideia geral de direito de 
propriedade. Compete ao governo garantir que esse direito 
não seja violado. Como consequência, mesmo aqueles 
que possuem uma pequena propriedade sentem-se 
cidadãos de pleno direito. 
 
Na tradição política dos EUA, uma forma de incluir 
socialmente os cidadãos é`,
    alternatives: [
      { id: 'A', type: 'text', value: `submeter o indivíduo à proteção do governo.` },
      { id: 'B', type: 'text', value: `hierarquizar os indivíduos segundo suas posses.` },
      { id: 'C', type: 'text', value: `estimular a formação de propriedades comunais.` },
      { id: 'D', type: 'text', value: `vincular democracia e possibilidades econômicas 
individuais.` },
      { id: 'E', type: 'text', value: `defender a obrigação de que todos os indivíduos 
tenham propriedades.` },
    ],
    correct: 'D',
    explanation: `O texto mostra que, na tradição política norte-americana, a inclusão social do cidadão passa pela associação entre democracia e acesso individual à propriedade e às possibilidades econômicas — por isso D. A e E extrapolam (não se trata de submissão ao governo nem de obrigar todos a ter propriedade). B contraria o texto ao hierarquizar os indivíduos por posses. C fala em propriedades comunais, estranhas ao individualismo liberal descrito.`,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Na década de 30 do século XIX, Tocqueville 
escreveu as seguintes linhas a respeito da moralidade nos 
EUA: “A opinião pública norte-americana é particularmente 
dura com a falta de moral, pois esta desvia a atenção 
frente à busca do bem-estar e prejudica a harmonia 
doméstica, que é tão essencial ao sucesso dos negócios. 
Nesse sentido, pode-se dizer que ser casto é uma questão 
de honra”. 
TOCQUEVILLE, A. Democracy in América. Chicago: Encyclopædia 
Britannica, Inc., Great Books 44, 1990 (adaptado). 
Do trecho, infere-se que, para Tocqueville, os norte-
americanos do seu tempo`,
    alternatives: [
      { id: 'A', type: 'text', value: `buscavam o êxito, descurando as virtudes cívicas.` },
      { id: 'B', type: 'text', value: `tinham na vida moral uma garantia de enriquecimento 
rápido.` },
      { id: 'C', type: 'text', value: `valorizavam um conceito de honra dissociado do 
comportamento ético.` },
      { id: 'D', type: 'text', value: `relacionavam a conduta moral dos indivíduos com o 
progresso econômico.` },
      { id: 'E', type: 'text', value: `acreditavam que o comportamento casto perturbava a 
harmonia doméstica.` },
    ],
    correct: 'D',
    explanation: `Pela leitura de Tocqueville, os norte-americanos associavam a conduta moral — como a castidade — ao sucesso econômico e à harmonia doméstica necessária aos negócios. Logo, relacionavam moral e progresso econômico (D). A inverte o sentido (eles não descuidavam das virtudes). B exagera ao falar em 'enriquecimento rápido'. C separa honra de ética, o oposto do texto. E distorce a passagem, que vê a castidade como favorável, e não prejudicial, à harmonia doméstica.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Segundo Aristóteles, “na cidade com o melhor 
conjunto de normas e naquela dotada de homens 
absolutamente justos, os cidadãos não devem viver uma 
vida de trabalho trivial ou de negócios - esses tipos de 
vida são desprezíveis e incompatíveis com as qualidades 
morais -, tampouco devem ser agricultores os aspirantes 
à 
cidadania, 
pois 
o 
lazer 
é 
indispensável 
ao 
desenvolvimento das qualidades morais e à prática das 
atividades políticas”. 
VAN ACKER, T. Grécia. A vida cotidiana na cidade-Estado. 
São Paulo: Atual, 1994. 
O trecho, retirado da obra Política, de Aristóteles, permite 
compreender que a cidadania`,
    alternatives: [
      { id: 'A', type: 'text', value: `possui uma dimensão histórica que deve ser criticada, 
pois é condenável que os políticos de qualquer época 
fiquem entregues à ociosidade, enquanto o resto dos 
cidadãos tem de trabalhar.` },
      { id: 'B', type: 'text', value: `era entendida como uma dignidade própria dos grupos 
sociais superiores, fruto de uma concepção política 
profundamente hierarquizada da sociedade.` },
      { id: 'C', type: 'text', value: `estava vinculada, na Grécia Antiga, a uma percepção 
política democrática, que levava todos os habitantes 
da pólis a participarem da vida cívica.` },
      { id: 'D', type: 'text', value: `tinha profundas conexões com a justiça, razão pela 
qual o tempo livre dos cidadãos deveria ser dedicado 
às atividades vinculadas aos tribunais.` },
      { id: 'E', type: 'text', value: `vivida pelos atenienses era, de fato, restrita àqueles 
que se dedicavam à política e que tinham tempo para 
resolver os problemas da cidade.` },
    ],
    correct: 'B',
    explanation: `Para Aristóteles, o cidadão pleno não deveria dedicar-se ao trabalho manual nem ao comércio, pois o ócio (lazer) era condição para as virtudes morais e a atividade política. Assim, a cidadania era privilégio dos grupos sociais superiores, numa concepção hierarquizada — por isso B. C e E erram ao atribuir-lhe caráter democrático e universal. A faz uma crítica anacrônica. D reduz indevidamente o tempo livre do cidadão às atividades dos tribunais.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Para Caio Prado Jr., a formação brasileira se 
completaria no momento em que fosse superada a nossa 
herança de inorganicidade social ― o oposto da 
interligação com objetivos internos ― trazida da colônia. 
Este momento alto estaria, ou esteve, no futuro. Se 
passarmos a Sérgio Buarque de Holanda, encontraremos 
algo análogo. O país será moderno e estará formado 
quando superar a sua herança portuguesa, rural e 
autoritária, quando então teríamos um país democrático. 
Também aqui o ponto de chegada está mais adiante, na 
dependência das decisões do presente. Celso Furtado, por 
seu turno, dirá que a nação não se completa enquanto as 
alavancas do comando, principalmente do econômico, não 
passarem para dentro do país. Como para os outros dois, 
a conclusão do processo encontra-se no futuro, que agora 
parece remoto. 
SCHWARZ, R. Os sete fôlegos de um livro. Sequências brasileiras. 
São Paulo: Cia. das Letras,1999 (adaptado). 
Acerca das expectativas quanto à formação do Brasil, a 
sentença que sintetiza os pontos de vista apresentados no 
texto é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Brasil, um país que vai pra frente.` },
      { id: 'B', type: 'text', value: `Brasil, a eterna esperança.` },
      { id: 'C', type: 'text', value: `Brasil, glória no passado, grandeza no presente.` },
      { id: 'D', type: 'text', value: `Brasil, terra bela, pátria grande.` },
      { id: 'E', type: 'text', value: `Brasil, gigante pela própria natureza.` },
    ],
    correct: 'B',
    explanation: `O texto sintetiza Caio Prado Jr., Sérgio Buarque de Holanda e Celso Furtado: para todos, a plena 'formação' do Brasil está sempre adiada para um futuro que não chega. A frase que resume essa ideia é 'Brasil, a eterna esperança' (B). As demais exprimem ufanismo ou grandeza já realizada ('vai pra frente', 'grandeza no presente', 'pátria grande', 'gigante pela própria natureza'), contrárias ao diagnóstico de incompletude apontado pelos autores.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A definição de eleitor foi tema de artigos nas 
Constituições brasileiras de 1891 e de 1934. Diz a 
Constituição da República dos Estados Unidos do Brasil de 
1891: 
 
Art. 70. São eleitores os cidadãos maiores de 21 
anos que se alistarem na forma da lei. 
 
 
A Constituição da República dos Estados Unidos 
do Brasil de 1934, por sua vez, estabelece que: 
 
Art. 180. São eleitores os brasileiros de um e de 
outro sexo, maiores de 18 anos, que se alistarem 
na forma da lei. 
Ao se comparar os dois artigos, no que diz respeito ao 
gênero dos eleitores, depreende-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a Constituição de 1934 avançou ao reduzir a idade 
mínima para votar.` },
      { id: 'B', type: 'text', value: `a Constituição de 1891, ao se referir a cidadãos, 
referia-se também às mulheres.` },
      { id: 'C', type: 'text', value: `os textos de ambas as Cartas permitiam que qualquer 
cidadão fosse eleitor.` },
      { id: 'D', type: 'text', value: `o texto da carta de 1891 já permitia o voto feminino.` },
      { id: 'E', type: 'text', value: `a Constituição de 1891 considerava eleitores apenas 
indivíduos do sexo masculino.` },
    ],
    correct: 'E',
    explanation: `Comparando os artigos, a Constituição de 1891 falava em 'cidadãos maiores de 21 anos', expressão que, na prática, excluía as mulheres do voto. Só em 1934 se explicitou 'de um e de outro sexo'. Logo, E está correta: em 1891 eram eleitores apenas os homens. B e D afirmam o contrário (voto feminino em 1891). C generaliza indevidamente. A, embora correta quanto à idade, não responde ao que se pergunta, que é o gênero dos eleitores.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O autor da constituição de 1937, Francisco 
Campos, afirma no seu livro, O Estado Nacional, que o 
eleitor seria apático; a democracia de partidos conduziria à 
desordem; a independência do Poder Judiciário acabaria 
em injustiça e ineficiência; e que apenas o Poder 
Executivo, centralizado em Getúlio Vargas, seria capaz de 
dar racionalidade imparcial ao Estado, pois Vargas teria 
providencial intuição do bem e da verdade, além de ser um 
gênio político. 
CAMPOS, F. O Estado nacional. Rio de Janeiro: 
José Olympio, 1940 (adaptado). 
Segundo as ideias de Francisco Campos,`,
    alternatives: [
      { id: 'A', type: 'text', value: `os 
eleitores, 
políticos 
e 
juízes 
seriam 
mal-
intencionados.` },
      { id: 'B', type: 'text', value: `o governo Vargas seria um mal necessário, mas 
transitório.` },
      { id: 'C', type: 'text', value: `Vargas seria o homem adequado para implantar a 
democracia de partidos.` },
      { id: 'D', type: 'text', value: `a Constituição de 1937 seria a preparação para uma 
futura democracia liberal.` },
      { id: 'E', type: 'text', value: `Vargas seria o homem capaz de exercer o poder de 
modo inteligente e correto.` },
    ],
    correct: 'E',
    explanation: `Francisco Campos justificava a Constituição de 1937 afirmando que só o Executivo centralizado em Vargas — dotado de 'intuição do bem' e 'gênio político' — daria racionalidade ao Estado. Logo, Vargas seria o homem capaz de exercer o poder de modo inteligente e correto (E). A generaliza má-fé a todos. B e D sugerem transitoriedade e preparação para a democracia liberal, ausentes no pensamento autoritário de Campos. C contradiz o texto, que desqualifica a democracia de partidos.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A partir de 1942 e estendendo-se até o final do 
Estado Novo, o Ministro do Trabalho, Indústria e Comércio 
de Getúlio Vargas falou aos ouvintes da Rádio Nacional 
semanalmente, por dez minutos, no programa “Hora do 
Brasil”. O objetivo declarado do governo era esclarecer os 
trabalhadores acerca das inovações na legislação de 
proteção ao trabalho. 
GOMES, A. C. A invenção do trabalhismo. Rio de Janeiro: 
IUPERJ / Vértice. São Paulo: Revista dos Tribunais, 1988 (adaptado). 
Os programas “Hora do Brasil” contribuíram para`,
    alternatives: [
      { id: 'A', type: 'text', value: `conscientizar os trabalhadores de que os direitos 
sociais foram conquistados por seu esforço, após anos 
de lutas sindicais.` },
      { id: 'B', type: 'text', value: `promover a autonomia dos grupos sociais, por meio de 
uma linguagem simples e de fácil entendimento.` },
      { id: 'C', type: 'text', value: `estimular os movimentos grevistas, que reivindicavam 
um aprofundamento dos direitos trabalhistas.` },
      { id: 'D', type: 'text', value: `consolidar a imagem de Vargas como um governante 
protetor das massas.` },
      { id: 'E', type: 'text', value: `aumentar os grupos de discussão política dos 
trabalhadores, estimulados pelas palavras do ministro.` },
    ],
    correct: 'D',
    explanation: `O programa 'Hora do Brasil', ao divulgar semanalmente a legislação trabalhista do Estado Novo, serviu à propaganda getulista e consolidou a imagem de Vargas como 'pai dos pobres' e protetor das massas — por isso D. A inverte a lógica, pois os direitos eram apresentados como dádiva do governo, não como conquista sindical. B, C e E atribuem ao programa autonomia popular, estímulo a greves e debate político, objetivos contrários ao controle estadonovista.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `No final do século XVI, na Bahia, Guiomar de 
Oliveira denunciou Antônia Nóbrega à Inquisição. Segundo 
o depoimento, esta lhe dava “uns pós não sabe de quê, e 
outros pós de osso de finado, os quais pós ela confessante 
deu a beber em vinho ao dito seu marido para ser seu 
amigo e serem bem-casados, e que todas estas coisas fez 
tendo-lhe dito a dita Antônia e ensinado que eram coisas 
diabólicas e que os diabos lha ensinaram”. 
ARAÚJO, E. O teatro dos vícios. Transgressão e transigência na 
sociedade urbana colonial. Brasília: UnB/José Olympio, 1997. 
Do ponto de vista da Inquisição,`,
    alternatives: [
      { id: 'A', type: 'text', value: `o problema dos métodos citados no trecho residia na 
dissimulação, que acabava por enganar o enfeitiçado.` },
      { id: 'B', type: 'text', value: `o diabo era um concorrente poderoso da autoridade da 
Igreja e somente a justiça do fogo poderia eliminá-lo.` },
      { id: 'C', type: 'text', value: `os ingredientes em decomposição das poções 
mágicas eram condenados porque afetavam a saúde 
da população.` },
      { id: 'D', type: 'text', value: `as 
feiticeiras 
representavam 
séria 
ameaça 
à 
sociedade, pois eram perceptíveis suas tendências 
feministas.` },
      { id: 'E', type: 'text', value: `os cristãos deviam preservar a instituição do 
casamento 
recorrendo 
exclusivamente 
aos 
ensinamentos da Igreja.` },
    ],
    correct: 'E',
    explanation: `Do ponto de vista da Inquisição, o episódio das poções e feitiços revelava a necessidade de os cristãos preservarem a instituição do casamento recorrendo exclusivamente aos ensinamentos da Igreja, e não a práticas tidas como diabólicas — daí E. A e C deslocam o problema para a dissimulação ou para a saúde. B exagera numa 'guerra' contra o diabo. D atribui às 'feiticeiras' um feminismo anacrônico, estranho à mentalidade inquisitorial do período colonial.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A formação dos Estados foi certamente distinta na 
Europa, na América Latina, na África e na Ásia. Os 
Estados atuais, em especial na América Latina - onde as 
instituições das populações locais existentes à época da 
conquista ou foram eliminadas, como no caso do México e 
do Peru, ou eram frágeis, como no caso do Brasil -, são o 
resultado, em geral, da evolução do transplante de 
instituições europeias feito pelas metrópoles para suas 
colônias. Na África, as colônias tiveram fronteiras 
arbitrariamente traçadas, separando etnias, idiomas e 
tradições, que, mais tarde, sobreviveram ao processo de 
descolonização, dando razão para conflitos que, muitas 
vezes, têm sua verdadeira origem em disputas pela 
exploração de recursos naturais. Na Ásia, a colonização 
europeia se fez de forma mais indireta e encontrou 
sistemas políticos e administrativos mais sofisticados, aos 
quais se superpôs. Hoje, aquelas formas anteriores de 
organização, ou pelo menos seu espírito, sobrevivem nas 
organizações políticas do Estado asiático. 
GUIMARÃES, S. P. Nação, nacionalismo, Estado. Estudos Avançados. São Paulo: EdUSP, 
v. 22, n.º 62, jan.- abr. 2008 (adaptado). 
Relacionando as informações ao contexto histórico e 
geográfico por elas evocado, assinale a opção correta 
acerca do processo de formação socioeconômica dos 
continentes mencionados no texto.`,
    alternatives: [
      { id: 'A', type: 'text', value: `Devido à falta de recursos naturais a serem 
explorados no Brasil, conflitos étnicos e culturais como 
os ocorridos na África estiveram ausentes no período 
da independência e formação do Estado brasileiro.` },
      { id: 'B', type: 'text', value: `A maior distinção entre os processos histórico-
formativos dos continentes citados é a que se 
estabelece entre colonizador e colonizado, ou seja, 
entre a Europa e os demais.` },
      { id: 'C', type: 'text', value: `À época das conquistas, a América Latina, a África e a 
Ásia tinham sistemas políticos e administrativos muito 
mais sofisticados que aqueles que lhes foram 
impostos pelo colonizador.` },
      { id: 'D', type: 'text', value: `Comparadas ao México e ao Peru, as instituições 
brasileiras, por terem sido eliminadas à época da 
conquista, sofreram mais influência dos modelos 
institucionais europeus.` },
      { id: 'E', type: 'text', value: `O modelo histórico da formação do Estado asiático 
equipara-se ao brasileiro, pois em ambos se manteve 
o espírito das formas de organização anteriores à 
conquista.` },
    ],
    correct: 'B',
    explanation: `O texto compara a formação dos Estados nos vários continentes e conclui que a grande distinção se dá entre colonizador e colonizado — isto é, entre a Europa e os demais continentes, cujas instituições foram moldadas pela colonização — por isso B. A nega equivocadamente a existência de conflitos no Brasil. C generaliza a sofisticação política a toda a América e África. D contraria o texto, que diz serem as instituições brasileiras frágeis, não eliminadas. E iguala indevidamente os casos asiático e brasileiro.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `No tempo da independência do Brasil, circulavam 
nas classes populares do Recife trovas que faziam alusão 
à revolta escrava do Haiti: 
Marinheiros e caiados 
Todos devem se acabar, 
Porque só pardos e pretos 
O país hão de habitar. 
AMARAL, F. P. do. Apud CARVALHO, A. Estudos pernambucanos. 
Recife: Cultura Acadêmica, 1907. 
O período da independência do Brasil registra conflitos 
raciais, como se depreende`,
    alternatives: [
      { id: 'A', type: 'text', value: `dos rumores acerca da revolta escrava do Haiti, que 
circulavam entre a população escrava e entre os 
mestiços 
pobres, 
alimentando 
seu 
desejo 
por 
mudanças.` },
      { id: 'B', type: 'text', value: `da rejeição aos portugueses, brancos, que significava 
a rejeição à opressão da Metrópole, como ocorreu na 
Noite das Garrafadas.` },
      { id: 'C', type: 'text', value: `do apoio que escravos e negros forros deram à 
monarquia, com a perspectiva de receber sua 
proteção contra as injustiças do sistema escravista.` },
      { id: 'D', type: 'text', value: `do repúdio que os escravos trabalhadores dos portos 
demonstravam contra os marinheiros, porque estes 
representavam a elite branca opressora.` },
      { id: 'E', type: 'text', value: `da expulsão de vários líderes negros independentistas, 
que defendiam a implantação de uma república negra, 
a exemplo do Haiti.` },
    ],
    correct: 'A',
    explanation: `A trova popular que circulava no Recife aludia à revolta escrava do Haiti e alimentava, entre escravos e mestiços pobres, o desejo de mudança e de inversão da ordem racial — por isso A evidencia os conflitos raciais do período da Independência. B desloca o foco para a rejeição aos portugueses. C inverte a posição dos escravos diante da monarquia. D restringe a questão aos trabalhadores dos portos. E inventa a expulsão de líderes negros independentistas, não documentada no texto.`,
    subject: ['his'],
    topics: ['Escravidão e abolição', 'Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Colhe o Brasil, após esforço contínuo dilatado no 
tempo, o que plantou no esforço da construção de sua 
inserção internacional. Há dois séculos formularam-se os 
pilares da política externa. Teve o país inteligência de 
longo prazo e cálculo de oportunidade no mundo difuso da 
transição da hegemonia britânica para o século americano. 
Engendrou concepções, conceitos e teoria própria no 
século XIX, de José Bonifácio ao Visconde do Rio Branco. 
Buscou autonomia decisória no século XX. As elites se 
interessaram, por meio de calorosos debates, pelo destino 
do Brasil. O país emergiu, de Vargas aos militares, como 
ator responsável e previsível nas ações externas do 
Estado. A mudança de regime político para a democracia 
não alterou o pragmatismo externo, mas o aperfeiçoou. 
SARAIVA, J. F. S. O lugar do Brasil e o silêncio do parlamento. Correio Braziliense, Brasília, 
28 maio 2009 (adaptado). 
Sob o ponto de vista da política externa brasileira no 
século XX, conclui-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o Brasil é um país periférico na ordem mundial, devido 
às diferentes conjunturas de inserção internacional.` },
      { id: 'B', type: 'text', value: `as possibilidades de fazer prevalecer ideias e 
conceitos próprios, no que tange aos temas do 
comércio 
internacional 
e 
dos 
países 
em 
desenvolvimento, são mínimas.` },
      { id: 'C', type: 'text', value: `as brechas do sistema internacional não foram bem 
aproveitadas para avançar posições voltadas para a 
criação de uma área de cooperação e associação 
integrada a seu entorno geográfico.` },
      { id: 'D', type: 'text', value: `os grandes debates nacionais acerca da inserção 
internacional do Brasil foram embasados pelas elites 
do Império e da República por meio de consultas aos 
diversos setores da população.` },
      { id: 'E', type: 'text', value: `a atuação do Brasil em termos de política externa 
evidencia que o país tem capacidade decisória própria, 
mesmo diante dos constrangimentos internacionais.` },
    ],
    correct: 'E',
    explanation: `O texto valoriza a tradição e a coerência da política externa brasileira ao longo do século XX, concluindo que o país possui capacidade decisória própria mesmo diante dos constrangimentos internacionais — por isso E. A, B e C são pessimistas e contrariam o texto (país 'periférico', ideias 'mínimas', brechas 'não aproveitadas'). D distorce o processo ao afirmar que as elites embasavam os debates em amplas consultas à população.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A prosperidade induzida pela emergência das 
máquinas de tear escondia uma acentuada perda de 
prestígio. Foi nessa idade de ouro que os artesãos, ou os 
tecelões temporários, passaram a ser denominados, de 
modo genérico, tecelões de teares manuais. Exceto em 
alguns ramos especializados, os velhos artesãos foram 
colocados lado a lado com novos imigrantes, enquanto 
pequenos 
fazendeiros-tecelões 
abandonaram 
suas 
pequenas propriedades para se concentrar na atividade de 
tecer. Reduzidos à completa dependência dos teares 
mecanizados ou dos fornecedores de matéria-prima, os 
tecelões ficaram expostos a sucessivas reduções dos 
rendimentos. 
THOMPSON, E. P. The making of the english working class. Harmondsworth: Penguin 
Books, 1979 (adaptado). 
Com a mudança tecnológica ocorrida durante a Revolução 
Industrial, a forma de trabalhar alterou-se porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `a invenção do tear propiciou o surgimento de novas 
relações sociais.` },
      { id: 'B', type: 'text', value: `os tecelões mais hábeis prevaleceram sobre os 
inexperientes.` },
      { id: 'C', type: 'text', value: `os novos teares exigiam treinamento especializado 
para serem operados.` },
      { id: 'D', type: 'text', value: `os artesãos, no período anterior, combinavam a 
tecelagem com o cultivo de subsistência.` },
      { id: 'E', type: 'text', value: `os trabalhadores não especializados se apropriaram 
dos lugares dos antigos artesãos nas fábricas.` },
    ],
    correct: 'D',
    explanation: `Com a mecanização da Revolução Industrial, a forma de trabalhar mudou porque, antes, os artesãos combinavam a tecelagem com o cultivo de subsistência, autonomia que perderam ao se tornarem dependentes dos teares mecânicos e dos fornecedores de matéria-prima — por isso D. A e C supervalorizam a máquina e um suposto 'treinamento especializado'. B foca na habilidade individual. E fala em apropriação de postos pelos não especializados, o que não explica a mudança central descrita, que é a perda de autonomia do antigo artesão.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Até o século XVII, as paisagens rurais eram 
marcadas por atividades rudimentares e de baixa 
produtividade. A partir da Revolução Industrial, porém, 
sobretudo com o advento da revolução tecnológica, houve 
um desenvolvimento contínuo do setor agropecuário. 
 
São, portanto, observadas consequências econômicas, 
sociais 
e 
ambientais 
inter-relacionadas 
no 
período 
posterior à Revolução Industrial, as quais incluem`,
    alternatives: [
      { id: 'A', type: 'text', value: `a erradicação da fome no mundo.` },
      { id: 'B', type: 'text', value: `o aumento das áreas rurais e a diminuição das áreas 
urbanas.` },
      { id: 'C', type: 'text', value: `a maior demanda por recursos naturais, entre os quais 
os recursos energéticos.` },
      { id: 'D', type: 'text', value: `a menor necessidade de utilização de adubos e 
corretivos na agricultura.` },
      { id: 'E', type: 'text', value: `o contínuo aumento da oferta de emprego no setor 
primário da economia, em face da mecanização.` },
    ],
    correct: 'C',
    explanation: `O desenvolvimento do setor agropecuário após a Revolução Industrial trouxe, entre suas consequências inter-relacionadas, a maior demanda por recursos naturais, inclusive energéticos — por isso C. A ('erradicação da fome'), B (aumento do rural e queda do urbano) e E (mais emprego no setor primário apesar da mecanização) contrariam a realidade. D está errada, pois a agricultura moderna passou a exigir mais, e não menos, adubos e corretivos.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Como se assistisse à demonstração de um 
espetáculo mágico, ia revendo aquele ambiente tão 
característico de família, com seus pesados móveis de 
vinhático ou de jacarandá, de qualidade antiga, e que 
denunciavam um passado ilustre, gerações de Meneses 
talvez mais singelos e mais calmos; agora, uma espécie de 
desordem, 
de 
relaxamento, 
abastardava 
aquelas 
qualidades primaciais. Mesmo assim era fácil perceber o 
que haviam sido, esses nobres da roça, com seus cristais 
que brilhavam mansamente na sombra, suas pratas semi-
empoeiradas que atestavam o esplendor esvanecido, seus 
marfins e suas opalinas - ah, respirava-se ali conforto, não 
havia dúvida, mas era apenas uma sobrevivência de 
coisas idas. Dir-se-ia, ante esse mundo que se ia 
desagregando, que um mal oculto o roía, como um tumor 
latente em suas entranhas. 
CARDOSO, L. Crônica da casa assassinada. Rio de Janeiro: 
Civilização Brasileira, 2002 (adaptado). 
O mundo narrado nesse trecho do romance de Lúcio 
Cardoso, acerca da vida dos Meneses, família da 
aristocracia rural de Minas Gerais, apresenta não apenas a 
história da decadência dessa família, mas é, ainda, a 
representação literária de uma fase de desagregação 
política, social e econômica do país. O recurso expressivo 
que formula literariamente essa desagregação histórica é o 
de descrever a casa dos Meneses como`,
    alternatives: [
      { id: 'A', type: 'text', value: `ambiente de pobreza e privação, que carece de 
conforto mínimo para a sobrevivência da família.` },
      { id: 'B', type: 'text', value: `mundo mágico, capaz de recuperar o encantamento 
perdido 
durante 
o 
período 
de 
decadência 
da 
aristocracia rural mineira.` },
      { id: 'C', type: 'text', value: `cena familiar, na qual o calor humano dos habitantes 
da casa ocupa o primeiro plano, compensando a 
frieza e austeridade dos objetos antigos.` },
      { id: 'D', type: 'text', value: `símbolo de um passado ilustre que, apesar de 
superado, ainda resiste à sua total dissolução graças 
ao cuidado e asseio que a família dispensa à 
conservação da casa.` },
      { id: 'E', type: 'text', value: `espaço arruinado, onde os objetos perderam seu 
esplendor e sobre os quais a vida repousa como 
lembrança de um passado que está em vias de 
desaparecer completamente.` },
    ],
    correct: 'E',
    explanation: `No trecho de Lúcio Cardoso, a casa dos Meneses é descrita como espaço arruinado, em que os objetos perderam o esplendor e restam apenas como lembrança de um passado em vias de desaparecer — recurso que traduz literariamente a desagregação da aristocracia rural mineira — por isso E. A reduz a cena a mera pobreza material. B e C contrariam o clima de decadência (encantamento, calor humano). D afirma conservação e asseio, opostos à 'desordem' e ao 'relaxamento' descritos no texto.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O suíço Thomas Davatz chegou a São Paulo em 
1855 para trabalhar como colono na fazenda de café 
Ibicaba, em Campinas. A perspectiva de prosperidade que 
o atraiu para o Brasil deu lugar a insatisfação e revolta, que 
ele registrou em livro. Sobre o percurso entre o porto de 
Santos e o planalto paulista, escreveu Davatz: “As 
estradas do Brasil, salvo em alguns trechos, são péssimas. 
Em quase toda parte, falta qualquer espécie de 
calçamento ou mesmo de saibro. Constam apenas de terra 
simples, sem nenhum benefício. É fácil prever que nessas 
estradas não se encontram estalagens e hospedarias 
como as da Europa. Nas cidades maiores, o viajante pode 
naturalmente encontrar aposento sofrível; nunca, porém, 
qualquer coisa de comparável à comodidade que 
proporciona na Europa qualquer estalagem rural. Tais 
cidades são, porém, muito poucas na distância que vai de 
Santos a Ibicaba e que se percorre em cinquenta horas no 
mínimo”. 
 
Em 1867 foi inaugurada a ferrovia ligando Santos 
a Jundiaí, o que abreviou o tempo de viagem entre o litoral 
e o planalto para menos de um dia. Nos anos seguintes, 
foram 
construídos 
outros 
ramais 
ferroviários 
que 
articularam o interior cafeeiro ao porto de exportação, 
Santos. 
DAVATZ, T. Memórias de um colono no Brasil. São Paulo: 
Livraria Martins, 1941 (adaptado). 
O impacto das ferrovias na promoção de projetos de 
colonização com base em imigrantes europeus foi 
importante, porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `o percurso dos imigrantes até o interior, antes das 
ferrovias, era feito a pé ou em muares; no entanto, o 
tempo de viagem era aceitável, uma vez que o café 
era plantado nas proximidades da capital, São Paulo.` },
      { id: 'B', type: 'text', value: `a expansão da malha ferroviária pelo interior de São 
Paulo permitiu que mão-de-obra estrangeira fosse 
contratada para trabalhar em cafezais de regiões cada 
vez mais distantes do porto de Santos.` },
      { id: 'C', type: 'text', value: `o escoamento da produção de café se viu beneficiado 
pelos aportes de capital, principalmente de colonos 
italianos, que desejavam melhorar sua situação 
econômica.` },
      { id: 'D', type: 'text', value: `os fazendeiros puderam prescindir da mão-de-obra 
europeia e contrataram trabalhadores brasileiros 
provenientes de outras regiões para trabalhar em suas 
plantações.` },
      { id: 'E', type: 'text', value: `as notícias de terras acessíveis atraíram para São 
Paulo 
grande 
quantidade 
de 
imigrantes, 
que 
adquiriram vastas propriedades produtivas.` },
    ],
    correct: 'B',
    explanation: `A expansão da malha ferroviária a partir de 1867 encurtou drasticamente o trajeto entre Santos e o interior e viabilizou projetos de colonização, permitindo contratar mão de obra imigrante europeia para cafezais cada vez mais distantes do porto — por isso B. A minimiza as dificuldades do antigo percurso e localiza o café perto da capital. C, D e E distorcem o processo, pois não foram o capital dos colonos, a dispensa do imigrante ou a compra de vastas propriedades que marcaram o período.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Além dos inúmeros eletrodomésticos e bens 
eletrônicos, o automóvel produzido pela indústria fordista 
promoveu, a partir dos anos 50, mudanças significativas no 
modo de vida dos consumidores e também na habitação e 
nas cidades. Com a massificação do consumo dos bens 
modernos, dos eletroeletrônicos e também do automóvel, 
mudaram radicalmente o modo de vida, os valores, a 
cultura e o conjunto do ambiente construído. Da ocupação 
do solo urbano até o interior da moradia, a transformação 
foi profunda. 
MARICATO, E. Urbanismo na periferia do mundo globalizado: 
metrópoles brasileiras. Disponível em: http://www.scielo.br. 
Acesso em: 12 ago. 2009 (adaptado). 
Uma das consequências das inovações tecnológicas das 
últimas décadas, que determinaram diferentes formas de 
uso e ocupação do espaço geográfico, é a instituição das 
chamadas cidades globais, que se caracterizam por`,
    alternatives: [
      { id: 'A', type: 'text', value: `possuírem o mesmo nível de influência no cenário 
mundial.` },
      { id: 'B', type: 'text', value: `fortalecerem os laços de cidadania e solidariedade 
entre os membros das diversas comunidades.` },
      { id: 'C', type: 'text', value: `constituírem um passo importante para a diminuição 
das desigualdades sociais causadas pela polarização 
social e pela segregação urbana.` },
      { id: 'D', type: 'text', value: `terem sido diretamente impactadas pelo processo de 
internacionalização da economia, desencadeado a 
partir do final dos anos 1970.` },
      { id: 'E', type: 'text', value: `terem sua origem diretamente relacionadas ao 
processo de colonização ocidental do século XIX.` },
    ],
    correct: 'D',
    explanation: `As 'cidades globais' resultam da internacionalização da economia desencadeada a partir do fim dos anos 1970, tornando-se nós de comando dos fluxos financeiros e produtivos mundiais — por isso D. A é falsa, pois tais cidades têm níveis de influência desiguais. B e C contrariam a realidade, já que elas tendem a aprofundar a segregação e a desigualdade social. E remete erroneamente sua origem à colonização do século XIX.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Globalização', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Populações inteiras, nas cidades e na zona rural, 
dispõem da parafernália digital global como fonte de 
educação e de formação cultural. Essa simultaneidade de 
cultura e informação eletrônica com as formas tradicionais 
e orais é um desafio que necessita ser discutido. A 
exposição, via mídia eletrônica, com estilos e valores 
culturais de outras sociedades, pode inspirar apreço, mas 
também distorções e ressentimentos. Tanto quanto há 
necessidade de uma cultura tradicional de posse da 
educação letrada, também é necessário criar estratégias 
de alfabetização eletrônica, que passam a ser o grande 
canal de informação das culturas segmentadas no interior 
dos grandes centros urbanos e das zonas rurais. Um novo 
modelo de educação. 
BRIGAGÃO, C. E.; RODRIGUES, G. A globalização a olho nu: o 
mundo conectado. São Paulo: Moderna, 1998 (adaptado). 
Com base no texto e considerando os impactos culturais 
da difusão das tecnologias de informação no marco da 
globalização, depreende-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a ampla difusão das tecnologias de informação nos 
centros urbanos e no meio rural suscita o contato entre 
diferentes culturas e, ao mesmo tempo, traz a 
necessidade de reformular as concepções tradicionais 
de educação.` },
      { id: 'B', type: 'text', value: `a apropriação, por parte de um grupo social, de 
valores e ideias de outras culturas para benefício 
próprio é fonte de conflitos e ressentimentos.` },
      { id: 'C', type: 'text', value: `as mudanças sociais e culturais que acompanham o 
processo de globalização, ao mesmo tempo em que 
refletem a preponderância da cultura urbana, tornam 
obsoletas as formas de educação tradicionais próprias 
do meio rural.` },
      { id: 'D', type: 'text', value: `as populações nos grandes centros urbanos e no meio 
rural recorrem aos instrumentos e tecnologias de 
informação basicamente como meio de comunicação 
mútua, e não os veem como fontes de educação e 
cultura.` },
      { id: 'E', type: 'text', value: `a intensificação do fluxo de comunicação por meios 
eletrônicos, 
característica 
do 
processo 
de 
globalização, está dissociada do desenvolvimento 
social e cultural que ocorre no meio rural.` },
    ],
    correct: 'A',
    explanation: `O texto conclui que a difusão das tecnologias de informação, no marco da globalização, aproxima culturas diferentes e, ao mesmo tempo, exige reformular as concepções tradicionais de educação, criando estratégias de 'alfabetização eletrônica' — por isso A. B e D reduzem o fenômeno a conflito ou a mera comunicação. C afirma que a educação rural se tornaria obsoleta, o que o texto não defende. E nega a relação entre comunicação eletrônica e desenvolvimento no meio rural, contrariando o texto.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `CIATTONI, A. Géographie. L’espace mondial. 
Paris: Hatier, 2008 (adaptado). 
A partir do mapa apresentado, é possível inferir que nas 
últimas décadas do século XX, registraram-se processos 
que resultaram em transformações na distribuição das 
atividades econômicas e da população sobre o território 
brasileiro, com reflexos no PIB por habitante. Assim,`,
    images: ['/enem/2009/images/enem_2009_d1_q73.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `as desigualdades econômicas existentes entre 
regiões brasileiras desapareceram, tendo em vista a 
modernização tecnológica e o crescimento vivido 
pelo país.` },
      { id: 'B', type: 'text', value: `os novos fluxos migratórios instaurados em direção 
ao Norte e ao Centro-Oeste do país prejudicaram o 
desenvolvimento socioeconômico dessas regiões, 
incapazes de atender ao crescimento da demanda 
por postos de trabalho.` },
      { id: 'C', type: 'text', value: `o Sudeste brasileiro deixou de ser a região com o 
maior PIB industrial a partir do processo de 
desconcentração espacial do setor, em direção a 
outras regiões do país.` },
      { id: 'D', type: 'text', value: `o avanço da fronteira econômica sobre os estados 
da região Norte e do Centro-Oeste resultou no 
desenvolvimento 
e 
na 
introdução 
de 
novas 
atividades econômicas, tanto nos setores primário e 
secundário, como no terciário.` },
      { id: 'E', type: 'text', value: `o Nordeste tem vivido, ao contrário do restante do 
país, um período de retração econômica, como 
consequência da falta de investimentos no setor 
industrial com base na moderna tecnologia.` },
    ],
    correct: 'D',
    explanation: `A leitura do mapa indica que o avanço da fronteira econômica sobre o Norte e o Centro-Oeste, nas últimas décadas do século XX, introduziu novas atividades nos setores primário, secundário e terciário, alterando a distribuição da população e do PIB por habitante — por isso D. A ('desigualdades desapareceram') e C ('Sudeste deixou de ter o maior PIB industrial') exageram. B afirma falso prejuízo dessas regiões. E generaliza uma retração do Nordeste não sustentada pelos dados.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Indústria e comércio', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `No período 750-338 a. C., a Grécia antiga era 
composta por cidades-Estado, como por exemplo Atenas, 
Esparta, Tebas, que eram independentes umas das outras, 
mas partilhavam algumas características culturais, como a 
língua grega. No centro da Grécia, Delfos era um lugar de 
culto religioso frequentado por habitantes de todas as 
cidades-Estado. 
No período 1200-1600 d. C., na parte da Amazônia 
brasileira onde hoje está o Parque Nacional do Xingu, há 
vestígios de quinze cidades que eram cercadas por muros de 
madeira e que tinham até dois mil e quinhentos habitantes 
cada uma. Essas cidades eram ligadas por estradas a 
centros cerimoniais com grandes praças. Em torno delas 
havia roças, pomares e tanques para a criação de tartarugas. 
Aparentemente, epidemias dizimaram grande parte da 
população que lá vivia. 
Folha de S. Paulo, ago. 2008 (adaptado). 
Apesar das diferenças históricas e geográficas existentes 
entre as duas civilizações elas são semelhantes pois`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `as ruínas das cidades mencionadas atestam que 
grandes epidemias dizimaram suas populações.` },
      { id: 'B', type: 'text', value: `as cidades do Xingu desenvolveram a democracia, tal 
como foi concebida em Tebas.` },
      { id: 'C', type: 'text', value: `as duas civilizações tinham cidades autônomas e 
independentes entre si.` },
      { id: 'D', type: 'text', value: `os povos do Xingu falavam uma mesma língua, tal como 
nas cidades-Estado da Grécia.` },
      { id: 'E', type: 'text', value: `as cidades do Xingu dedicavam-se à arte e à filosofia tal 
como na Grécia.` },
    ],
    correct: 'C',
    explanation: `Apesar das diferenças de tempo e lugar, a Grécia antiga e as cidades do Xingu assemelham-se por serem formadas por cidades autônomas e independentes entre si — por isso C. A generaliza a causa (epidemias) que o texto atribui só ao Xingu. B inventa a existência de democracia nas cidades do Xingu. D supõe uma língua comum no Xingu que o texto não afirma. E atribui às cidades amazônicas a arte e a filosofia típicas da Grécia.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O movimento migratório no Brasil é significativo, 
principalmente em função do volume de pessoas que saem 
de uma região com destino a outras regiões. Um desses 
movimentos ficou famoso nos anos 80, quando muitos 
nordestinos deixaram a região Nordeste em direção ao 
Sudeste do Brasil. Segundo os dados do IBGE de 2000, este 
processo continuou crescente no período seguinte, os anos 
90, com um acréscimo de 7,6% nas migrações deste mesmo 
fluxo. A Pesquisa de Padrão de Vida, feita pelo IBGE, em 
1996, aponta que, entre os nordestinos que chegam ao 
Sudeste, 48,6% exercem trabalhos manuais não qualificados, 
18,5% são trabalhadores manuais qualificados, enquanto 
13,5%, embora não sejam trabalhadores manuais, se 
encontram em áreas que não exigem formação profissional. 
O mesmo estudo indica também que esses migrantes 
possuem, em média, condição de vida e nível educacional 
acima dos de seus conterrâneos e abaixo dos de cidadãos 
estáveis do Sudeste. 
Disponível em: http://www.ibge.gov.br. Acesso em: 30 jul. 2009 (adaptado). 
Com base nas informações contidas no texto, depreende-se 
que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o processo migratório foi desencadeado por ações de 
governo para viabilizar a produção industrial no Sudeste.` },
      { id: 'B', type: 'text', value: `os governos estaduais do Sudeste priorizaram a 
qualificação da mão-de-obra migrante.` },
      { id: 'C', type: 'text', value: `o processo de migração para o Sudeste contribui para o 
fenômeno conhecido como inchaço urbano.` },
      { id: 'D', type: 'text', value: `as migrações para o sudeste desencadearam a valorização 
do trabalho manual, sobretudo na década de 80.` },
      { id: 'E', type: 'text', value: `a falta de especialização dos migrantes é positiva para 
os empregadores, pois significa maior versatilidade 
profissional.` },
    ],
    correct: 'C',
    explanation: `O intenso fluxo migratório do Nordeste para o Sudeste, com mão de obra majoritariamente pouco qualificada, contribui para o 'inchaço urbano' das grandes cidades receptoras — por isso C. A atribui o movimento a uma ação planejada do governo. B afirma falsa prioridade estadual à qualificação da mão de obra. D inventa uma valorização do trabalho manual. E trata como positiva a baixa qualificação, contrariando o sentido social do texto.`,
    subject: ['geo'],
    topics: ['Demografia', 'Urbanização', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Apesar do aumento da produção no campo e da 
integração entre a indústria e a agricultura, parte da 
população da América do Sul ainda sofre com a 
subalimentação, o que gera conflitos pela posse de terra 
que podem ser verificados em várias áreas e que 
frequentemente chegam a provocar mortes. 
 
Um dos fatores que explica a subalimentação na América 
do Sul é`,
    alternatives: [
      { id: 'A', type: 'text', value: `a baixa inserção de sua agricultura no comércio 
mundial.` },
      { id: 'B', type: 'text', value: `a quantidade insuficiente de mão-de-obra para o 
trabalho agrícola.` },
      { id: 'C', type: 'text', value: `a presença de estruturas agrárias arcaicas formadas 
por latifúndios improdutivos.` },
      { id: 'D', type: 'text', value: `a situação conflituosa vivida no campo, que impede o 
crescimento da produção agrícola.` },
      { id: 'E', type: 'text', value: `os sistemas de cultivo mecanizado voltados para o 
abastecimento do mercado interno.` },
    ],
    correct: 'C',
    explanation: `A subalimentação na América do Sul explica-se, sobretudo, pela persistência de estruturas agrárias arcaicas, marcadas por latifúndios improdutivos e por forte concentração fundiária — por isso C. A é falsa, pois a agricultura regional é integrada ao comércio mundial. B inverte a questão, já que não falta mão de obra. D confunde causa e efeito. E não explica a fome, pois a mecanização voltada ao mercado interno não é a origem do problema.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A luta pela terra no Brasil é marcada por diversos 
aspectos que chamam a atenção. Entre os aspectos 
positivos, destaca-se a perseverança dos movimentos do 
campesinato e, entre os aspectos negativos, a violência 
que manchou de sangue essa história. Os movimentos 
pela reforma agrária articularam-se por todo o território 
nacional, principalmente entre 1985 e 1996, e conseguiram 
de maneira expressiva a inserção desse tema nas 
discussões pelo acesso à terra. O mapa seguinte 
apresenta a distribuição dos conflitos agrários em todas as 
regiões do Brasil nesse período, e o número de mortes 
ocorridas nessas lutas. 
 
OLIVEIRA, A. U. A longa marcha do campesinato brasileiro: movimentos sociais, conflitos e 
reforma agrária. Revista Estudos Avançados. Vol. 15 n. 43, São Paulo, set./dez. 2001. 
 
Com base nas informações do mapa acerca dos conflitos 
pela posse de terra no Brasil, a região`,
    images: ['/enem/2009/images/enem_2009_d1_q77.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `conhecida 
historicamente 
como 
das 
Missões 
Jesuíticas é a de maior violência.` },
      { id: 'B', type: 'text', value: `do Bico do Papagaio apresenta os números mais 
expressivos.` },
      { id: 'C', type: 'text', value: `conhecida como oeste baiano tem o maior número de 
mortes.` },
      { id: 'D', type: 'text', value: `do norte do Mato Grosso, área de expansão da 
agricultura mecanizada, é a mais violenta do país.` },
      { id: 'E', type: 'text', value: `da Zona da Mata mineira teve o maior registro de 
mortes.` },
    ],
    correct: 'B',
    explanation: `A leitura do mapa dos conflitos agrários mostra que a região do Bico do Papagaio — na divisa de Tocantins, Pará e Maranhão — apresenta os números mais expressivos de conflitos e de mortes, por isso B. Trata-se de uma área de intensa disputa pela posse da terra, ligada à expansão da fronteira agrícola na Amazônia Legal. As demais alternativas localizam equivocadamente o pico da violência: as Missões jesuíticas (A), o oeste baiano (C), o norte do Mato Grosso (D) e a Zona da Mata mineira (E) não correspondem aos maiores registros apontados no mapa.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Cartografia', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O gráfico mostra o percentual de áreas ocupadas, segundo 
o tipo de propriedade rural no Brasil, no ano de 2006. 
 
Área ocupada pelos imóveis rurais 
 
MDA/INCRA (DIEESE, 2006) 
Disponível em: http://www.sober.org.br. Acesso em: 6 ago. 2009. 
 
De acordo com o gráfico e com referência à distribuição 
das áreas rurais no Brasil, conclui-se que`,
    images: ['/enem/2009/images/enem_2009_d1_q78.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `imóveis improdutivos são predominantes em relação 
às demais formas de ocupação da terra no âmbito 
nacional e na maioria das regiões.` },
      { id: 'B', type: 'text', value: `o índice de 63,8% de imóveis improdutivos demonstra 
que grande parte do solo brasileiro é de baixa 
fertilidade, impróprio para a atividade agrícola.` },
      { id: 'C', type: 'text', value: `o percentual de imóveis improdutivos iguala-se ao de 
imóveis produtivos somados aos minifúndios, o que 
justifica a existência de conflitos por terra.` },
      { id: 'D', type: 'text', value: `a região Norte apresenta o segundo menor percentual 
de imóveis produtivos, possivelmente em razão da 
presença de densa cobertura florestal, protegida por 
legislação ambiental.` },
      { id: 'E', type: 'text', value: `a região Centro-Oeste apresenta o menor percentual 
de área ocupada por minifúndios, o que inviabiliza 
políticas de reforma agrária nesta região.` },
    ],
    correct: 'A',
    explanation: `O gráfico evidencia que os imóveis improdutivos predominam em relação às demais formas de ocupação da terra, tanto no âmbito nacional quanto na maioria das regiões — por isso A. B atribui o dado à baixa fertilidade do solo, o que o gráfico não mostra. C e D fazem comparações numéricas incorretas entre as categorias. E tira conclusão indevida sobre a inviabilidade da reforma agrária no Centro-Oeste.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Entre 2004 e 2008, pelo menos 8 mil brasileiros foram 
libertados de fazendas onde trabalhavam como se fossem 
escravos. O governo criou uma lista em que ficaram expostos 
os nomes dos fazendeiros flagrados pela fiscalização. No 
Norte, Nordeste e Centro-Oeste, regiões que mais sofrem com 
a fraqueza do poder público, o bloqueio dos canais de 
financiamento agrícola para tais fazendeiros tem sido a 
principal arma de combate a esse problema, mas os governos 
ainda sofrem com a falta de informações, provocada pelas 
distâncias e pelo poder intimidador dos proprietários. 
Organizações não governamentais e grupos como a Pastoral 
da Terra têm agido corajosamente, acionando as autoridades 
públicas e ministrando aulas sobre direitos sociais e 
trabalhistas. 
“Plano Nacional para Erradicação do Trabalho Escravo”. Disponível em: 
http://www.mte.gov.br. Acesso em: 17 mar. 2009 (adaptado). 
Nos lugares mencionados no texto, o papel dos grupos de 
defesa dos direitos humanos tem sido fundamental, porque 
eles`,
    alternatives: [
      { id: 'A', type: 'text', value: `negociam com os fazendeiros o reajuste dos 
honorários e a redução da carga horária de trabalho.` },
      { id: 'B', type: 'text', value: `defendem os direitos dos consumidores junto aos 
armazéns e mercados das fazendas e carvoarias.` },
      { id: 'C', type: 'text', value: `substituem as autoridades policiais e jurídicas na 
resolução dos conflitos entre patrões e empregados.` },
      { id: 'D', type: 'text', value: `encaminham denúncias ao Ministério Público e 
promovem 
ações 
de 
conscientização 
dos 
trabalhadores.` },
      { id: 'E', type: 'text', value: `fortalecem a administração pública ao ministrarem 
aulas aos seus servidores.` },
    ],
    correct: 'D',
    explanation: `Nas regiões citadas, os grupos de defesa dos direitos humanos (como a Comissão Pastoral da Terra) atuam encaminhando denúncias ao Ministério Público e promovendo a conscientização dos trabalhadores sobre seus direitos sociais e trabalhistas — por isso D. A e B desvirtuam seu papel (negociar honorários ou defender consumidores). C afirma que substituiriam as autoridades policiais e jurídicas, o que não ocorre. E restringe sua ação a treinar servidores públicos.`,
    subject: ['soc'],
    topics: ['Direitos humanos', 'Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O homem construiu sua história por meio do 
constante processo de ocupação e transformação do 
espaço natural. Na verdade, o que variou, nos diversos 
momentos da experiência humana, foi a intensidade dessa 
exploração. 
Disponível em: http://www.simposioreformaagraria.propp.ufu.br. 
Acesso em: 09 jul. 2009 (adaptado). 
Uma das consequências que pode ser atribuída à 
crescente intensificação da exploração de recursos 
naturais, facilitada pelo desenvolvimento tecnológico ao 
longo da história, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `a diminuição do comércio entre países e regiões, que 
se tornaram autossuficientes na produção de bens e 
serviços.` },
      { id: 'B', type: 'text', value: `a ocorrência de desastres ambientais de grandes 
proporções, como no caso de derramamento de óleo 
por navios petroleiros.` },
      { id: 'C', type: 'text', value: `a melhora generalizada das condições de vida da 
população mundial, a partir da eliminação das 
desigualdades econômicas na atualidade.` },
      { id: 'D', type: 'text', value: `o desmatamento, que eliminou grandes extensões de 
diversos biomas improdutivos, cujas áreas passaram a 
ser ocupadas por centros industriais modernos.` },
      { id: 'E', type: 'text', value: `o aumento demográfico mundial, sobretudo nos países 
mais desenvolvidos, que apresentam altas taxas de 
crescimento vegetativo.` },
    ],
    correct: 'B',
    explanation: `A intensificação da exploração de recursos naturais, facilitada pela tecnologia, tem como consequência a ocorrência de desastres ambientais de grandes proporções, como os derramamentos de óleo por navios petroleiros — por isso B. A ('diminuição do comércio') e C ('fim das desigualdades') são irreais. D trata biomas como 'improdutivos' e vê o desmatamento como benéfico. E erra ao concentrar o crescimento demográfico nos países mais desenvolvidos.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `No presente, observa-se crescente atenção aos efeitos da 
atividade humana, em diferentes áreas, sobre o meio 
ambiente, sendo constante, nos fóruns internacionais e 
nas instâncias nacionais, a referência à sustentabilidade 
como princípio orientador de ações e propostas que deles 
emanam. A sustentabilidade explica-se pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `incapacidade de se manter uma atividade econômica 
ao longo do tempo sem causar danos ao meio 
ambiente.` },
      { id: 'B', type: 'text', value: `incompatibilidade 
entre 
crescimento 
econômico 
acelerado e preservação de recursos naturais e de 
fontes não renováveis de energia.` },
      { id: 'C', type: 'text', value: `interação de todas as dimensões do bem-estar 
humano com o crescimento econômico, sem a 
preocupação com a conservação dos recursos 
naturais que estivera presente desde a Antiguidade.` },
      { id: 'D', type: 'text', value: `proteção da biodiversidade em face das ameaças de 
destruição que sofrem as florestas tropicais devido ao 
avanço 
de 
atividades 
como 
a 
mineração, 
a 
monocultura, o tráfico de madeira e de espécies 
selvagens.` },
      { id: 'E', type: 'text', value: `necessidade de se satisfazer as demandas atuais 
colocadas pelo desenvolvimento sem comprometer a 
capacidade de as gerações futuras atenderem suas 
próprias necessidades nos campos econômico, social 
e ambiental.` },
    ],
    correct: 'E',
    explanation: `A sustentabilidade define-se como a capacidade de satisfazer as necessidades atuais sem comprometer a possibilidade de as gerações futuras atenderem às suas próprias necessidades, nas dimensões econômica, social e ambiental — por isso E, que reproduz o conceito do Relatório Brundtland. A e B afirmam uma incompatibilidade absoluta entre economia e meio ambiente. C nega indevidamente a preocupação com a conservação dos recursos. D reduz o conceito apenas à proteção da biodiversidade florestal.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Com a perspectiva do desaparecimento das 
geleiras no Polo Norte, grandes reservas de petróleo e 
minérios, hoje inacessíveis, poderão ser exploradas. E já 
atiçam a cobiça das potências. 
KOPP, D. Guerra Fria sobre o Ártico. Le monde diplomatique Brasil. 
Setembro, n. 2, 2007 (adaptado). 
No cenário de que trata o texto, a exploração de jazidas de 
petróleo, bem como de minérios - diamante, ouro, prata, 
cobre, chumbo, zinco - torna-se atraente não só em 
função de seu formidável potencial, mas também por`,
    alternatives: [
      { id: 'A', type: 'text', value: `situar-se em uma zona geopolítica mais estável que o 
Oriente Médio.` },
      { id: 'B', type: 'text', value: `possibilitar o povoamento de uma região pouco 
habitada, além de promover seu desenvolvimento 
econômico.` },
      { id: 'C', type: 'text', value: `garantir, aos países em desenvolvimento, acesso a 
matérias-primas 
e 
energia, 
necessárias 
ao 
crescimento econômico.` },
      { id: 'D', type: 'text', value: `contribuir para a redução da poluição em áreas 
ambientalmente já degradadas devido ao grande 
volume da produção industrial, como ocorreu na 
Europa.` },
      { id: 'E', type: 'text', value: `promover a participação dos combustíveis fósseis na 
matriz energética mundial, dominada, majoritariamente, 
pelas fontes renováveis, de maior custo.` },
    ],
    correct: 'A',
    explanation: `No contexto do degelo do Ártico, a exploração de petróleo e minérios torna-se atraente também por situar-se numa zona geopolítica mais estável do que o Oriente Médio, reduzindo riscos de fornecimento — por isso A. B e C idealizam o povoamento da região e o acesso de países em desenvolvimento. D afirma uma improvável redução da poluição. E inverte a matriz energética mundial, que é dominada por fontes fósseis, e não renováveis.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `No mundo contemporâneo, as reservas energéticas tornam-se estratégicas para muitos países no cenário internacional. Os 
gráficos apresentados mostram os dez países com as maiores reservas de petróleo e gas natural em reservas 
comprovadas até janeiro de 2008. 
As reservas venezuelanas figuram em ambas as classificações porque`,
    images: ['/enem/2009/images/enem_2009_d1_q83_1.jpg', '/enem/2009/images/enem_2009_d1_q83_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a Venezuela já está integrada ao MERCOSUL.` },
      { id: 'B', type: 'text', value: `são reservas comprovadas, mas ainda inexploradas.` },
      { id: 'C', type: 'text', value: `podem ser exploradas sem causarem alterações ambientais.` },
      { id: 'D', type: 'text', value: `já estão comprometidas com o setor industrial interno daquele país.` },
      { id: 'E', type: 'text', value: `a Venezuela é uma grande potência energética mundial.` },
    ],
    correct: 'E',
    explanation: `A Venezuela figura entre os maiores detentores de reservas tanto de petróleo quanto de gás natural porque é, de fato, uma grande potência energética mundial — por isso E. A (integração ao Mercosul) não tem relação com o volume das reservas. B e C fazem afirmações não sustentadas pelos gráficos (reservas 'inexploradas' ou 'sem impacto ambiental'). D restringe indevidamente as reservas ao consumo industrial interno do país.`,
    subject: ['geo'],
    topics: ['Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `As terras brasileiras foram divididas por meio de tratados entre 
Portugal e Espanha. De acordo com esses tratados, 
identificados no mapa, conclui-se que`,
    images: ['/enem/2009/images/enem_2009_d1_q84.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Portugal, pelo Tratado de Tordesilhas, detinha o controle 
da foz do rio Amazonas.` },
      { id: 'B', type: 'text', value: `o Tratado de Tordesilhas utilizava os rios como limite 
físico da América portuguesa.` },
      { id: 'C', type: 'text', value: `o Tratado de Madri reconheceu a expansão portuguesa 
além da linha de Tordesilhas.` },
      { id: 'D', type: 'text', value: `Portugal, pelo Tratado de San Ildefonso, perdia territórios 
na América em relação ao de Tordesilhas.` },
      { id: 'E', type: 'text', value: `o Tratado de Madri criou a divisão administrativa da 
América Portuguesa em Vice-Reinos Oriental e Ocidental. ` },
    ],
    correct: 'C',
    explanation: `A leitura do mapa dos tratados mostra que o Tratado de Madri (1750) reconheceu a expansão portuguesa para além da linha de Tordesilhas, consagrando o princípio do uti possidetis (posse efetiva da terra) — por isso C. A e B fazem afirmações falsas sobre Tordesilhas (controle da foz do Amazonas e uso de rios como limite). D inverte o resultado do Tratado de Santo Ildefonso. E inventa uma divisão da América portuguesa em vice-reinos.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `O clima é um dos elementos fundamentais não só 
na caracterização das paisagens naturais, mas também no 
histórico de ocupação do espaço geográfico. 
 
Tendo em vista determinada restrição climática, a figura 
que representa o uso de tecnologia voltada para a 
produção é:`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2009/images/enem_2009_d1_q85_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2009/images/enem_2009_d1_q85_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2009/images/enem_2009_d1_q85_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2009/images/enem_2009_d1_q85_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2009/images/enem_2009_d1_q85_E.jpg` },
    ],
    correct: 'D',
    explanation: `O enunciado pede a figura que representa o uso de tecnologia voltada para a produção diante de uma restrição climática ligada à escassez de água. A resposta é D, que retrata a irrigação, técnica que supre a falta de chuvas e viabiliza o cultivo em áreas com déficit hídrico. As demais imagens não associam o emprego de tecnologia à superação dessa limitação climática, retratando paisagens ou práticas que não respondem especificamente à restrição descrita.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Disponível em: http://clickdigitalsj.com.br. Acesso em: 9 jul. 2009. 
;
 
Disponível em: http://conexaoambiental.zip.net/images/ 
charge.jpg. Acesso em: 9 jul. 2009. 
Reunindo-se as informações contidas nas duas charges, 
infere-se que`,
    images: ['/enem/2009/images/enem_2009_d1_q86_1.jpg', '/enem/2009/images/enem_2009_d1_q86_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `os regimes climáticos da Terra são desprovidos de 
padrões que os caracterizem.` },
      { id: 'B', type: 'text', value: `as intervenções humanas nas regiões polares são 
mais intensas que em outras partes do globo.` },
      { id: 'C', type: 'text', value: `o processo de aquecimento global será detido com a 
eliminação das queimadas.` },
      { id: 'D', type: 'text', value: `a destruição das florestas tropicais é uma das causas 
do aumento da temperatura em locais distantes como 
os polos.` },
      { id: 'E', type: 'text', value: `os parâmetros climáticos modificados pelo homem 
afetam todo o planeta, mas os processos naturais têm 
alcance regional.` },
    ],
    correct: 'D',
    explanation: `Reunindo as informações das duas charges sobre o clima, infere-se que a destruição das florestas tropicais é uma das causas do aumento da temperatura inclusive em locais distantes, como os polos — por isso D. A nega a existência de padrões climáticos. B e C fazem afirmações absolutas e falsas (intervenção humana maior nos polos. Fim do aquecimento apenas com o fim das queimadas). E limita os processos naturais à escala regional, contrariando a ideia de impacto global.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `Na figura, observa-se uma classificação de regiões da América do Sul segundo o grau de aridez verificado. 

 
Em relação às regiões marcadas na figura, observa-se que`,
    images: ['/enem/2009/images/enem_2009_d1_q87.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a existência de áreas superáridas, áridas e semiáridas é resultado do processo de desertificação, de intensidade 
variável, causado pela ação humana.` },
      { id: 'B', type: 'text', value: `o emprego de modernas técnicas de irrigação possibilitou a expansão da agricultura em determinadas áreas do 
semiárido, integrando-as ao comércio internacional.` },
      { id: 'C', type: 'text', value: `o semiárido, por apresentar déficit de precipitação, passou a ser habitado a partir da Idade Moderna, graças ao avanço
científico e tecnológico.` },
      { id: 'D', type: 'text', value: `as áreas com escassez hídrica na América do Sul se restringem às regiões tropicais, onde as médias de temperatura 
anual são mais altas, justificando a falta de desenvolvimento e os piores indicadores sociais.` },
      { id: 'E', type: 'text', value: `o mesmo tipo de cobertura vegetal é encontrado nas áreas superáridas, áridas e semiáridas, mas essa cobertura, embora adaptada às condições climáticas, é desprovida de valor econômico.` },
    ],
    correct: 'B',
    explanation: `Na classificação das áreas áridas e semiáridas da América do Sul, observa-se que o emprego de modernas técnicas de irrigação permitiu expandir a agricultura em certas áreas do semiárido, integrando-as ao comércio internacional (como a fruticultura irrigada no Vale do São Francisco) — por isso B. A atribui toda a aridez à desertificação humana. C data erroneamente a ocupação do semiárido. D restringe a escassez hídrica aos trópicos. E nega valor econômico à vegetação adaptada.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `À medida que a demanda por água aumenta, as reservas 
desse recurso vão se tornando imprevisíveis. Modelos 
matemáticos que analisam os efeitos das mudanças 
climáticas sobre a disponibilidade de água no futuro 
indicam que haverá escassez em muitas regiões do 
planeta. São esperadas mudanças nos padrões de 
precipitação, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `o maior aquecimento implica menor formação de 
nuvens e, consequentemente, a eliminação de áreas 
úmidas e subúmidas do globo.` },
      { id: 'B', type: 'text', value: `as chuvas frontais ficarão restritas ao tempo de 
permanência 
da 
frente 
em 
uma 
determinada 
localidade, o que limitará a produtividade das 
atividades agrícolas.` },
      { id: 'C', type: 'text', value: `as 
modificações 
decorrentes 
do 
aumento 
da 
temperatura do ar diminuirão a umidade e, portanto, 
aumentarão a aridez em todo o planeta.` },
      { id: 'D', type: 'text', value: `a elevação do nível dos mares pelo derretimento das 
geleiras acarretará redução na ocorrência de chuvas 
nos continentes, o que implicará a escassez de água 
para abastecimento.` },
      { id: 'E', type: 'text', value: `a origem da chuva está diretamente relacionada 
com a temperatura do ar, sendo que atividades 
antropogênicas 
são 
capazes 
de 
provocar 
interferências em escala local e global.` },
    ],
    correct: 'E',
    explanation: `As mudanças nos padrões de precipitação ocorrem porque a origem das chuvas está diretamente ligada à temperatura do ar, e as atividades antrópicas, ao alterarem essa temperatura, são capazes de interferir no regime de chuvas em escala local e global — por isso E. A, C e D fazem previsões deterministas e simplistas (eliminação de áreas úmidas, aumento da aridez em 'todo o planeta', redução geral de chuvas pela elevação do mar). B restringe o fenômeno apenas às chuvas frontais.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `A mais profunda objeção que se faz à ideia da 
criação de uma cidade, como Brasília, é que o seu 
desenvolvimento não poderá jamais ser natural. É uma 
objeção muito séria, pois provém de uma concepção de 
vida fundamental: a de que a atividade social e cultural não 
pode ser uma construção. Esquecem-se, porém, aqueles 
que fazem tal crítica, que o Brasil, como praticamente toda 
a América, é criação do homem ocidental. 
PEDROSA, M. Utopia: obra de arte. Vis - Revista do Programa de 
Pós-graduação em Arte (UnB), Vol. 5, n. 1, 2006 (adaptado). 
As ideias apontadas no texto estão em oposição, porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `a cultura dos povos é reduzida a exemplos 
esquemáticos que não encontram respaldo na história 
do Brasil ou da América.` },
      { id: 'B', type: 'text', value: `as cidades, na primeira afirmação, têm um papel mais 
fraco na vida social, enquanto a América é mostrada 
como um exemplo a ser evitado.` },
      { id: 'C', type: 'text', value: `a objeção inicial, de que as cidades não podem ser 
inventadas, é negada logo em seguida pelo exemplo 
utópico da colonização da América.` },
      { id: 'D', type: 'text', value: `a concepção fundamental da primeira afirmação 
defende a construção de cidades e a segunda mostra, 
historicamente, que essa estratégia acarretou sérios 
problemas.` },
      { id: 'E', type: 'text', value: `a primeira entende que as cidades devem ser 
organismos vivos, que nascem de forma espontânea, 
e a segunda mostra que há exemplos históricos que 
demonstram o contrário.` },
    ],
    correct: 'E',
    explanation: `As ideias se opõem porque a primeira concebe a cidade como organismo vivo, que deveria nascer e crescer de forma espontânea e natural, enquanto a segunda mostra, com o exemplo do Brasil e de toda a América, que cidades e sociedades podem ser deliberadamente criadas pelo homem ocidental — por isso E. A, B e C distorcem a relação entre as duas afirmações. D inverte as posições, atribuindo à primeira a defesa da construção planejada das cidades.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2009,
    day: 1,
    text: `As áreas do planalto do cerrado - como a 
chapada dos Guimarães, a serra de Tapirapuã e a serra 
dos Parecis, no Mato Grosso, com altitudes que variam 
de 400 m a 800 m - são importantes para a planície 
pantaneira mato-grossense (com altitude média inferior a 
200 m), no que se refere à manutenção do nível de água, 
sobretudo durante a estiagem. Nas cheias, a inundação 
ocorre em função da alta pluviosidade nas cabeceiras 
dos rios, do afloramento de lençóis freáticos e da baixa 
declividade do relevo, entre outros fatores. Durante a 
estiagem, a grande biodiversidade é assegurada pelas 
águas da calha dos principais rios, cujo volume tem 
diminuído, principalmente nas cabeceiras. 
Cabeceiras ameaçadas. Ciência Hoje. Rio de Janeiro: 
SBPC. Vol. 42, jun. 2008 (adaptado). 
A medida mais eficaz a ser tomada, visando à 
conservação da planície pantaneira e à preservação de 
sua grande biodiversidade, é a conscientização da 
sociedade e a organização de movimentos sociais que 
exijam`,
    alternatives: [
      { id: 'A', type: 'text', value: `a criação de parques ecológicos na área do pantanal 
mato-grossense.` },
      { id: 'B', type: 'text', value: `a proibição da pesca e da caça, que tanto ameaçam 
a biodiversidade.` },
      { id: 'C', type: 'text', value: `o aumento das pastagens na área da planície, para 
que a cobertura vegetal, composta de gramíneas, 
evite a erosão do solo.` },
      { id: 'D', type: 'text', value: `o 
controle 
do 
desmatamento 
e 
da 
erosão, 
principalmente nas nascentes dos rios responsáveis 
pelo nível das águas durante o período de cheias.` },
      { id: 'E', type: 'text', value: `a construção de barragens, para que o nível das 
águas dos rios seja mantido, sobretudo na estiagem, 
sem prejudicar os ecossistemas.` },
    ],
    correct: 'D',
    explanation: `Para conservar a planície pantaneira e sua biodiversidade, a medida mais eficaz é o controle do desmatamento e da erosão, sobretudo nas nascentes (cabeceiras) dos rios do planalto do cerrado que abastecem o Pantanal — por isso D. A (criação de parques), B (proibição de pesca e caça) e E (construção de barragens) são paliativas ou até prejudiciais aos ecossistemas. C propõe aumentar pastagens, o que agravaria a degradação em vez de preservar a planície.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
];

export default ENEM_2009_D1;
