<template>
  <section class="container mx-auto my-32 lg:w-[800px] w-auto">
    <img
      class="img"
      src="https://images.ctfassets.net/aq13lwl6616q/1l0V8UVa67J2sBaci1BrWr/67b883dc9079ba82b016edfc8ce9a1c1/Complete_Vue_Zero_to_Mastery.png"
      alt=""
    />
    <img
      class="img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
      alt=""
    />
    <img
      class="img"
      src="https://media.licdn.com/dms/image/v2/C4D0BAQH8dM8WXWD6yg/company-logo_200_200/company-logo_200_200/0/1630552326850/modyo_logo?e=2147483647&v=beta&t=cNHHIASlLfKVjBXOFOmfjJcTFVccpuOKeRKJZWyE2-c"
      alt=""
    />
    <img
      class="img"
      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      alt=""
    />
    <img
      class="img"
      src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
      alt=""
    />
    <img
      class="img"
      src="https://miro.medium.com/v2/resize:fit:2048/1*xDi2csEAWxu95IEkaNdFUQ.png"
      alt=""
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  height: 430px;
}
.img {
  width: 0;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 0.5s ease;
}
.img:hover {
  opacity: 1;
  cursor: crosshair;
  width: 300px;
}
</style>