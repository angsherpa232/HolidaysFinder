import { shallowMount } from "@vue/test-utils";
import Holiday from "../../src/components/Holiday.vue";
import FilterByCountry from "../../src/components/FilterByCountry.vue";

describe("Holiday component", () => {
  it("renders holiday info when holiday is passed as props", () => {
    const info = "will be on   2018 December 25, Friday";
    const holiday = {
      name: "Christmas",
      date: "2018-12-25",
      weekday: {
        date: {
          name: "Friday"
        }
      }
    };
    const wrapper = shallowMount(Holiday, {
      propsData: { holiday }
    });
    expect(wrapper.text()).toMatch(info);
  });
});

describe("FilterByCountry component", () => {
  it("emits an event with given country code as argument", async () => {
    const wrapper = shallowMount(FilterByCountry);

    wrapper.find("[data-country]").setValue("germany");
    await wrapper.vm.$nextTick();

    wrapper.vm.onSubmit();
    expect(wrapper.emitted().submitted[0]).toEqual(["DE"]);
  });

  it("fetch the mock data from API", async () => {
    const wrapper = shallowMount(FilterByCountry);
    wrapper.vm.fetchData();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.holidays.length).toBe(2);
  });

  it("clears the input field when holidays data found for a given country", async () => {
    const wrapper = shallowMount(FilterByCountry);
    wrapper.vm.fetchData();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.country).toBe(null);
  });

  it("does not clear the input field when no holidays data found for a given country", async () => {
    const wrapper = shallowMount(FilterByCountry);
    wrapper.find("[data-country]").setValue("germanyff");
    expect(wrapper.vm.country).toBe("germanyff");
  });
});
