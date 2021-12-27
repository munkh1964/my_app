<template>
  <div class="home">
    <CContainer class="d-flex justify-content-center">
      <CRow>
        <CCard class="bg-info" style="width: 10rem; margin: 0.5rem">
          <CCardImage
            orientation="top"
            class="rounded mx-auto d-block"
            src="/assets/images/ordering.png"
          />
          <CCardBody>
            <CCardTitle class="text-center">Ordering</CCardTitle>
          </CCardBody>
        </CCard>
        <CCard class="bg-warning" style="width: 10rem; margin: 0.5rem">
          <CCardImage
            orientation="top"
            class="rounded mx-auto d-block"
            src="/assets/images/customers.png"
          />
          <CCardBody>
            <CCardTitle class="text-center">Customers</CCardTitle>
          </CCardBody>
        </CCard>
        <CCard class="bg-warning" style="width: 10rem; margin: 0.5rem">
          <CCardImage
            orientation="top"
            class="rounded mx-auto d-block"
            src="/assets/images/finance.png"
          />
          <CCardBody class="bg-warning">
            <CCardTitle class="text-center">Finance</CCardTitle>
          </CCardBody>
        </CCard>
        <CCard class="bg-danger" style="width: 10rem; margin: 0.5rem">
          <CCardImage
            orientation="top"
            class="rounded mx-auto d-block"
            src="/assets/images/settings.png"
          />
          <CCardBody>
            <CCardTitle class="text-center mt-2">Settings</CCardTitle>
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// @media (max-width: 575.98px) {
//   div.card {
//     width: 10rem;
//     margin: 0.5rem;
//   }
//   div.card h5 {
//     font-size: 2.5vw;
//   }
// }

// @media (min-width: 576px) and (max-width: 767.98px) {
//   div.card {
//     width: 9rem;
//     margin: 0.6rem;
//   }
// }

// @media (min-width: 768px) and (max-width: 991.98px) {
//   div.card {
//     width: 11rem;
//     margin: 0.6rem;
//   }
// }

// @media screen and (min-width: 992px) and (max-width: 1199.98px) {
//   div.card {
//     width: 13rem;
//     margin: 0.7rem;
//   }
// }

// @media (min-width: 1200px) {
//   div.card {
//     width: 15rem;
//     margin: 0.8rem;
//   }
// }
</style>

//  https://iconarchive.com/show/pretty-office-8-icons-by-custom-icon-design/Users-icon.html