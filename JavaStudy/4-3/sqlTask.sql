/* ■ [回答]と記載のある箇所へ、1〜8の各課題内容に沿ったSQL文を記述しなさい。 */

-- 1. 店舗テーブルから店舗名を抽出しなさい。また、列名の表示は別名で'店舗名'とすること。
	select store_name from store_table


-- 2. 店舗情報を店舗名のABC順に抽出しなさい。
	select * from store_table ORDER BY store_nameabc ASC


-- 3. 在庫テーブルに店舗テーブル、商品テーブルを「内部結合」し、店舗名・商品名・在庫数を全て取得しなさい。
	SELECT store_name, goods_name, quantity
	FROM stock_table
	JOIN goods_table
	ON stock_table.goods_code = goods_table.goods_code
	JOIN store_table
	ON store_table.store_code = store_table.store_code


-- 4. 商品テーブルから全商品の単価の平均値を抽出しなさい。
	SELECT AVG(price) FROM goods_table


-- 5. 店舗コード='EA01'の在庫数の平均値より大きい在庫数を持つ店舗コードを抽出しなさい。
	SELECT store_code FROM stock_table GROUP BY store_code
 	HAVING sum(quantity) > (SELECT avg(quantity) FROM stock_table WHERE store_code = 'EA01')

-- 6. 商品テーブルに「商品コード='M001'、商品名='マフラー'、単価=4500円、更新日付=本日日付」のデータを追加しなさい。※実行後のSELECT結果も貼付すること。
	INSERT INTO goods_table VALUES('M001','マフラー',4500,TO_DATE('21-04-14', 'YY-MM-DD'));

	SELECT * FROM goods_table


-- 7. 在庫テーブルの商品コード='S987'、かつ、店舗コード='EA01'に対して、「在庫数=10、更新日付=本日日付」で更新しなさい。※実行後のSELECT結果も貼付すること。
	UPDATE stock_table SET quantity = 10, update_day = '2021-04-14'
	WHERE goods_code = 'S987' AND store_code = 'EA01'

	select * from stock_table


-- 8. 7で更新した商品を削除しなさい。※実行後のSELECT結果も貼付すること。
	DELETE FROM stock_table WHERE goods_code = 'S987' AND store_code = 'EA01';

	select * from stock_table

