import styles from './repair-laptops-component.module.css'
import { useParams } from 'react-router-dom';
import FilterLaptopsComponent from './filter-items-component/filter-laptops-component'
import VendorMenuLaptops from '../vendor-menu/vendor-menu-laptops/vendor-menu-laptops'
import { repairLaptops } from '../../utils/laptops'
import { Filter } from '../filter/filter'
import { useEffect } from 'react';

function RepairLaptopsComponent() {

    const { vendor } = useParams()
    const filterCategory = repairLaptops.filter((i) => i.vendor === vendor)

    useEffect(() => {
        document.title = `Ремонт ноутбуков ${vendor.toUpperCase()}`;
        document.querySelector('meta[name="title"]').setAttribute('content', `Ремонт ноутбуков ${vendor.toUpperCase()}`);
        document.querySelector('meta[name="description"]').setAttribute('content', `Прайс по ремонту ноутбуков ${vendor.toUpperCase()}`);
    }, [vendor]);

    return (
        < div className={styles.container}>
            <div className={styles.title_box}>
                <p className={styles.description}>Выберите производителя и модель ноутбука</p>
            </div>
            <VendorMenuLaptops />
            <Filter />
            <FilterLaptopsComponent data={filterCategory} />
        </div>
    );
}

export default RepairLaptopsComponent;