import { shallowMount } from "@vue/test-utils";
// import Holiday from "../../src/components/Holiday.vue";
// import Holidays from "../../src/components/Holidays.vue";
import fetchDataMixin from "../../src/fetchDataMixin";

import FilterCountry from "../../src/components/FilterCountry.vue";
// import App from "../../src/App.vue";

describe("FormSubmitter", () => {
  it("emits an event with given country code as argument", async () => {
    const wrapper = shallowMount(FilterCountry);

    wrapper.find("[data-country]").setValue("germany");
    await wrapper.vm.$nextTick();

    wrapper.vm.onSubmit();
    expect(wrapper.emitted().submitted[0]).toEqual(["DE"]);
  });

  it("fetch the data from holiday API", async () => {
    const wrapper = shallowMount(FilterCountry);

    wrapper.vm.fetchData();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.holidays.length).toBe(2);
  });

  it("clears the input field when holidays data found for a given country", async () => {
    const wrapper = shallowMount(FilterCountry);

    wrapper.vm.fetchData();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.country).toBe(null);
  });

  it("does not clear the input field when no holidays data found for a given country", async () => {
    const wrapper = shallowMount(FilterCountry);
    wrapper.find("[data-country]").setValue("germanyff");
    expect(wrapper.vm.country).toBe("germanyff");
  });
});
