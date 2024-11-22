import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.scss',
})
export class MemberPageComponent {
  member: any;

  MOCK_MEMBERS = [
    {
      descName: 'Sra Bruna Ferreira - Psicologa',
      name: 'Bruna Ferreira',
      img: 'default.png',
      hist: 'A Sra Bruna Ferreira tem se mostrado uma otima profissional em sua carreira. O que mais nos preocupa foram alguns dados vazados apontando ela como uma possivel membro do Grupo ByteRoots. Vemos ela constantemente usando seu notebook em lugares publicos e alguns aparelhos telefonicos.Nao temos dados o suficiente para determinar seu envolvimento em um dos ataques cibernetico que estamos sofrendo, precisamos apurar esses dados.',
      reason: 'Apurar possivel envolvimento com o grupo ByteRoots',
    },
    {
      descName: 'Sra Laura Santos - Gerente Financeira / Palestrante',
      name: 'Laura Santos',
      img: 'amanda.png',
      hist: 'Conhecida por gerenciar grandes empresas de tecnologia. Nossas pesquisas mostram que Sra Laura tem envolvimento com alguns afilicacoes estrangeiras, nao sabemos com qual finalidade.Correm boatos que Laura financia algum grupo Ativista gerenciando e financiando seus atos. Uma delas uma organizacao chamada ByteRoots. (Informacao essa confirmada apos rastreio de dinheiro.)',
      reason: 'Obter informacoes sobre envolvimento a organizacao ByteRoots',
    },
    {
      descName: 'Dr. Lucas Moreira - Engenheiro Ambiental',
      name: 'Lucas Moreira',
      img: 'rafa.png',
      hist: 'Durante nossa investigacao, descobrimos que o Dr. Lucas Almeida era um renomado engenheiro ambiental, com vasta experiencia em projetos de sustentabilidade em empresas de grande porte. Contudo, sua carreira tomou um rumo sombrio quando, sob pressao de investidores, ele falsificou relatorios de impacto ambiental para garantir a aprovacao de um projeto de mineracao em uma reserva natural. As consequencias foram devastadoras: a destruicao do habitat local e a contaminacao das fontes de agua, resultando em um colapso ambiental que afetou a fauna e a flora da regiao. Estima-se que a degradacao tenha causado a morte de varias especies, alem de afetar as comunidades indigenas proximas.',
      reason:
        'Impedir que Dr. Lucas revele detalhes sobre a corrupçao que permeia o setor ambiental.',
    },
    {
      descName: 'Sr Miguel Cardoso - Jornalista',
      name: 'Miguel Cardoso',
      img: 'carlos.png',
      hist: 'O Sr. Miguel Cardoso e um pesquisador proeminente, conhecemos ele por suas investigacoes sobre ataques ciberneticos de hackers ativistas que, alarmantemente, tem se relacionado com a nossa organizacao. Em um esforco para retardar suas investigacoes ate que possamos neutraliza-lo, descobrimos detalhes sobre seu passado que podem ser explorados. Miguel cresceu em uma familia rural, e em uma conversa com sua tia Aparecida, revelacoes inquietantes vieram a tona: quando jovem, ele foi responsavel pela morte de seis bezerros filhotes apos envenenar a agua de um poço. Essa informacao pode ser uma arma poderosa, que pretendemos usar para desacreditar sua credibilidade.',
      reason: 'Neutralizar informacoes sobre a Route 66 sejam descobertas',
    },
    {
      descName: 'Sr Paulo Costa - Empreendedor',
      name: 'Paulo Costa',
      img: 'daniel.png',
      hist: 'Sr Paulo Costa e um de nossos principais alvos. Criador da BioGuard empresa de Agrotixicos para milharais. Seu negocio vem crescendo de maneira exponencial e ele tem comprado ainda mais nossas terras.Precisamos neutralizar o quanto antes para manter nossas pesquisas sobre o Synthex-9. Seus produtos continuam com grande impacto eliminando a reproducao de nosso virus.Nao temos grandes informacoes sobre sua vida pessoal, apenas sobre seu com o governo.',
      reason:
        'Neutralizar o avanco de compra de nossas terras e produtos que comprometem o Synthex-9',
    },
    {
      descName: 'Dr Sofia Mender - Professora / Virologista',
      name: 'Sofia Mendes',
      img: 'bianca.png',
      hist: 'Em nossas pesquisas descobrimos que a Dr Sofia deu aula em algumas Faculdade de Renome. Porem em uma de suas palestra praticas na Argentina, ela criou um pequeno Patogenico Artificial o Synthex-9.A proliferacao do Synthex-9 aumentou em uma pequena provincia. Longe e sem comunicacao, todos da provincia foram mortos. Alguns dados mostram que o Synthex-9 esta comecando a se proliferar novamente em uma variante mais forte. (Mortes Aproximada - 236 Pessoas)',
      reason: 'Neutralizar as informacoes sobre a cura da Synthex-9.',
    },
    {
      descName: 'Sr Thiago Almeida - Influencer (fofocarvorizando)',
      name: 'Thiago Almeida',
      img: 'vitor.png',
      hist: 'O Sr. Thiago Almeida se destaca como um influente formador de opiniao, amplamente conhecido por sua defesa fervorosa de movimentos politicos que favorecem a exploracao desenfreada do meio ambiente. Em um de seus videos provocativos, Thiago incitou uma massiva manifestacao contra uma de nossas empresas agropecuarias, atraindo a atencao da midia e polarizando a opiniao publica. Nossas investigacoes revelaram que essas acoes nao sao apenas conviccoes pessoais, mas uma estrategia de marketing meticulosamente planejada para promover seus proprios produtos e patrocinadores. Alem disso, descobrimos que Thiago foi socio de uma das mais notorias madeireiras clandestinas no coracao da Amazonia, onde seu envolvimento com trabalho escravo, utilizando nativos da regiao, expoe uma faceta sombria de sua busca por lucro.',
      reason: 'Neutralizar as campanhas de desinformacao que ameacam nossos interesses empresariais e desmantelar a rede de manipulacao que sustenta sua influencia sobre a opiniao publica.',
    },
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    let memberRoute = this.activeRoute.snapshot.queryParamMap.get('name');
    this.member = this.MOCK_MEMBERS.find(
      (member) => member.name === memberRoute
    );
  }

  backToMembers() {
    this.router.navigateByUrl('sala42');
  }
}
