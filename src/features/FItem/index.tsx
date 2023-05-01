import { Item } from "@src/components/Item";
import { ROUTES } from "@src/constants/routes";
import { type Response } from "@src/schemas/response";

interface ItemProps {
    item: Response;
    className?: string;
}

export const FItem: React.FC<ItemProps> = ({
    item,
    className,
}) => {
    return (
        <Item
            image={ROUTES.IMAGE.get({
                params: {
                    id: item.id,
                }
            })}
            name={item.name}
            className={className}
        />
    );
};
