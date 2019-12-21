import { shallowMount } from "@vue/test-utils";
import Holiday from "../../src/components/Holiday.vue";

describe("Holiday.vue", () => {
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
