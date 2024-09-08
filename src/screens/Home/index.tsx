import { FC } from "react";

export const HomeScreen: FC = () => {
  return (
    <div>
      <form>
        <div className="w-[80vw] mt-7 mx-auto text-center">
          <div>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div className="mt-14">
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>

          <button type="button" />
        </div>
      </form>
    </div>
  );
};
