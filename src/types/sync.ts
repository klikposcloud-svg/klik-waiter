export interface KlikSyncEvent<T = any> {
  eventId: string;
  timestamp: string;
  tenantId: string;
  sourceModule: 'POS_CORE' | 'MENU_QR' | 'KDS' | 'KIOSK' | 'CALLER' | 'WAITER' | 'DELIVERY';
  eventType: 
    | 'ORDER_CREATED'
    | 'ORDER_UPDATED'
    | 'ORDER_STATUS_CHANGED'
    | 'PAYMENT_PROCESSED'
    | 'INVENTORY_DEDUCTED'
    | 'ITEM_STOCK_ALERT'
    | 'TABLE_OCCUPIED'
    | 'WAITER_CALLED';
  payload: T;
}

export interface KlikOrder {
  id: string;
  orderNumber: string;
  tableNumber?: string;
  diningOption: 'dine_in' | 'takeaway' | 'delivery';
  customerName?: string;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    notes?: string;
    price: number;
    station: 'kitchen' | 'bar' | 'dessert' | 'packing';
  }>;
  totalUSD: number;
  totalVES: number;
  createdAt: string;
}
