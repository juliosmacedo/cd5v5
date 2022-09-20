const URL = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?99736'

export const createWPWidget = () => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = URL
  const options = {
    enabled: true,
    chatButtonSetting: {
      backgroundColor: '#4dc247',
      ctaText: '',
      borderRadius: '25',
      marginLeft: '0',
      marginBottom: '50',
      marginRight: '50',
      position: 'right',
    },
    brandSetting: {
      brandName: 'Cozinha dos Cinco',
      brandSubTitle: 'Typically replies within a day',
      brandImg: 'https://i.imgur.com/v0psjqQ.jpeg',
      welcomeText: 'Faça seu pedido conosco. Nosso atendente já vai lhe atender.',
      messageText: '',
      backgroundColor: '#0a5f54',
      ctaText: 'Start Chat',
      borderRadius: '25',
      autoShow: false,
      phoneNumber: '5511982806680',
    },
  }
  s.onload = function () {
    CreateWhatsappChatWidget(options)
  }
  const x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)
}

