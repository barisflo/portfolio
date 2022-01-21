<template>
  <div class="container m-auto p-10 md:p-2 px-20">
    <div class="flex flex-wrap">
      <div class="md:w-1/2 w-full">
        <img class="rounded-full m-auto md:h-80 md:w-80 h-64 w-64 object-cover" src="../assets/cv.jpeg" alt="Picture of Florent Baris">
      </div>
      <div class="md:w-1/2 md:p-0 p-4 flex flex-col">
        <div class="flex-grow mt-4">
          <h1 class="text-4xl">{{ msg }}</h1>
          <h2 class="text-3xl ml-2 mt-5">About me</h2>
          <p class="ml-2 p-2">Passionate by project creation as a whole, I have a pluri-disciplinary
            profile. With a strong technical background, I today am experienced in
            Digital Transformation and Agile.
            I am ambitious, resourceful, adaptable, resilient and creative. I want to
            make a difference and solve real world problems.</p>
        </div>
        <div class="mt-2 space-x-2">
          <a href="static/CV%20Florent%20Baris%202022%20EN.pdf" target="_blank">
            <button class="bg-blue-600 hover:bg-blue-700">
              <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              </svg><span>CV</span>
            </button>
          </a>
          <a href="https://linkedin.com/in/florent-baris" target="_blank">
            <button class="bg-blue-600 hover:bg-blue-700">
              <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
              </svg><span>Linkedin</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
