const Inventory = () => {
    interface Inventory {
      id: number;
      name: string;
      percentage: number;
      color: string;
    }
  
    const inevotyData: Inventory[] = [
      { id: 1, name: "Laptops", percentage: 20, color: "#893BFF" },
      { id: 2, name: "Shoes", percentage: 40, color: "#2916F5" },
      { id: 3, name: "Camera", percentage: 70, color: "#01F9C6" },
      { id: 4, name: "Jeans", percentage: 30, color: "#91B965" },
    ];
  
    return (
      <section className="flex flex-col gap-5 p-5 h-full overflow-y-auto sidebar-scrollbar">
        <h1 className="text-2xl  uppercase font-light tracking-widest text-[#0009] text-center py-6">Inventory</h1>
        {inevotyData.map((items) => (
          <div className="flex items-center" key={items.name}>
            <h1 className="w-28 font-light">{items.name}</h1>
            <div className="w-4/6">
              <div className="relative  h-2 w-28 rounded-lg bg-gray-200">
                <div
                  className="absolute top-0 left-0 h-full rounded-lg"
                  style={{ width: `${items.percentage}%`, backgroundColor: items.color }}
                ></div>
              </div>
            </div>
            <h1 className="text-nowrap font-semibold text-sm">{items.percentage} %</h1>
          </div>
        ))}
      </section>
    );
  };
  
  export default Inventory;
  