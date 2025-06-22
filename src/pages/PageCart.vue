<script setup>
import { useCart } from '../composable/useCart'
import ComponentBanner from '../components/ComponentBanner.vue'
import ComponentStep from '../components/ComponentStep.vue'
import IconWrapper from '../components/IconWrapper.vue'
import ComponentEmpty from '../components/ComponentEmpty.vue'
const { cartItems, totalPrice, removeFromCart, updateQuantity } = useCart()
</script>

<template>
  <component-banner banner-title="Cart" />

  <template v-if="cartItems.length > 0">
    <main class="cart container">
      <component-step step="1" />

      <div class="cart__wrap">
        <section class="cart__content">
          <header class="cart__header">
            <h3 class="cart__headline hl5">刪除</h3>
            <h3 class="cart__headline hl5">產品</h3>
            <h3 class="cart__headline hl5">數量</h3>
            <h3 class="cart__headline hl5">價格</h3>
          </header>
          <ul class="cart__list">
            <li v-for="item in cartItems" :key="item.id" class="cart__item">
              <button
                class="cart__item-remove"
                @click="removeFromCart(item.id)"
              >
                <icon-wrapper
                  icon-name="remove"
                  class="cart__remove-icon hl5"
                />
              </button>
              <div class="cart__item-content">
                <div class="cart__item-picture">
                  <img :src="item.image" alt="long wallet" />
                </div>
                <h3 class="cart__item-name hl5">{{ item.title }}</h3>
              </div>
              <div class="cart__item-quantity">
                <button
                  class="cart__quantity-button hl5"
                  @click="
                    updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                  "
                >
                  -
                </button>
                <input
                  type="number"
                  :value="item.quantity"
                  min="1"
                  readonly
                  class="cart__quantity-input hl5"
                  @change="
                    (e) =>
                      updateQuantity(
                        item.id,
                        Math.max(Number(e.target.value), 1),
                      )
                  "
                />
                <button
                  class="cart__quantity-button hl5"
                  @click="updateQuantity(item.id, item.quantity + 1)"
                >
                  +
                </button>
              </div>
              <span class="cart__item-price hl5">{{
                item.price * item.quantity
              }}</span>
            </li>
          </ul>
        </section>

        <aside class="cart__summary">
          <h3 class="cart__summary-title hl5">訂單摘要</h3>
          <dl class="cart__summary-list">
            <div class="cart__summary-item">
              <dt class="cart__summary-label hl7">商品總計</dt>
              <dd class="cart__summary-price hl7">{{ totalPrice }}</dd>
            </div>
            <div class="cart__summary-item">
              <dt class="cart__summary-label hl7">運費總計</dt>
              <dd class="cart__summary-price hl7">
                {{ totalPrice >= 1000 ? 0 : 70 }}
              </dd>
            </div>
            <div class="cart__summary-item cart__summary-total">
              <dt class="cart__summary-label hl6">總共金額</dt>
              <dd class="cart__summary-price hl6">
                {{ totalPrice >= 1000 ? totalPrice + 0 : totalPrice + 70 }}
              </dd>
            </div>
          </dl>
          <router-link to="/login" class="cart__checkout primary-button hl5">
            前往結帳
          </router-link>
        </aside>
      </div>
    </main>
  </template>

  <template v-else>
    <component-empty
      title="購物車是空的"
      description="快去逛逛，把喜歡的商品加進來吧！"
      link="/product"
      link-name="Shop Now"
    />
  </template>
</template>

<style lang="scss" scoped>
.cart.container {
  margin: var(--xxl) auto;
}

.cart {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
    position: relative;
    padding: 0 2em;
  }

  &__content {
    flex-grow: 1;
    width: 70%;
    min-width: 576px;
    margin-bottom: 60px;
  }

  &__header,
  &__item {
    display: grid;
    grid-template-columns: 60px 2fr 1fr 60px;
    border-bottom: 1px solid var(--regal-blue);
    color: var(--regal-blue);
    column-gap: 20px;
  }

  &__item {
    padding: 10px 0;
  }

  &__header {
    font-weight: var(--bold);
  }

  &__headline:first-child {
    visibility: hidden;
  }

  &__item {
    font-weight: var(--semi-bold);
  }

  &__item-remove {
    width: fit-content;
    height: fit-content;
    margin: auto;
  }

  &__remove-icon {
    padding: 10px;
    margin-left: 20px;
    font-weight: var(--bold);
    color: var(--nobel);
  }

  &__item-remove:hover &__remove-icon {
    color: var(--burgundy);
  }

  &__item-content {
    display: flex;
    align-items: center;
  }

  &__item-picture {
    width: 80px;
    background-image: linear-gradient(var(--white), var(--alice-blue));
    margin-right: 20px;
  }

  &__item-quantity {
    display: flex;
    align-items: center;
  }

  &__quantity-button {
    flex-grow: 1;
    padding: 8px 16px;
    flex-shrink: 0;
    border: 1px solid var(--regal-blue);
  }

  &__quantity-input {
    flex-grow: 2;
    padding: 8px 16px;
    text-align: center;
    width: 60%;
    min-width: 50px;
    border-radius: unset;
    border: unset;
    border-top: 1px solid var(--regal-blue);
    border-bottom: 1px solid var(--regal-blue);
    outline: unset;
  }

  &__item-price {
    height: fit-content;
    margin: auto 0;
    color: var(--burgundy);

    &::before {
      content: '$';
      font-size: var(--xxs);
    }
  }

  &__summary {
    flex-grow: 1;
    width: 20%;
    min-width: 200px;
    color: var(--regal-blue);
    position: sticky;
    height: 100%;
    top: 100px;

    &-title {
      font-weight: var(--bold);
      text-align: center;
      border-bottom: 1px solid var(--regal-blue);
      color: var(--regal-blue);
    }

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;

      &:nth-child(2) {
        padding-top: 0;
      }
    }

    &-price {
      color: var(--burgundy);

      &::before {
        content: '$';
        font-size: 12px;
      }
    }

    &-total {
      border-top: 1px solid var(--regal-blue);
    }

    &-total > &-price::before {
      content: '$';
      font-size: 14px;
    }
  }

  &__checkout {
    display: block;
    text-align: center;
    width: 100%;
    padding: 8px 0;
    font-weight: var(--semi-bold);
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  .cart {
    &__content {
      min-width: unset;
    }

    &__header {
      grid-template-columns: auto 1fr;
    }

    &__item {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'product price' 'quantity remove';
      gap: 10px;
    }

    &__headline:nth-child(1),
    &__headline:nth-child(3),
    &__headline:nth-child(4) {
      display: none;
    }

    &__item-remove {
      grid-area: remove;
    }

    &__remove-icon {
      margin-left: unset;
    }

    &__item-content {
      grid-area: product;
    }

    &__item-quantity {
      grid-area: quantity;
    }

    &__item-price {
      grid-area: price;
    }
  }
}
</style>
