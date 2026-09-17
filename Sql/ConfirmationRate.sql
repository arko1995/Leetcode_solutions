# Write your MySQL query statement below
SELECT a.user_id, ROUND(
    AVG(
        CASE
            WHEN b.action = 'confirmed' THEN 1.0
            ELSE 0.0
        END
    ),
    2
) AS confirmation_rate
FROM Signups AS a
LEFT JOIN Confirmations AS b
ON a.user_id = b.user_id
GROUP BY a.user_id