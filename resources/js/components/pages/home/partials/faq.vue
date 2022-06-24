<template>
  <div>

    <PCard :sectioned="false">
      <template>
        <PAccordion
          id="Polaris-Accordion"
          :accordions="questions"
          :open="0"
        />
      </template>
    </PCard>

  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "Why do I need to install the Tiktok pixel?",
          content:
            "Tiktok allows its advertisers using their pixel for 2 main goals; to know what their budget returned, in terms of traffic & sales, and to ‘retarget’ users, meaning to show ads to users who visited their store. Using the pixel is recommended by Tiktok themself.",
        },
        {
          title: "Can I install the pixel myself?",
          content:
            "You can install the Tiktok pixel yourself, but it might require some prior knowledge as to where exactly to implement the snippet of code. In addition when updating versions or store themes the pixel code might need to be relocated. TikPix takes care of all of those for you.",
        },
        {
          title: "Why do I need to install the Tiktok pixel?",
          content:
            "Absolutely not. The only thing Tikpix is currently doing, is injecting (implementing) a piece of code, essentially the Tiktok pixel - in your store’s javascript code, so you can utilize TIktok tracking & audience creation capabilities when advertising your store with Tiktok ads.",
        },
      ],
    };
  },
};
</script>