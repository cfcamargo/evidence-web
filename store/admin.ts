import { defineStore } from "pinia";
import Product from "~/models/Product";

interface TicketProduct {
  id: number;
  title: string;
  brand: string;
  price: number;
}

export const useAdminStore = defineStore("admin", {
  state: () => ({
    component: "products",
    ticketList: [] as TicketProduct[],
  }),
  getters: {
    getComponent(): string {
      return this.component;
    },
    getTicketList(): TicketProduct[] {
      return this.ticketList;
    },
  },
  actions: {
    setComponent(component: string) {
      this.component = component;
    },
    addProductToTicketList(product: Product) {
      this.ticketList.push(product);
    },
    destroyProductInTicketList(index: number) {
      this.ticketList.splice(index, 1);
    },
  },
});
