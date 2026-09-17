WITH first_logins AS (
    SELECT player_id, MIN(event_date) AS first_logins
    FROM Activity
    GROUP BY player_id
)
SELECT 
ROUND(COUNT(*)/ (SELECT COUNT(*) FROM first_logins),2) AS fraction
FROM first_logins AS a
JOIN Activity AS b
ON a.player_id = b.player_id 
AND b.event_date = DATE_ADD(a.first_logins, INTERVAL 1 DAY)