enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERD,
    RETURNED
}

const myStatus = OrderStatus.DELIVERD;

const isDeliverd=(status:OrderStatus)=>{
    return status === OrderStatus.DELIVERD;

};
isDeliverd(OrderStatus.RETURNED);

enum ArrowKeys {
    UP= "UP",
    DOWN ='down',
    LEFT='left',
    RIGHT="right"
}

