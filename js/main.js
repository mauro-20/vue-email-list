// Attraverso l'apposita API di Boolean;
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.;
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.;

const app = new Vue({
  el: '#root',
  data: {
    emails: [],
    emailsNumber: 10
  },
  methods: {

  },
  beforeMount: function () {
    const emailTmp =[]
    for (let i = 0; i < this.emailsNumber; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        emailTmp.push(response.data.response);
      })
    }
    this.emails = emailTmp
  }
});